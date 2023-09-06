import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
    const theme = useTheme();
    return (
        <Box>
            <Typography
                color={theme.palette.secondary[100]}
                fontWeight="bold"
                variant="h2"
                textTransform="uppercase"
                sx={{ mb: "5px" }}
            >
                {title}
            </Typography>
            <Typography
                variant="h5"
                color={theme.palette.secondary[100]}
            >
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;
