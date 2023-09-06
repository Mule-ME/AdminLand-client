import React from 'react'
import { Box, Card, CardActions, CardContent, Collapse, Button, Typography, Rating, useTheme, useMediaQuery } from "@mui/material"
import { useGetProductsQuery } from 'store/api/api'
import Header from "components/core/Header"

const Products = () => {
    return (
        <Box>
            <Header title="Products" subtitle="See your list of products." />
        </Box>
    )
}

export default Products