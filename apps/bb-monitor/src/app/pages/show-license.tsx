import React from "react";
import Layout from "../layouts";
import Content from "../layouts/content";
import SEO from "../components/seo";
import ShowLicense from "../containers/show-license";

const ShowLicensePage: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content borderBottomWidth="1px">
                <ShowLicense />
            </Content>
        </Layout>
    );
};

export default ShowLicensePage;
