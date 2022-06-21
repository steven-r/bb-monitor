import React from "react";
import { Row } from "@stevenr/components";
import Layout from "../layouts";
import Content from "../layouts/content";
import PageHeader from "../components/page-header";
import SEO from "../components/seo";
import MainContent from "../containers/landing-page/main";

const LandingPage: React.FC = () => {
    return (
        <Layout>
            <SEO />
            <Content borderBottomWidth="1px">
                <PageHeader
                    prev={[{ text: "Home", link: "/" }]}
                    title="Bitburner-Monitor"
                    wcText="Bitburner-Monitor"
                />
            </Content>
            <Content mt={[null, null, null, "0px"]}>
                <Row>
                    <MainContent />
                </Row>
            </Content>
        </Layout>
    );
};

export default LandingPage;
