import React from 'react'
import { Box } from '@mui/material'
import { BreakdownChart, Header } from "components/core"

const Breakdown = () => {
    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Breakdown" subtitle="Breakdown of Sales Category" />

            <Box mt="40px" height="75vh">
                <BreakdownChart />
            </Box>
        </Box>
    )
}

export default Breakdown