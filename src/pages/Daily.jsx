import React, { useMemo, useState } from "react";
import { Box } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { CustomDatePicker, Header } from "components/core";
import { useTheme } from "@emotion/react";
import { useGetSalesQuery } from "store/api/api";

const Daily = () => {
    const { data, isLoading } = useGetSalesQuery();
    const theme = useTheme();

    const [startDate, setStartDate] = useState(new Date("2021-01-01"));
    const [endDate, setEndDate] = useState(new Date("2021-03-01"));

    const [formattedData] = useMemo(() => {
        if (!data) return [];

        const { dailyData } = data;
        const totalSalesLine = {
            id: "totalSales",
            color: theme.palette.secondary.main,
            data: [],
        };
        const totalUnitsLine = {
            id: "totalUnits",
            color: theme.palette.secondary[600],
            data: [],
        };

        for (const { date, totalSales, totalUnits } of Object?.values(dailyData)) {
            const dateFormatted = new Date(date);

            if (dateFormatted >= startDate && dateFormatted <= endDate) {
                const splitDate = date?.substring(date?.indexOf("-") + 1);
                totalSalesLine.data.push({ x: splitDate, y: totalSales });
                totalUnitsLine.data.push({ x: splitDate, y: totalUnits });
            }
        }

        const formattedData = [totalSalesLine, totalUnitsLine];
        return [formattedData];
    }, [data, startDate, endDate]);


    console.log(startDate, endDate, "202101")
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Daily Sales" subtitle="Chart of daily sales" />

            <Box height="75vh">
                <Box display="flex" justifyContent="flex-end" gap="10px">
                    <Box>
                        <CustomDatePicker
                            selected={startDate}
                            startDate={startDate}
                            endDate={endDate}
                            setDate={setStartDate}
                            selectStart
                            isClearable
                        />
                    </Box>
                    <Box>
                        <CustomDatePicker
                            selected={endDate}
                            startDate={startDate}
                            endDate={endDate}
                            setDate={setEndDate}
                            selectStart
                            isClearable
                        />
                    </Box>
                </Box>

                {data && !isLoading ? (
                    <ResponsiveLine
                        data={formattedData}
                        theme={{
                            axis: {
                                domain: {
                                    line: {
                                        stroke: theme.palette.secondary[200],
                                    },
                                },
                                legend: {
                                    text: {
                                        fill: theme.palette.secondary[200],
                                    },
                                },
                                ticks: {
                                    line: {
                                        stroke: theme.palette.secondary[200],
                                        strokeWidth: 1,
                                    },
                                    text: {
                                        fill: theme.palette.secondary[200],
                                    },
                                },
                            },
                            legends: {
                                text: {
                                    fill: theme.palette.secondary[200],
                                },
                            },
                            tooltip: {
                                container: {
                                    color: theme.palette.primary.main,
                                },
                            },
                        }}
                        colors={{ datum: "color" }}
                        margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
                        xScale={{ type: "point" }}
                        yScale={{
                            type: "linear",
                            min: "auto",
                            max: "auto",
                            stacked: false,
                            reverse: false,
                        }}
                        yFormat=" >-.2f"
                        curve="catmullRom"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: "bottom",
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 90,
                            legend: "Month",
                            legendOffset: 60,
                            legendPosition: "middle",
                        }}
                        axisLeft={{
                            orient: "left",
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: "Total",
                            legendOffset: -50,
                            legendPosition: "middle",
                        }}
                        enableGridX={false}
                        enableGridY={false}
                        pointSize={10}
                        pointColor={{ theme: "background" }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: "serieColor" }}
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                anchor: "top-right",
                                direction: "column",
                                justify: false,
                                translateX: 50,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: "left-to-right",
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: "circle",
                                symbolBorderColor: "rgba(0, 0, 0, .5)",
                                effects: [
                                    {
                                        on: "hover",
                                        style: {
                                            itemBackground: "rgba(0, 0, 0, .03)",
                                            itemOpacity: 1,
                                        },
                                    },
                                ],
                            },
                        ]}
                    />
                ) : (
                    <>Loading...</>
                )}
            </Box>
        </Box>
    );
};

export default Daily;