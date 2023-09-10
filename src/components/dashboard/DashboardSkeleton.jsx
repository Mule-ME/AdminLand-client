import React from "react";
import { Box, Skeleton, useMediaQuery } from "@mui/material";

const DashboardSkeleton = () => {
    const isNotMediumScreen = useMediaQuery("(min-width:768px)");

    return (
        <Box width="100%">
            <Box display="flex" flexDirection={isNotMediumScreen ? "column" : "row"} gap="20px" width="100%" >
                <Box display="flex" flexDirection="row" gap="20px" width={isNotMediumScreen ? "100%" : "35%"}>
                    <Box width="50%">
                        <Box marginTop="-40px" width="100%">
                            <Skeleton width="100%" height={250} />
                        </Box>
                        <Box marginTop="-80px" width="100%">
                            <Skeleton width="100%" height={250} />
                        </Box>
                    </Box>
                    <Box width="50%">
                        <Box marginTop="-40px" width="100%">
                            <Skeleton width="100%" height={250} />
                        </Box>
                        <Box marginTop="-80px" width="100%">
                            <Skeleton width="100%" height={250} />
                        </Box>
                    </Box>
                </Box>
                <Box marginTop={isNotMediumScreen ? "-150px" : "-100px"} width={isNotMediumScreen ? "100%" : "65%"}>
                    <Skeleton width="100%" height={530} />
                </Box>
            </Box>
            <Box marginTop="-160px">
                <Skeleton width="100%" height={490} />
            </Box>
        </Box>
    );
};

export default DashboardSkeleton;
