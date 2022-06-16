import { FC } from "react";
import { Avatar } from "@stevenr/components";
import image from "@stevenr/shared/images/img16.jpg";

const UserAvatar: FC = () => {
    return (
        <Avatar size="xxl" status="online">
            <img src={image} alt="user" />
        </Avatar>
    );
};

export default UserAvatar;
