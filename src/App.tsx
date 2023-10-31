import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Settings from "@/components/Setting";
import { useRoot } from "./hooks/RootContext";
import userAvatarImg from "@/assets/avatar.jpg";
import chainTelAvatarImg from "@/assets/chaintel.jpg";

const drawerWidth = 260;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
    width: "100%",
  },
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  backgroundColor:
    theme.palette.mode == "dark" ? "rgba(52, 53, 65, 1)" : "#fff",
  minHeight: "100vh",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const UserBox = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  padding: theme.spacing(3),
  justifyContent: "center",
}));

const ChainTelBox = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  padding: theme.spacing(3),
  justifyContent: "center",
  backgroundColor: theme.palette.mode == "dark" ? "#444654" : "#f7f7f8",
  borderTopWidth: "1px",
  borderTopColor: theme.palette.mode == "dark" ? "#444654" : "#dadada",
  borderTopStyle: "solid",
  borderBottomWidth: "1px",
  borderBottomColor: theme.palette.mode == "dark" ? "#444654" : "#dadada",
  borderBottomStyle: "solid",
}));

const ChatContainer = styled("div")(() => ({
  display: "flex",
  width: "100%",
  maxWidth: "768px",
  alignItems: "flex-start",
  justifyContent: "center",
}));

const AvatarImg = styled("img")(() => ({
  width: "50px",
  height: "50px",
  borderRadius: "5px",
  marginRight: "20px",
}));

const FooterContainer = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3, 3, 0, 3),
  justifyContent: "center",
  position: "fixed",
  right: 0,
  bottom: "30px",
  backgroundImage:
    theme.palette.mode == "dark"
      ? "linear-gradient(to top, #343541, rgba(236,236,241, 0))"
      : "linear-gradient(to top, #fff, rgba(255,2555,2555, 0))",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: "100%",
  ...(open && {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "100%",
    },
  }),
  zIndex: 1,
}));

const FooterInputContainer = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: "768px",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  backgroundColor: theme.palette.mode == "dark" ? "#40414f" : "#fff",
  boxShadow: "0 0 17px 0 rgba(0,0,0,0.2)",
  borderRadius: "10px",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: theme.palette.mode == "dark" ? "#383945" : "#cfcfcf",
}));

const CopyRight = styled("div", {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ theme, open }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  justifyContent: "center",
  position: "fixed",
  right: 0,
  bottom: 0,
  height: "30px",
  backgroundColor: theme.palette.mode == "dark" ? "#343541" : "#fff",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: "100%",
  ...(open && {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      width: "100%",
    },
  }),
}));

const ContextAndControlContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flex: 1,
  flexDirection: "row",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
  alignItems: "flex-start",
}));

const ControllerContainer = styled("div")(({ theme }) => ({
  display: "flex",
  marginLeft: "20px",
  [theme.breakpoints.down("sm")]: { marginLeft: "0px" },
}));

function App() {
  const theme = useTheme();
  const { sideOpenD } = useRoot();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />
      <Sidebar />
      <Main open={sideOpenD}>
        <DrawerHeader />
        <Box sx={{ flex: 1, paddingBottom: "100px" }}>
          <UserBox>
            <ChatContainer>
              <AvatarImg src={userAvatarImg} alt="user avatar" />
              <ContextAndControlContainer>
                <Typography paragraph sx={{ flex: 1, paddingTop: "5px" }}>
                  Hello
                </Typography>
                <ControllerContainer>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                      color: theme.palette.mode == "dark" ? "#fff" : "#000",
                    }}
                  >
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
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </IconButton>
                </ControllerContainer>
              </ContextAndControlContainer>
            </ChatContainer>
          </UserBox>

          <ChainTelBox>
            <ChatContainer>
              <AvatarImg src={chainTelAvatarImg} alt="user avatar" />
              <ContextAndControlContainer>
                <Typography paragraph sx={{ flex: 1, paddingTop: "5px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Rhoncus dolor purus non enim praesent elementum facilisis leo
                  vel. Risus at ultrices mi tempus imperdiet.
                </Typography>
                <ControllerContainer>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                      color: theme.palette.mode == "dark" ? "#fff" : "#000",
                    }}
                  >
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
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <rect
                        x="8"
                        y="2"
                        width="8"
                        height="4"
                        rx="1"
                        ry="1"
                      ></rect>
                    </svg>
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                      color: theme.palette.mode == "dark" ? "#fff" : "#000",
                    }}
                  >
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
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                      color: theme.palette.mode == "dark" ? "#fff" : "#000",
                    }}
                  >
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
                      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                    </svg>
                  </IconButton>
                </ControllerContainer>
              </ContextAndControlContainer>
            </ChatContainer>
          </ChainTelBox>

          <UserBox>
            <ChatContainer>
              <AvatarImg src={userAvatarImg} alt="user avatar" />
              <ContextAndControlContainer>
                <Typography paragraph sx={{ flex: 1, paddingTop: "5px" }}>
                  Do you know how to make Chat GPT?
                </Typography>
                <ControllerContainer>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                      color: theme.palette.mode == "dark" ? "#fff" : "#000",
                    }}
                  >
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
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </IconButton>
                </ControllerContainer>
              </ContextAndControlContainer>
            </ChatContainer>
          </UserBox>

          <ChainTelBox>
            <ChatContainer>
              <AvatarImg src={chainTelAvatarImg} alt="user avatar" />
              <ContextAndControlContainer>
                <Typography paragraph sx={{ flex: 1, paddingTop: "5px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Rhoncus dolor purus non enim praesent elementum facilisis leo
                  vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                  hendrerit gravida rutrum quisque non tellus. Convallis
                  convallis tellus id interdum velit laoreet id donec ultrices.
                  Odio morbi quis commodo odio aenean sed adipiscing.
                </Typography>
                <ControllerContainer>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                      color: theme.palette.mode == "dark" ? "#fff" : "#000",
                    }}
                  >
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
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <rect
                        x="8"
                        y="2"
                        width="8"
                        height="4"
                        rx="1"
                        ry="1"
                      ></rect>
                    </svg>
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                      color: theme.palette.mode == "dark" ? "#fff" : "#000",
                    }}
                  >
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
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                      color: theme.palette.mode == "dark" ? "#fff" : "#000",
                    }}
                  >
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
                      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                    </svg>
                  </IconButton>
                </ControllerContainer>
              </ContextAndControlContainer>
            </ChatContainer>
          </ChainTelBox>

          <UserBox>
            <ChatContainer>
              <AvatarImg src={userAvatarImg} alt="user avatar" />
              <ContextAndControlContainer>
                <Typography paragraph sx={{ flex: 1, paddingTop: "5px" }}>
                  As you can see <br />
                  it's working well for responsive...
                </Typography>
                <ControllerContainer>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                      color: theme.palette.mode == "dark" ? "#fff" : "#000",
                    }}
                  >
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
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </IconButton>
                </ControllerContainer>
              </ContextAndControlContainer>
            </ChatContainer>
          </UserBox>

          <ChainTelBox>
            <ChatContainer>
              <AvatarImg src={chainTelAvatarImg} alt="user avatar" />
              <ContextAndControlContainer>
                <Typography paragraph sx={{ flex: 1, paddingTop: "5px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Rhoncus dolor purus non enim praesent elementum facilisis leo
                  vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                  hendrerit gravida rutrum quisque non tellus. Convallis
                  convallis tellus id interdum velit laoreet id donec ultrices.
                  Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
                  suscipit adipiscing bibendum est ultricies integer quis.
                  Cursus euismod quis viverra nibh cras. Metus vulputate eu
                  scelerisque felis imperdiet proin fermentum leo. Mauris
                  commodo quis imperdiet massa tincidunt. Cras tincidunt
                  lobortis feugiat vivamus at augue. At augue eget arcu dictum
                  varius duis at consectetur lorem. Velit sed ullamcorper morbi
                  tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                </Typography>
                <ControllerContainer>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                      color: theme.palette.mode == "dark" ? "#fff" : "#000",
                    }}
                  >
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
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <rect
                        x="8"
                        y="2"
                        width="8"
                        height="4"
                        rx="1"
                        ry="1"
                      ></rect>
                    </svg>
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                      color: theme.palette.mode == "dark" ? "#fff" : "#000",
                    }}
                  >
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
                      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                    </svg>
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    size="small"
                    sx={{
                      color: theme.palette.mode == "dark" ? "#fff" : "#000",
                    }}
                  >
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
                      <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>
                    </svg>
                  </IconButton>
                </ControllerContainer>
              </ContextAndControlContainer>
            </ChatContainer>
          </ChainTelBox>
        </Box>
        <FooterContainer open={sideOpenD}>
          <FooterInputContainer>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Send a message"
              inputProps={{ "aria-label": "Send a message" }}
            />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <SendIcon />
            </IconButton>
          </FooterInputContainer>
        </FooterContainer>
        <CopyRight open={sideOpenD}></CopyRight>
      </Main>
      <Settings />
    </Box>
  );
}

export default App;
