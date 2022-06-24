import React from "react";
import {
    Edit3,
    User,
    HelpCircle,
    LifeBuoy,
    Settings,
    LogOut,
} from "react-feather";
import {
    DropdownToggle,
    Dropdown,
    Avatar,
    AvatarInitial,
} from "@stevenr/components";
import {
    StyledDropMenu,
    StyledAuthorName,
    StyledAuthorRole,
    StyledDropItem,
    StyledDivider,
    StyledAvatar,
} from "./style";

const ProfileDropdown: React.FC = () => {
    return (
        <Dropdown direction="down" className="dropdown-profile">
            <DropdownToggle variant="texted">
                <StyledAvatar size="sm" shape="circle">
                    <AvatarInitial>SR</AvatarInitial>
                </StyledAvatar>
            </DropdownToggle>
            <StyledDropMenu>
                <Avatar size="lg" shape="circle">
                    <AvatarInitial>SR</AvatarInitial>
                </Avatar>
                <StyledAuthorName>Me</StyledAuthorName>
                <StyledAuthorRole>@You</StyledAuthorRole>
                <StyledDropItem path="/app/profile-view">
                    <Edit3 size="24" />
                    Edit Profile
                </StyledDropItem>
                <StyledDropItem path="/app/profile-view" mt="10px">
                    <User size="24" />
                    View Profile
                </StyledDropItem>
                <StyledDivider />
                <StyledDropItem
                    path="https://hasthemes.com/contact-us/"
                    mt="10px"
                >
                    <HelpCircle size="24" />
                    Help Center
                </StyledDropItem>
                <StyledDropItem path="/" mt="10px">
                    <LifeBuoy size="24" />
                    Forum
                </StyledDropItem>
                <StyledDropItem path="/profile-view" mt="10px">
                    <Settings size="24" />
                    Account Settings
                </StyledDropItem>
                <StyledDropItem path="/profile-view" mt="10px">
                    <Settings size="24" />
                    Privacy Settings
                </StyledDropItem>
                <StyledDropItem path="#" mt="10px">
                    <LogOut size="24" />
                    Sign Out
                </StyledDropItem>
            </StyledDropMenu>
        </Dropdown>
    );
};

export default ProfileDropdown;
function buildInitials(user: any) {
    return user.displayName?.split(' ').filter(s => s.substring(0, 1)).join();
}

