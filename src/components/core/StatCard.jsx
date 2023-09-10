import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBox from "./FlexBox";

const StatCard = ({ title, value, increase, icon, description }) => {
    const theme = useTheme();
    return (
        <Box
            gridColumn="span 2"
            gridRow="span 1"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            p="1.25rem 1rem"
            flex="1 1 100%"
            backgroundColor={theme.palette.background.alt}
            borderRadius="0.55rem"
        >
            <FlexBox>
                <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
                    {title}
                </Typography>
                {icon}
            </FlexBox>

            <Typography
                variant="h3"
                fontWeight="600"
                sx={{ color: theme.palette.secondary[200] }}
            >
                {value}
            </Typography>
            <FlexBox gap="1rem">
                <Typography
                    variant="h5"
                    fontStyle="italic"
                    sx={{ color: theme.palette.secondary.light }}
                >
                    {increase}
                </Typography>
                <Typography>{description}</Typography>
            </FlexBox>
        </Box>
    );
};

export default StatCard