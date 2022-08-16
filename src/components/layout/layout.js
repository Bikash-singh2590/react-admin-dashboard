import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import logo from "../../asserts/images/logo.png";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./layout.css";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  //   ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const StyledTab = styled((props) => <Tab {...props} />)(({ theme }) => ({
  textTransform: "none",
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  marginRight: theme.spacing(1),
  color: "rgba(255, 255, 255, 0.7)",
  "&.Mui-selected": {
    color: "#fff",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const [footerStyle, setFooterStyle] = React.useState("footer-1");

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  React.useMemo(() => {
    if (open) {
      setFooterStyle("footer-1");
    } else {
      setFooterStyle("footer-2");
    }
  }, [open]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* APPBAR */}
      <AppBar
        position="fixed"
        open={open}
        style={{
          background: "#3B3B6B",
          boxShodow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            CWS Demo Pvt Limited
          </Typography>
          <div style={{ marginLeft: "auto" }}>
            Bikash Kumar Singh
            <IconButton>
              <PersonIcon style={{ color: "#fff" }} />
            </IconButton>
            <IconButton>
              <HomeIcon style={{ color: "#fff" }} />
            </IconButton>
            <IconButton>
              <LogoutIcon style={{ color: "#fff" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      {/* SIDEBAR */}
      <Drawer
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            boxShadow: "1px 0px 2px #ddd",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <div style={{ padding: "1rem" }}>
            <img
              style={{ cursor: "pointer" }}
              src={logo}
              alt="cappitallwantLogo"
              width="100%"
              height="100%"
            />
          </div>
        </DrawerHeader>
        {/* SIDEBAR MENUS */}
        <div class="sidebar">
          <a href="#" class="active">
            <span class="material-icons-outlined"> business </span>
            <h3>Business Enitity Details</h3>
          </a>

          <a href="#">
            <span class="material-icons-outlined"> file_upload </span>
            <h3>ARC-upload</h3>
          </a>
          <a href="#">
            <span class="material-icons-outlined"> grid_view </span>
            <h3>ARC-Dashboard</h3>
          </a>
          <a href="#">
            <span class="material-icons-outlined"> compare </span>
            <h3>ARC-Reconciliation</h3>
          </a>

          <a href="#">
            <span class="material-icons-outlined"> article </span>
            <h3>IRAS</h3>
          </a>
          <a href="#">
            <span class="material-icons-outlined"> credit_card </span>
            <h3>Creidt Evaluation</h3>
          </a>
          <a href="#">
            <span class="material-icons-outlined"> settings </span>
            <h3>Setting</h3>
          </a>
        </div>
      </Drawer>
      {/* MAIN CONTENTS */}
      <Main open={open}>
        {/* -----------------------------------PAGE-------------------- */}
        {/* children(PAGES) */}
        {/* HEADER */}
        <div
          style={{
            height: "3rem",
            background: "#3B3B6B",
            marginTop: "4rem",
          }}
        >
          <div className="header">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4
                style={{
                  color: "#fff",
                  paddingLeft: "30px",
                  fontWeight: "500",
                  margin: 0,
                  paddingTop: "10px",
                }}
              >
                ARC-Upload
              </h4>
              <div>
                {" "}
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  TabIndicatorProps={{
                    style: {
                      background: "#fff",
                      borderBottom: "2px solid #fff",
                    },
                  }}
                >
                  <StyledTab label="Sales" {...a11yProps(0)} />
                  <StyledTab label="Purchase" {...a11yProps(1)} />
                  <StyledTab label="Agency Transaction" {...a11yProps(2)} />
                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* SUBHEADER */}
        <div style={{ padding: "0rem 0.1rem" }}>
          <TabPanel value={value} index={0}>
            <div className="sub-header">
              <button
                className="btn active"
                style={{ background: "#d04646", color: "#fff" }}
              >
                Customer management
              </button>
              <button className="btn">invoice management</button>
              <button className="btn">collection</button>
              <button className="btn">payment advice </button>
            </div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsu Lorem Ipsum is simply dummy text
            of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. Why do we use it? It is a long established fact that a reader
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centurie
            <div style={{ marginTop: "2rem" }}>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsu Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centurie
            </div>
            <div style={{ marginTop: "2rem" }}>
              {" "}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that it
              has a more-or-less normal distribution of letters, as opposed to
              using 'Content here, content here', making it look like readable
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsu Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum. Why do we use it? It is a long established fact that
              a reader Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centurie
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div style={{ borderBottom: "1px solid #000" }}>Purchase</div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div style={{ borderBottom: "1px solid #000" }}>
              Agency Transaction
            </div>
          </TabPanel>
        </div>
        {/* -----------------------------------END--------------------- */}
        {/* FOOTER */}
        <footer className={footerStyle}>
          <div className="left">
            For support,please contact <a href="#">support@cappitallwant.com</a>
          </div>
          <div className="right">
            Powered by Botmantra&#8482; | <a href="#">Term of use</a>
          </div>
        </footer>
      </Main>
      {/* FOOTER */}
    </Box>
  );
}
