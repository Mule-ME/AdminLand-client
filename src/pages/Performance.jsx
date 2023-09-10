import React from 'react'
import { useSelector } from 'react-redux'
import { Box, useTheme } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import dayjs from 'dayjs'
import { useGetUserPerformanceQuery } from 'store/api/api'
import { selectUserId } from 'store/selectors'
import { Header, CustomColumnMenu } from "components/core"

const Performance = () => {

    const theme = useTheme()
    const userId = useSelector(selectUserId)

    const { data, isLoading } = useGetUserPerformanceQuery(userId)



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
            <Header title="Performance" subtitle="Track your Affiliate Sales Performance Here" />
            <Box
                mt="40px"
                height="75vh"
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
                    loading={isLoading || !data?.data?.sales}
                    getRowId={(row) => row._id}
                    rows={data?.data?.sales || []}
                    columns={columns}

                    components={{
                        ColumnMenu: CustomColumnMenu
                    }}
                />
            </Box>
        </Box>
    )

}

export default Performance