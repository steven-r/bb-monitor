import React from "react";
import Layout from "../layouts";
import Content from "../layouts/content";
import SEO from "../components/seo";
import ShowChangelog from "../containers/show-changelog";

const ShowChangelogPage: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content borderBottomWidth="1px">
                <ShowChangelog />
            </Content>
        </Layout>
    );
};

export default ShowChangelogPage;
