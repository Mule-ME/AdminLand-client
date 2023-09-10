import React, { forwardRef } from "react";
import { Button, useTheme } from "@mui/material";
import { CalendarMonthOutlined } from "@mui/icons-material"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const CustomDatePicker = ({ selected, setDate, startDate, endDate, selectStart, selectEnd }) => {


    const theme = useTheme();

    const CustomDateSelector = forwardRef(({ value, onClick }, ref) => (
        <Button sx={{ backgroundColor: theme.palette.background.alt, color: theme.palette.primary[200], height: "40px", fontSize: "13px", width: "150px", textTransform: "capitalize", gap: '10px' }} onClick={onClick} ref={ref}>
            <CalendarMonthOutlined />
            {value ? value : "Select date"}
        </Button>
    ));

    return (
        <DatePicker
            selected={selected === startDate ? startDate : endDate}
            onChange={(date) => setDate(date)}
            selectsStart={selectStart}
            selectsEnd={selectEnd}
            startDate={startDate}
            endDate={endDate}
            customInput={<CustomDateSelector />}

        />
    )
}

export default CustomDatePicker