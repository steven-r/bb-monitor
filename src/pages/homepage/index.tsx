import { Text } from "grommet";
import { FC } from "react";
import Layout from "../../layout";

const HomePage: FC = () => {
        return <Layout pageHeader={{ title:"Welcome to BitBurner Monitor" }}>
        <Text>
            This is some text
        </Text>
    </Layout>
}

export default HomePage;