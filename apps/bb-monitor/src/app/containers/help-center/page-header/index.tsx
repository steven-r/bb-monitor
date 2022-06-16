import { FC } from "react";
import { SpaceProps } from "@stevenr/shared";
import { Heading, Text } from "@stevenr/components";
import SearchForm from "../../../components/search-form";
import { StyledWrap } from "./style";

interface IProps extends SpaceProps {
    /**
     * Put Extra classes
     */
    className?: string;
}

const PageHeader: FC<IProps> = ({ className, ...rest }) => {
    return (
        <StyledWrap className={className} {...rest}>
            <div>
                <Heading as="h4" mb="5px">
                    Help Support Center
                </Heading>
                <Text color="text3">
                    Search for any help questions or topics.
                </Text>
            </div>
            <SearchForm />
        </StyledWrap>
    );
};

export default PageHeader;
