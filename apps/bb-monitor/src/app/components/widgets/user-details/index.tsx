import { FC } from "react";
import { Anchor, Button } from "@stevenr/components";
import {
    StyledName,
    StyledUserName,
    StyledBtnWrap,
    StyledDesc,
    StyledBottom,
    StyledSkillset,
    StyledSkillNumb,
    StyledSkillLabel,
} from "./style";
import { IUserProps } from "../../../containers/profile-view/types/types";

const UserDetails: FC<IUserProps> = ({user}) => {
    return (
        <>
            <StyledName>{user.displayName}</StyledName>
            <StyledUserName>{user.email}</StyledUserName>
            <StyledDesc>
                Redhead, Innovator, Saviour of Mankind, Hopeless Romantic,
                Attractive 20-something Yogurt Enthusiast...{" "}
                <Anchor path="#!">Read More</Anchor>
            </StyledDesc>
            <StyledBottom>
                <StyledSkillset>
                    <StyledSkillNumb>
                        <Anchor path="#!" color="text">
                            1.4k
                        </Anchor>
                    </StyledSkillNumb>
                    <StyledSkillLabel>Stars</StyledSkillLabel>
                </StyledSkillset>
                <StyledSkillset>
                    <StyledSkillNumb>
                        <Anchor path="#!" color="text">
                            2.8k
                        </Anchor>
                    </StyledSkillNumb>
                    <StyledSkillLabel>Followers</StyledSkillLabel>
                </StyledSkillset>
                <StyledSkillset>
                    <StyledSkillNumb>
                        <Anchor path="#!" color="text">
                            437
                        </Anchor>
                    </StyledSkillNumb>
                    <StyledSkillLabel>Following</StyledSkillLabel>
                </StyledSkillset>
            </StyledBottom>
        </>
    );
};

export default UserDetails;
