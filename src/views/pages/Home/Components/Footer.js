import React from "react";
import {
  Avatar,
  Box,
  makeStyles,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";
import GTranslateIcon from "@material-ui/icons/GTranslate";

const useStyles = makeStyles({
  main: {
    backgroundColor: "#232b2b",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    minHeight: "260px",
  },
  submain: {
    width: "100%",
    height: "80px",
    background: "black",
    marginTop: "40px",
    color: "#414a4c",
    textAlign: "center",
    paddingTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    fontWeight: "700",
  },

  text4: {
    fontFamily: "'Orbitron', sans-serif",
    fontWeight: "700",
    fontSize: "22px",
    // lineHeight: "137%",
    color: "green",
    paddingTop: "20px",
  },
  grid1: {
    marginTop: "20px",
    paddingLeft: "100px",

    "@media (max-width:596px)": {
      paddingLeft: "20px",
    },
  },
  text1: {
    //  width:"213px",
    height: "17px",
    fontSize: "14px",
    //  lineHeight:"122%",
    color: " #FFFFFF",
    paddingTop: "20px",
  },
  text2: {
    fontFamily: "'Orbitron', sans-serif",
    fontSize: "22px",
    lineHeight: "28px",
    fontWeight: "700",
    color: "green",
    paddingTop: "50px",
    paddingLeft: "100px",

    "@media (max-width:596px)": {
      paddingLeft: "20px",
      paddingTop: "50px",
    },
  },
  text3: {
    fontSize: "16px",
    lineHeight: "122%",
    color: "#FFFFFF",
    paddingTop: "20px",
    paddingLeft: "100px",
    "@media (max-width:596px)": {
      paddingLeft: "20px",
    },
  },
  iconf: {
    display: "flex",
    marginLeft: "100px",
    marginTop: "20px",
    "@media (max-width:596px)": {
      marginLeft: "10px",
    },
    icon: {
      color: "white",
      backgroundColor: "#210F42",
      marginTop: "30px",
      marginRight: "10px",
      paddingTop: "20px",
    },
  },
});

export default function Footer1() {
  const Classes = useStyles();
  return (
    <Box className={Classes.main}>
      <Grid container spacing={0}>
        <Grid item xs={6} sm={6} md={3} className={Classes.grid1}>
          <Box style={{ display: "flex", paddingRight: "15px", flexGrow: "1" }}>
            <Typography className={Classes.text4}>About Us</Typography>
          </Box>
          <Typography className={Classes.text1}>
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum text ever since the 1500s, when an unknown
          </Typography>
        </Grid>

        <Grid item xs={6} sm={6} md={3}>
          <Box>
            <Typography className={Classes.text2}>About Us</Typography>
            <Typography className={Classes.text3}>My Profile</Typography>
            <Typography className={Classes.text3}>My Activity</Typography>
            <Typography className={Classes.text3}>Contact</Typography>
          </Box>
        </Grid>

        <Grid item xs={6} sm={6} md={3} className={Classes.grid3}>
          <Typography className={Classes.text2}>Help & support</Typography>
          <Typography className={Classes.text3}>Terms&conditions</Typography>
          <Typography className={Classes.text3}>Privacy Policy</Typography>
          <Typography className={Classes.text3}>Cookies Policy</Typography>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Typography className={Classes.text2}>Social</Typography>
          <Box className={Classes.iconf}>
            <Box style={{ marginRight: "15px" }}>
              <Avatar>
                <FacebookIcon
                  className={Classes.icon}
                  style={{
                    color: "white",
                    backgroundColor: "#210F42",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Avatar>
              <Avatar>
                <TwitterIcon
                  style={{
                    color: "white",
                    backgroundColor: "#210F42",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Avatar>
            </Box>
            <Box>
              <Avatar>
                <TelegramIcon
                  style={{
                    color: "white",
                    backgroundColor: "#210F42",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Avatar>

              <Avatar>
                <InstagramIcon
                  style={{
                    color: "white",
                    backgroundColor: "#210F42",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Avatar>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box className={Classes.submain}>
        <Typography className={Classes.txt}>
          2018-19 kin Kap.inc All India Right Reserved
        </Typography>
      </Box>
    </Box>
  );
}
