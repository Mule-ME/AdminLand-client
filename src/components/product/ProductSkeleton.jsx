import { Box, Skeleton } from '@mui/material'
import React from 'react'

const ProductSkeleton = () => {

    const skeletons = new Array(12).fill(12)
    return (
        <>
            {skeletons?.map((item, index) =>
                <Box mt={2} key={index + item}>
                    <Skeleton variant="rectangular" height={190} />
                    <Skeleton />
                    <Skeleton width="60%" />
                </Box >
            )}

        </>
    )
}

export default ProductSkeleton