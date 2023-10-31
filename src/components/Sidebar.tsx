import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from '@mui/material/Divider';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useRoot } from "@/hooks/RootContext";

const DrawerHeader = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  // necessary for content to be below app bar
  justifyContent: "flex-end",
}));

const SideHeaderToggleBtn = styled(IconButton)(() => ({
  width: "50px",
  height: "50px",
  border: "solid 1px hsla(0,0%,100%,.2)",
  borderRadius: "6px",
  color: '#fff'
}));

const NewChatButton = styled(Button)(() => ({
  flex: 1,
  height: "50px",
  border: "solid 1px hsla(0,0%,100%,.2)",
  borderRadius: "6px",
  marginRight: "10px",
  textTransform: "inherit",
  color: "#fff",
  textAlign: "left",
  justifyContent: "flex-start",
  fontSize: "15px",
}));

const CustomListItemButton = styled(ListItemButton)(() => ({
  borderRadius: "6px",
  "&.Mui-selected": {
    backgroundColor: "rgb(52, 53, 65)",
    "&:hover": {
      backgroundColor: "rgb(52, 53, 65)",
    },
  },
  padding: "8px 6px 8px 12px",
  color: "#fff"
}));

const CustomListItemText = styled(ListItemText)(() => ({
  flex: 1,
  whiteSpace: "nowrap",
  overflow: "hidden",
  position: "relative",
  "&::before": {
    content: "''",
    width: "20px",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    backgroundImage: "linear-gradient(to left, #343541, rgba(236,236,241, 0))",
  },
}));

const DateDivider = styled(Box)(() => ({
  width: "100%",
  padding: "10px",
  color: "rgb(142, 142, 142)",
  fontSize: "14px",
}));

const Sidebar = () => {
  const { sideOpenD, drawerWidth, toggleSideOpenD, toggleSettingOpen } = useRoot();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "rgba(32, 33, 35, 1)",
          padding: "8px",
        },
      }}
      variant="persistent"
      anchor="left"
      open={sideOpenD}
    >
      <DrawerHeader>
        <NewChatButton variant="outlined" sx={{color: '#fff'}}>
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon-sm shrink-0"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          &nbsp;&nbsp;&nbsp;New Chat
        </NewChatButton>
        <SideHeaderToggleBtn onClick={toggleSideOpenD} size="small">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon-sm text-token-text-primary gizmo:text-token-text-tertiary gizmo:hover:text-token-text-secondary"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
          </svg>
        </SideHeaderToggleBtn>
      </DrawerHeader>
      <DateDivider>Today</DateDivider>
      <List sx={{paddingTop: 0, paddingBottom: 0, flex: 1}}>
        <ListItem disablePadding>
          <CustomListItemButton selected>
            <ListItemIcon sx={{ minWidth: "26px", color: "#fff"}}>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon-sm"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </ListItemIcon>
            <CustomListItemText primary="Lorem ipsum dolor sit amet, consectetur" />
            <Box component="div">
              <IconButton aria-label="delete" size="small" sx={{color: "#fff"}}>
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon-sm"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </IconButton>
              <IconButton aria-label="delete" size="small" sx={{color: "#fff"}}>
                <DeleteIcon fontSize="inherit" />
              </IconButton>
            </Box>
          </CustomListItemButton>
        </ListItem>
      </List>
      <Divider sx={{borderColor: "rgba(255, 255, 255, 0.12)"}} />
      <List>
          <ListItem disablePadding>
            <ListItemButton onClick={toggleSettingOpen}>
              <ListItemIcon sx={{color: '#fff'}}>
                <SettingsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" sx={{color: "#fff"}} />
            </ListItemButton>
          </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
