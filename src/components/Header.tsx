import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { useRoot } from "@/hooks/RootContext";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawer_width: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, drawer_width }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawer_width}px)`,
    marginLeft: `${drawer_width}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor:
    theme.palette.mode == "dark" ? "rgba(52, 53, 65, 1)" : "#fff",
  backgroundImage: "none",
  boxShadow: "0 1px 0 0 rgba(0,0,0,0.3)",
}));

const HeaderButton = styled(IconButton)(() => ({
  width: "50px",
  height: "50px",
  borderRadius: "6px",
}));

const Header = () => {
  const theme = useTheme();
  const { sideOpenD, drawerWidth, toggleSideOpenD } = useRoot();
  return (
    <AppBar position="fixed" open={sideOpenD} drawer_width={drawerWidth}>
      <Toolbar>
        <HeaderButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSideOpenD}
          edge="start"
          size="small"
          sx={{ mr: 2, ...(sideOpenD && { display: "none" }), color: theme.palette.mode == "dark"? "#fff": "#000" }}
        >
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
        </HeaderButton>
        <Typography
          variant="subtitle2"
          component="div"
          sx={{ flex: 1, textAlign: "center", color: theme.palette.mode == "dark"? "#fff": "#000" }}
        >
          ChainTel AI Chat
        </Typography>
        <HeaderButton color="inherit" size="small" sx={{color: theme.palette.mode == "dark"? "#fff": "#000"}}>
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
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
            <polyline points="16 6 12 2 8 6"></polyline>
            <line x1="12" y1="2" x2="12" y2="15"></line>
          </svg>
        </HeaderButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
