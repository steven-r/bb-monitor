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
import { useFirebase } from "react-redux-firebase";
import { User as FirebaseUser } from "@firebase/auth-types";

const ProfileDropdown: React.FC = () => {
    const fb = useFirebase();
    const user = fb.auth().currentUser;
    const signout = () => {
        return fb.logout();
    };

    return (
        <Dropdown direction="down" className="dropdown-profile">
            <DropdownToggle variant="texted">
                <StyledAvatar size="sm" shape="circle">
                    {user?.photoURL && <Avatar><img src={user.photoURL} alt={user?.displayName || ""}/></Avatar>}
                    {!user?.photoURL && 
                    <AvatarInitial>{user ? buildInitials(user) : "??"}</AvatarInitial>}
                </StyledAvatar>
            </DropdownToggle>
            <StyledDropMenu>
                <Avatar size="lg" shape="circle">
                {user?.photoURL && <Avatar><img src={user.photoURL} alt={user?.displayName || ""}/></Avatar>}
                    {!user?.photoURL && 
                    <AvatarInitial>{user ? buildInitials(user) : "??"}</AvatarInitial>}
                </Avatar>
                <StyledAuthorName>{user?.displayName}</StyledAuthorName>
                <StyledAuthorRole>{user?.email}</StyledAuthorRole>
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
                <StyledDropItem onClick={signout} path="#" mt="10px">
                    <LogOut size="24" />
                    Sign Out
                </StyledDropItem>
            </StyledDropMenu>
        </Dropdown>
    );
};

export default ProfileDropdown;
function buildInitials(user: FirebaseUser) {
    return user.displayName?.split(' ').filter(s => s.substring(0, 1)).join();
}

