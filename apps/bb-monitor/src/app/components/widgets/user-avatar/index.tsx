import { FC } from "react";
import { Avatar } from "@stevenr/components";
import image from "@stevenr/shared/images/img16.jpg";
import { IUserProps } from "../../../containers/profile-view/types/types";

const UserAvatar: FC<IUserProps> = ({user}) => {
      return (
        <Avatar size="xxl" status="online">
            {user.photoURL && <img src={user.photoURL} alt="user" />}
            {!user.photoURL && <img src={image} alt="user" />}
        </Avatar>
    );
};

export default UserAvatar;
