import { API, Auth } from 'aws-amplify';
import { DataTable, Notification, Spinner } from 'grommet';
import React, { FC, useEffect, useState } from 'react';
import { UserType } from 'aws-sdk/clients/cognitoidentityserviceprovider';

import Layout from '../../../layout';
import PaginatedAPIRetrieve from '../../../lib/fetchpaged';
import { FormCheckmark } from 'grommet-icons';

const getUserList = async (limit: number, nextToken?: string) => {
    const myInit = {
        queryStringParameters: {
            limit: limit,
            token: nextToken,
        },
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${(await Auth.currentSession())
                .getAccessToken()
                .getJwtToken()}`,
        },
    };
    return await API.get('AdminQueries', '/listUsers', myInit);
};

const getAdminUsers = async (limit: number, nextToken?: string) => {
    const myInit = {
        queryStringParameters: {
            limit: limit,
            groupname: 'Admins',
            token: nextToken,
        },
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${(await Auth.currentSession())
                .getAccessToken()
                .getJwtToken()}`,
        },
    };
    return await API.get('AdminQueries', '/listUsersInGroup', myInit);
};

const AdminUserListTable: FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<string>();

    async function loadData(): Promise<any[]> {
        return PaginatedAPIRetrieve<UserType>(getUserList).then((allUsers) => {
            return PaginatedAPIRetrieve<UserType>(getAdminUsers).then(
                (adminUsers) => {
                    let res: any[] = [];
                    allUsers.forEach((item: UserType) => {
                        if (!item.Username || !item.Attributes) {
                            return;
                        }
                        let record = {
                            email: item.Attributes?.filter(
                                (s: { Name: string; }) => s.Name === 'email'
                            )
                                .map((f) => f.Value)
                                .shift(),
                            status: item.UserStatus,
                            admin: adminUsers.find(
                                (u) => u.Username === item.Username
                            ) !== undefined,
                        };
                        res.push(record);
                    });
                    return res;
                }
            );
        });
    }
    useEffect(() => {
        loadData()
            .then((res) => {
                setIsLoading(false);
                setData(res);
            })
            .catch((err) => setError(err.message));
    }, []);

    if (isLoading) {
        return <Spinner message="Loading Data" />;
    }
    if (error) {
        return (
            <Notification
                status="warning"
                title="Error reading API"
                message={error}
            />
        );
    }

    return (
        <>
            <DataTable
                columns={[
                    {
                        property: 'email',
                        header: 'E-Mail',
                        primary: true,
                    },
                    { property: 'status', header: 'User Status' },
                    {
                        property: 'admin',
                        header: 'Is Admin',
                        render: (value) => {
                            if (value.admin) return <FormCheckmark color="green" />;
                        },
                        align: "center"
                    },
                ]}
                data={data}
            />
        </>
    );
};

const AdminUserList: FC = () => {
    return (
        <Layout pageHeader={{ title: 'User List' }}>
            <AdminUserListTable />
        </Layout>
    );
};

export default AdminUserList;
