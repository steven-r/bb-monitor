import { FC, useEffect, useState } from "react";
import { Alert, Col, Markdown, Row, Spinner } from "@stevenr/components";

const ShowChangelog: FC = () => {
    const [changelogContents, setChangelogContents] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const fetchData = () => {
        fetch("/CHANGELOG.md", { redirect: "manual" })
            .then((response) => {
                return response.text();
            })
            .then((data) => {
                if (data.startsWith("<")) {
                    setIsError(true);
                } else {
                    setIsLoading(false);
                    setChangelogContents(data);
                }
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                // eslint-disable-next-line no-console
                console.log(error);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    if (isLoading) {
        return <Spinner />;
    }
    if (isError) {
        return (
            <Alert color="warning">
                We have a problem reading the release notes.
            </Alert>
        );
    }
    return (
        <Row>
            <Col lg={10} md={10}>
                <Markdown content={changelogContents} />
            </Col>
        </Row>
    );
};

export default ShowChangelog;
