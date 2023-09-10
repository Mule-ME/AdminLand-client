import React, { useState } from "react";
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
    Box,
    Button,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    useTheme,
} from "@mui/material";
import { setMode } from "store/reducer";
import { FlexBox } from "components/core";
import profileImage from "assets/profile.jpg";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {

    const theme = useTheme();
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

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

                    <FlexBox>
                        <Button
                            onClick={handleClick}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                textTransform: "none",
                                gap: "1rem",
                            }}
                        >
                            <Box
                                component="img"
                                alt="profile"
                                src={profileImage}
                                height="30px"
                                width="30px"
                                borderRadius="50%"
                                sx={{ objectFit: "cover" }}
                            />
                            <Box textAlign="left">
                                <Typography
                                    fontWeight="bold"
                                    fontSize="0.8rem"
                                    sx={{ color: theme.palette.secondary[100] }}
                                >
                                    {user?.name}
                                </Typography>
                                <Typography
                                    fontSize="0.75rem"
                                    sx={{ color: theme.palette.secondary[200] }}
                                >
                                    {user?.occupation}
                                </Typography>
                            </Box>
                            <ArrowDropDownOutlined sx={{ color: theme.palette.secondary[300], fontSize: '25px' }} />
                        </Button>

                        <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} >

                            <MenuItem onClick={handleClose}>Log out </MenuItem>
                        </Menu>
                    </FlexBox>
                </FlexBox>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
