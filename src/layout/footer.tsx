import { FC } from "react";
import { Footer, Text } from "grommet";
import { Link } from "react-router-dom";

const LayoutFooter: FC = () => {
    return(
        <Footer background="light-4" pad="small" margin={{top: "small"}}>
            <Text size="xsmall">
                Copyright &copy; {new Date().getFullYear()} Stephen Reindl
            </Text>
            <Link to="/privacy-policy"><Text size="small">Privacy Policy</Text></Link> 
        </Footer>
    );
}

export default LayoutFooter;