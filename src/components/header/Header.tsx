import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import React from 'react'

function Header() {
    return (
        <AppBar position="static">
            <Toolbar >
                <Typography variant="h6">
                    MCU Info
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header
