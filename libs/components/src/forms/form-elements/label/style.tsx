/* eslint-disable jsx-a11y/label-has-associated-control */
import styled, {
    SpaceProps,
    TypographyProps,
    LayoutProps,
} from "@stevenr/shared";

interface IProps extends SpaceProps, TypographyProps, LayoutProps {}

export const StyledLabel = styled(
    ({ mb, display, fontSize, fontWeight, ...rest }) => <label {...rest} />
)<IProps>`
    display: inline-block;
`;
