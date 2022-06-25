import React from "react";
import Layout from "../layouts";
import Content from "../layouts/content";
import SEO from "../components/seo";
import DisplayPrivacyPolicy from "../containers/privacy-policy";

const PrivacyPolicy: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content borderBottomWidth="1px">
                <DisplayPrivacyPolicy />
            </Content>
        </Layout>
    );
};

export default PrivacyPolicy;
