import { FC } from "react";
import { StyledSidebar, StyledHeader, StyledBody } from "./style";
import NewDropdown from "apps/bb-monitor/src/app/components/apps/file-manager/new-dropdown";
import { RootState } from "apps/bb-monitor/src/app/redux/store";
import { useAppSelector } from "apps/bb-monitor/src/app/redux/hooks";
import UploadDropdown from "apps/bb-monitor/src/app/components/apps/file-manager/upload-dropdown";
import ScrollBar from "apps/bb-monitor/src/app/components/scrollbar";
import MyDrive from "apps/bb-monitor/src/app/components/apps/file-manager/my-drive";
import FileLibrary from "apps/bb-monitor/src/app/components/apps/file-manager/file-library";
import StorageStatus from "apps/bb-monitor/src/app/components/apps/file-manager/storage-status";

const Sidebar: FC = () => {
    const { sidebar } = useAppSelector((state: RootState) => state.ui);
    return (
        <StyledSidebar $show={sidebar}>
            <StyledHeader>
                <NewDropdown />
                <UploadDropdown />
            </StyledHeader>
            <ScrollBar top="55px">
                <StyledBody>
                    <MyDrive />
                    <FileLibrary />
                    <StorageStatus />
                </StyledBody>
            </ScrollBar>
        </StyledSidebar>
    );
};

export default Sidebar;
