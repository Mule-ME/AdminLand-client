import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { Box, useMediaQuery } from '@mui/material'
import { selectUserId } from 'store/selectors';
import { useGetUserQuery } from 'store/api/api';
import { Outlet } from 'react-router-dom'
import Navbar from 'components/layout/Navbar';
import Sidebar from 'components/layout/Sidebar';

const Layout = () => {


    const isNotMobile = useMediaQuery("(min-width:600px)")
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)


    const userId = useSelector(selectUserId)
    return (
        <Box display={isNotMobile ? "flex" : "block"} width="100%" height="100%">
            <Sidebar

                isNotMobile={isNotMobile}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box flexGrow={1}>

                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout