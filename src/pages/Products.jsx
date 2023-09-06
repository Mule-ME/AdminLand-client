import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import { useGetProductsQuery } from "store/api/api";
import { Header } from "components/core";
import { ProductCard, ProductSkeleton } from "components/product";

const Products = () => {
    const { data, isLoading } = useGetProductsQuery();
    const isNotMobile = useMediaQuery("(min-width:1000px)");

    return (
        <Box m="1.5rem 2.5rem">
            <Header title="Products" subtitle="See your list of products." />

            {data || !isLoading ? (
                <Box
                    mt="20px"
                    display="grid"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    justifyContent="space-between"
                    rowGap="20px"
                    columnGap="1.33%"
                    sx={{
                        "& >div": {
                            gridColumn: isNotMobile ? undefined : "span 4",
                        },
                    }}
                >
                    {data?.map(
                        ({
                            _id,
                            name,
                            description,
                            price,
                            rating,
                            category,
                            supply,
                            state,
                        }) => (
                            <ProductCard
                                key={_id}
                                _id={_id}
                                name={name}
                                description={description}
                                price={price}
                                rating={rating}
                                category={category}
                                supply={supply}
                                state={state}
                            />
                        )
                    )}
                </Box>
            ) :
                (
                    <Box
                        mt="20px"
                        display="grid"
                        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                        justifyContent="space-between"
                        rowGap="20px"
                        columnGap="1.33%"
                        sx={{
                            "& >div": {
                                gridColumn: isNotMobile ? undefined : "span 4",
                            },
                        }}
                    >
                        <ProductSkeleton />
                    </Box>

                )}
        </Box>
    );
};

export default Products;
