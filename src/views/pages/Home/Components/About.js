import React from "react";
import PropTypes from "prop-types";
import { makeStyles, Grid, Card, Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Avatar } from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";
import Order from "./Order";

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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: "20px",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      marginTop: "40px",
    },
    "@media (min-width: 800px)": {
      marginTop: "30px",
    },
  },
  root: {
    // flexGrow: 1,
    // backgroundColor: theme.palette.background,
  },
  text1: {
    fontSize: "28px",
    fontWeight: "500",
    paddingTop: "40px",
  },
  text3: {
    color: "black",
    fontSize: "20px",
    padding: "0px 20px 0px 60px",
    fontWeight: "500",
  },
  text4: {
    color: "#999999",
    fontSize: "13px",
    // padding:"5px 20px",
    fontWeight: "400",
    padding: "10px 20px 0px 60px",
    // textAlign:"center"
  },

  root1: {
    width: "100%",
    minHeight: "160px",
    display: "flex",
    paddingTop: "15px",
  },
  avtar: {
    width: "100px",
    height: "100px",
    marginTop: "10px",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  icons: {
    color: "#FFC000",
  },
  rating: {
    margin: "5px 20px 0px 60px",
  },
}));
const data = [
  {
    id: "1",
    img: "./images/profileimg.png",
    text1: "Manish C-Jun 24,2018",
    text2:
      " Ipsum has been the industry's standard dummy text ever since the 1500s, It has survived not only five centuries, unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin",
    backgroundColor: "red",
  },
  {
    id: "2",
    img: "./images/profileimg.png",
    text1: "Manish C-Jun 24,2018",
    text2:
      " Ipsum has been the industry's standard dummy text ever since the 1500s, It has survived not only five centuries, unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin",
    backgroundColor: "red",
  },
  {
    id: "3",
    img: "./images/profileimg.png",
    text1: "Manish C-Jun 24,2018",
    text2:
      " Ipsum has been the industry's standard dummy text ever since the 1500s, It has survived not only five centuries, unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin",
    backgroundColor: "red",
  },
  {
    id: "4",
    img: "./images/profileimg.png",
    text1: "Manish C-Jun 24,2018",
    text2:
      " Ipsum has been the industry's standard dummy text ever since the 1500s, It has survived not only five centuries, unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin",
    backgroundColor: "red",
  },
];

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.main}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={8}>
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="MENU" {...a11yProps(0)} />
                <Tab label="REVIEWS" {...a11yProps(1)} />
                <Tab label="INFO" {...a11yProps(2)} />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              Item On
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography className={classes.text1}>Reviews</Typography>
              <br />
              <hr />
              {data.map((value) => {
                return (
                  <Card className={classes.root1}>
                    <Avatar className={classes.avtar}>
                      <img src={value.img} alt="" className={classes.img} />
                    </Avatar>
                    <Box>
                      <Typography className={classes.text3}>
                        {value.text1}
                      </Typography>
                      <Typography className={classes.text4}>
                        {value.text2}
                      </Typography>
                      <Box className={classes.rating}>
                        <GradeIcon className={classes.icons} />
                        <GradeIcon className={classes.icons} />
                        <GradeIcon className={classes.icons} />
                        <GradeIcon className={classes.icons} />
                        <GradeIcon className={classes.icons} />
                      </Box>
                    </Box>
                  </Card>
                );
              })}
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Order />
        </Grid>
      </Grid>
    </Container>
  );
}
