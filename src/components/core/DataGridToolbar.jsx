import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import {
    GridToolbarDensitySelector,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarColumnsButton,
} from "@mui/x-data-grid";
import { Search } from "@mui/icons-material";
import FlexBox from "./FlexBox";

const DataGridToolbar = ({ inputLabel, handleChange, }) => {
    return (
        <GridToolbarContainer>
            <FlexBox width="100%">
                <FlexBox>
                    <GridToolbarDensitySelector />
                    <GridToolbarColumnsButton />
                    <GridToolbarExport />
                </FlexBox>
                <TextField
                    label={inputLabel}
                    sx={{ mb: "1rem", width: "15rem" }}
                    onChange={handleChange}
                    variant="standard"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">

                                <Search />
                            </InputAdornment>
                        ),
                    }}
                />
            </FlexBox>
        </GridToolbarContainer>
    );
};

export default DataGridToolbar;
