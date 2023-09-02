import React from "react";
import { useDispatch } from "react-redux";
import {
    LightModeOutlined,
    DarkModeOutlined,
    Menu as MenuIcon,
    Search,
    SettingsOutlined,
    ArrowDropDownOutlined,
} from "@mui/icons-material";
import {
    AppBar,
    IconButton,
    InputBase,
    Toolbar,
    useTheme,
} from "@mui/material";
import { setMode } from "store/reducer";
import FlexBox from "components/core/FlexBox";
import profileImage from "assets/profile.jpg";

const Navbar = ({
    isSidebarOpen,
    setIsSidebarOpen,
}) => {
    const dispatch = useDispatch();

    const theme = useTheme();
    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <FlexBox gap="1rem">
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <MenuIcon />
                    </IconButton>
                    <FlexBox
                        bgcolor={theme.palette.background.alt}
                        borderRadius="9px"
                        gap="4rem"
                        p="0.1rem 1.5rem"
                    >
                        <InputBase placeholder="Search..." />
                        <IconButton>
                            <Search />
                        </IconButton>
                    </FlexBox>
                </FlexBox>

                <FlexBox>
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeOutlined fontSize="25px" />
                        ) : (
                            <LightModeOutlined fontSize="25px" />
                        )}
                    </IconButton>
                    <IconButton>
                        <SettingsOutlined />
                    </IconButton>
                </FlexBox>




            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
