import {UserType} from 'aws-sdk/clients/cognitoidentityserviceprovider';

interface GenericAmpliyApiListResponse {
    NextToken: string;
}

interface AdminApiListUsersReponse extends GenericAmpliyApiListResponse {
    Users: UserType[];
}