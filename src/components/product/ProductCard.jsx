import React, { useState } from "react";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    Rating,
    useTheme,
} from "@mui/material";

const ProductCard = ({
    _id,
    name,
    description,
    price,
    rating,
    category,
    supply,
    state,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const theme = useTheme();

    return (
        <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem",
            }}
        >
            <CardContent>
                <Typography
                    sx={{ fontSize: 14 }}
                    color={theme.palette.secondary[700]}
                    gutterBottom
                >
                    {category}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography
                    sx={{ mb: "1.5rem" }}
                    color={theme.palette.secondary[400]}
                    gutterBottom
                >
                    ${Number(price).toFixed(2)}
                </Typography>
                <Rating value={Number(rating)} readOnly />
                <Typography variant="body2">{description}</Typography>
            </CardContent>

            <CardActions>
                <Button
                    variant="primary"
                    size="small"
                    onClick={() => setIsExpanded(!isExpanded)}
                >
                    {!isExpanded ? 'See more' : 'See less'}
                </Button>
            </CardActions>
            <Collapse
                in={isExpanded}
                timeout="auto"
                unmountOnExit
                sx={{
                    color: theme.palette.neutral[300],
                }}
            >
                <CardContent>
                    <Typography>id:{_id}</Typography>
                    <Typography>Supply Left:{supply}</Typography>
                    <Typography>
                        Yearly Sales This Year:{state?.yearlySalesTotal}
                    </Typography>
                    <Typography>
                        Yearly Unit Sold Year:{state?.yearlyTotalSoldUnits}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default ProductCard;
