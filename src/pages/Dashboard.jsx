import React from "react";
import {
    Box,
    Button,
    Typography,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import dayjs from "dayjs";
import {
    DownloadOutlined,
    Email,
    PointOfSale,
    PersonAdd,
    Traffic,
} from "@mui/icons-material";
import { useGetDashboardQuery } from "store/api/api";
import {
    FlexBox,
    Header,
    BreakdownChart,
    OverviewChart,
    StatCard
} from "components/core";
import DashboardSkeleton from "components/dashboard/DashboardSkeleton";

const Dashboard = () => {
    const theme = useTheme();
    const isNotMediumScreen = useMediaQuery("(min-width:1200px)");

    //default values
    const currentMonth = "December";
    const currentYear = 2021;
    const currentDay = "2021-11-15";
    const { data, isLoading } = useGetDashboardQuery({
        currentMonth,
        currentYear,
        currentDay,
    });


    console.log(data, "currentMonth, currentYear, currentDay")



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
        <>
            {data || !isLoading ?
                <Box m="1.5rem 2.5rem">
                    <FlexBox>
                        <Header title="Dashboard" subtitle="Welcome to your dashboard!" />
                        {/* <Box>
                <Button
                    sx={{
                        backgroundColor: theme.palette.secondary.light,
                        color: theme.palette.background.alt,
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                    }}
                >
                    <DownloadOutlined sx={{ mr: "10px" }} />
                    Download Reports
                </Button>
            </Box> */}
                    </FlexBox>
                    <Box
                        mt="20px"
                        display="grid"
                        gridTemplateColumns="repeat(12, 1fr)"
                        gridAutoRows="160px"
                        gap="20px"
                        sx={{
                            "& > div": { gridColumn: isNotMediumScreen ? undefined : "span 12" },
                        }}
                    >
                        {/* ROW 1 */}
                        <StatCard
                            title="Total Customers"
                            value={data && data?.data?.overallStat[0]?.totalCustomers}
                            increase="+14%"
                            description="Since last month"
                            icon={
                                <Email
                                    sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                                />
                            }
                        />
                        <StatCard
                            title="Sales Today"
                            value={data && data?.data?.overallStat[0]?.currentDayStats[0]?.totalSales}
                            increase="+21%"
                            description="Since last month"
                            icon={
                                <PointOfSale
                                    sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                                />
                            }
                        />
                        <Box
                            gridColumn="span 8"
                            gridRow="span 2"
                            backgroundColor={theme.palette.background.alt}
                            p="1rem"
                            borderRadius="0.55rem"
                        >
                            <OverviewChart view="sales" isDashboard={true} />
                        </Box>
                        <StatCard
                            title="Monthly Sales"
                            value={data && data?.data?.overallStat[0]?.currentMonthStats[0]?.totalSales}
                            increase="+5%"
                            description="Since last month"
                            icon={
                                <PersonAdd
                                    sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                                />
                            }
                        />
                        <StatCard
                            title="Yearly Sales"
                            value={data && data?.data?.overallStat[0]?.yearlySalesTotal}
                            increase="+43%"
                            description="Since last month"
                            icon={
                                <Traffic
                                    sx={{ color: theme.palette.secondary[300], fontSize: "26px" }}
                                />
                            }
                        />

                        {/* ROW 2 */}
                        <Box
                            gridColumn="span 8"
                            gridRow="span 3"
                            sx={{
                                "& .MuiDataGrid-root": {
                                    border: "none",
                                    borderRadius: "5rem",
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
                                    backgroundColor: theme.palette.background.alt,
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
                                rows={(data && data?.data?.transactions) || []}
                                columns={columns}
                            />
                        </Box>
                        <Box
                            gridColumn="span 4"
                            gridRow="span 3"
                            backgroundColor={theme.palette.background.alt}
                            p="1.5rem"
                            borderRadius="0.55rem"
                        >
                            <Typography variant="h6" sx={{ color: theme.palette.secondary[100] }}>
                                Sales By Category
                            </Typography>
                            <BreakdownChart isDashboard={true} />
                            <Typography
                                p="0 0.6rem"
                                fontSize="0.8rem"
                                sx={{ color: theme.palette.secondary[200] }}
                            >
                                Breakdown of real states and information via category for revenue
                                made for this year and total sales.
                            </Typography>
                        </Box>
                    </Box>

                </Box>
                :
                <Box m="1.5rem 2.5rem">
                    <FlexBox>
                        <Header title="Dashboard" subtitle="Welcome to your dashboard!" />
                    </FlexBox>
                    <DashboardSkeleton />
                </Box>

            }
        </>
    )
};

export default Dashboard;
