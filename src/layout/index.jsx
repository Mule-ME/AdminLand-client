import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { Box, useMediaQuery } from '@mui/material'
import { selectUserId } from 'store/selectors';
import { useGetUserQuery } from 'store/api/api';
import { Outlet } from 'react-router-dom'
import { Navbar, Sidebar } from 'components/layout/';

const Layout = () => {


    const isNotMobile = useMediaQuery("(min-width:600px)")
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)


    const userId = useSelector(selectUserId)
    const { data } = useGetUserQuery(userId)


    return (
        <Box display={isNotMobile ? "flex" : "block"} width="100%" height="100%">
            <Sidebar
                user={data || {}}
                isNotMobile={isNotMobile}
                drawerWidth="260px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box flexGrow={1}>

                <Navbar
                    user={data || {}}
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout