import React from "react";
import {
  Box,
  Container,
  makeStyles,
  Typography,
  Avatar,
} from "@material-ui/core";
import GradeIcon from "@material-ui/icons/Grade";
import Topfooter from "./Topfooter";

const useStyles = makeStyles({
  main: {
    width: "100%",
    height: "100vh",
    // marginBottom: "30px",
    zIndex: "0",
    // "@media (max-width: 1000px)": {
    //     height:"80vh"
    // },
    //   "@media (min-width: 500px)": {
    //     height:"100vh"
    // },
  },
  submain: {
    width: "100%",
    minHeight: "90vh",
    // background: `linear-gradient( url(/images/homebg.png), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
    backgroundImage: `url("/images/Homebg.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    "@media (max-width: 1000px)": {
      minHeight: "85vh",
    },
  },
  midimg1: {
    width: "180px",
    height: "180px",
    border: "5px solid #E2DFD2",
    top: "150px",
    "@media (max-width: 800px)": {
      width: "150px",
      height: "150px",
      top: "120px",
    },
  },
  midimg: {
    width: "100%",
    height: "100%",
  },
  img: {
    display: "flex",
    justifyContent: "center",
  },
  text1: {
    fontSize: "30px",
    fontWeight: "600",
    color: "white",
    marginTop: "170px",
    textAlign: "center",
    "@media (max-width: 800px)": {
      fontSize: "25px",
      fontWeight: "500",
      marginTop: "150px",
    },
  },
  text2: {
    fontSize: "25px",
    fontWeight: "400",
    color: "#AFAFAF",
    textAlign: "center",
    "@media (max-width: 700px)": {
      fontSize: "20px",
      fontWeight: "400",
    },
  },
  rating: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  icons: {
    color: "#FFC000",
  },
});

function Home1() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.main}>
        <Box className={classes.submain}>
          <Container>
            {/* Circular mid image  */}

            <Box className={classes.img}>
              <Avatar className={classes.midimg1}>
                <img
                  src="/images/midimg1.png"
                  alt="img"
                  className={classes.midimg}
                />
              </Avatar>
            </Box>

            {/* Mid Text  */}

            <Typography className={classes.text1}>
              Behrouz Biryani (South Extension)
            </Typography>
            <Typography className={classes.text2}> Biryani</Typography>

            {/* Rating Icons */}

            <Box className={classes.rating}>
              <GradeIcon className={classes.icons} />
              <GradeIcon className={classes.icons} />
              <GradeIcon className={classes.icons} />
              <GradeIcon className={classes.icons} />
              <GradeIcon className={classes.icons} />
              <Typography
                style={{
                  color: "#AFAFAF",
                  fontSize: "15px",
                  paddingTop: "3px",
                  paddingLeft: "5px",
                }}
              >
                (2.3)
              </Typography>
            </Box>
          </Container>
        </Box>
        <Topfooter />
      </Box>
    </>
  );
}

export default Home1;
