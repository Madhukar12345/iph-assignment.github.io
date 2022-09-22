import {
  makeStyles,
  Box,
  Container,
  Grid,
  Typography,
  Button,
  TextField,
} from "@material-ui/core";
import React from "react";
import GTranslateIcon from "@material-ui/icons/GTranslate";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";

const useStyles = makeStyles({
  main: {
    margin: "0px",
    padding: "0px",
    minHeight: "100vh",
    width: "100%",
    marginTop: "50px",
    zIndex: "-1",
  },
  submain: {
    width: "100%",
    minHeight: "70vh",
    backgroundImage: `url(/images/Homebg.png)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  submain1: {
    width: "100%",
    minHeight: "30vh",
    backgroundColor: "#e5e5e5",
    marginTop: "12px",
  },
  img1: {
    width: "100%",
    minHeight: "70vh",
    backgroundImage: `url(/images/zomatoside.png)`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    // marginTop: "20px",
  },
  text1: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#32cd32",
    paddingTop: "70px",
    "@media (max-width: 600px)": {
      paddingTop: "30px",
    },
  },
  text2: {
    fontSize: "15px",
    fontWeight: "500",
    color: "white",
  },
  text3: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#7f7f7f",
    textAlign: "center",
    paddingTop: "20px",
    "@media (max-width: 520px)": {
      fontSize: "20px",
    },
  },
  button: {
    width: "150px",
    height: "50px",
    backgroundColor: "black",
    color: "white",
    margin: "25px 15px 0px 0px",
    borderRadius: "5px",
  },
  goicon: {
    color: "green",
    width: "30px",
    height: "30px",
    paddingLeft: "3px",
  },
  search: {
    backgroundColor: "#696969",
    width: "300px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "green",
    color: "white",
    width: "120px",
  },
});

function Contact_us() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.main}>
        <Box className={classes.submain}>
          <Container>
            <Grid container spacing={3}>
              <Grid xs="12" sm="6" md="5">
                <Box className={classes.img1}></Box>
              </Grid>
              <Grid xs="12" sm="6" md="7">
                <Typography className={classes.text1}>
                  Download The App
                </Typography>
                <Typography className={classes.text2}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when book. It has
                  survived not only five centuries, but also the lea
                </Typography>
                <Box style={{ display: "flex" }}>
                  <Button variant="outlined" className={classes.button}>
                    <GTranslateIcon className={classes.goicon} />
                    Google Play
                  </Button>
                  <Button variant="outlined" className={classes.button}>
                    <PhoneAndroidIcon className={classes.goicon} />
                    App Store
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box className={classes.submain1}>
          <Typography className={classes.text3}>
            Keep in Touch, Join Our newsletter
          </Typography>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <TextField
              type="search"
              fullWidth
              variant="outlined"
              placeholder="Enter Your Email id"
              className={classes.search}
            />
            <Button variant="outlined" className={classes.btn}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Contact_us;
