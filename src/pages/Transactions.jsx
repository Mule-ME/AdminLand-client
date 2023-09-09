import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import { useGetTransactionsQuery } from "store/api/api";
import { Header, DataGridToolbar } from "components/core";

const Transactions = () => {
    const theme = useTheme();

    //parameters to be sent to the backend
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(20);
    const [sort, setSort] = useState({});
    const [search, setSearch] = useState("");

    //TODO: preferable to use debouncing to minimize API request
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };


    const { data, isLoading } = useGetTransactionsQuery({
        page,
        pageSize,
        sort: JSON.stringify(sort),
        search,
    });



    const columns = [
        {
            field: "_id",
            headerName: "Transaction ID",
            flex: 1.5,
        },
        {
            field: "user",
            headerName: "User Name",
            flex: 1,
            renderCell: (params) => {
                return params?.value?.name;
            },
        },
        {
            field: "phoneNumber",
            headerName: "Phone Number",
            flex: 1,
            renderCell: (params) => {
                return params?.row?.user?.phoneNumber?.replace(
                    /^(\d{3})(\d{3})(\d{4})/,
                    "($1)$2-$3"
                );
            },
        },
        {
            field: "country",
            headerName: "Country",
            flex: 1,
            renderCell: (params) => {
                return params?.row?.user?.country;
            },
        },
        {
            field: "createdAt",
            headerName: "Created At",
            renderCell: (params) => {
                return dayjs(params?.value).format("DD-MMM-YYYY");
            },
            flex: 1,
        },

        {
            field: "products",
            headerName: "No. of  Products",
            flex: 1,
            sortable: false,
            renderCell: (params) => {
                return params?.value?.length
            },
        },
        {
            field: "cost",
            headerName: "Cost",
            flex: 2,
            renderCell: (params) => {
                return `$${Number(params.value).toFixed(2)}`;
            },
        },
    ];





    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Transactions" subtitle="Entire list of transaction" />
            <Box
                mt="15px"
                height="80vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: theme.palette.primary.light,
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.secondary[100],
                        borderTop: "none",
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${theme.palette.secondary[200]} !important`,
                    },
                }}
            >
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={(data && data?.data) || []}
                    columns={columns}
                    rowCount={data && data.total}
                    rowsPerPageOptions={[20, 50, 100]}
                    pagination
                    page={page}
                    pageSize={pageSize}
                    paginationMode="server"
                    onPageChange={(newPage) => setPage(newPage)}
                    onPageSizeChange={(newPage) => setPageSize(newPage)}
                    onSortModelChange={(newSortModel) => setSort(...newSortModel)}
                    components={{ Toolbar: DataGridToolbar }}
                    componentsProps={{
                        toolbar: {
                            inputLabel: "Search...",
                            handleChange: handleSearch,
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Transactions;
