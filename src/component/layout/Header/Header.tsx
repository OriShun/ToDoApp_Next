import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material/";

import DateDisplay from "./DateDisplay";

const HeaderCompent = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ToDo
          </Typography>

          <DateDisplay />
          <IconButton
            size="large"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, ml: 2 }}
          >
            <PersonIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderCompent;
