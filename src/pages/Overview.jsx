import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import { Header, OverviewChart } from "components/core";

const Overview = () => {
    const [view, setView] = useState("units");

    return (
        <Box m="1.5rem 2.5rem" height="70vh">
            <Header
                title="Overview"
                subtitle="Overview of general revenue and profit"
            />

            <Box height="75hv">
                <FormControl sx={{ mt: "2rem", width: '10rem' }}>
                    <InputLabel>View</InputLabel>
                    <Select
                        value={view}
                        label="View"
                        onChange={(event) => setView(event.target.value)}
                    >
                        <MenuItem value="sales">Sales</MenuItem>
                        <MenuItem value="units">Units</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <OverviewChart view={view} />
        </Box>
    );
};

export default Overview;
