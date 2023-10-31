import * as React from "react";
import {
  Box,
  Toolbar,
  Drawer,
  List,
  Divider,
  ListItem,
  Typography,
  IconButton,
  FormControlLabel,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// Custom Hook
import { useRoot } from "@/hooks/RootContext";
import { useThemeMode } from "@/hooks/ThemeModeContext";
// Custom Components
import DarkSwitch from "./DarkSwitch";

export default function Settings() {
  const { settingOpen, drawerWidth, toggleSettingOpen } = useRoot();

  const { darkmode, toggleDarkmode } =
    useThemeMode();

  const toggleSettingBar =
    () => (_event: React.KeyboardEvent | React.MouseEvent) => {
        toggleSettingOpen();
    };

  return (
    <Drawer
      anchor="right"
      open={settingOpen}
      onClose={toggleSettingBar()}
      sx={{ zIndex: 1300 }}
      PaperProps={{
        sx: { height: "auto", borderBottomLeftRadius: "20px" },
      }}
    >
      <Box
        sx={{ width: drawerWidth - 20, borderRadius: "70px" }}
        role="presentation"
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingLeft: "15px!important",
            paddingRight: "0px!important",
          }}
        >
          <Typography
            variant="h6"
            sx={{ fontFamily: "Outfit Light", textTransform: "uppercase" }}
          >
            Setting
          </Typography>
          <IconButton onClick={toggleSettingOpen}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List sx={{ paddingLeft: "20px" }}>
          <ListItem disablePadding>
            <FormControlLabel
              control={
                <DarkSwitch
                  checked={darkmode}
                  onClick={toggleDarkmode}
                  sx={{ m: 1 }}
                />
              }
              sx={{
                "& .MuiFormControlLabel-label": { fontFamily: "Outfit Medium" },
              }}
              label={darkmode ? "Light Mode" : "Dark Mode"}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}
