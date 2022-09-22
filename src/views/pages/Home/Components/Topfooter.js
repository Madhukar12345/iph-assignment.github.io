import React from "react";
import {
  Box,
  makeStyles,
  Typography,
  Button,
  Container,
} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";

const useStyles = makeStyles({
  main: {
    width: "100%",
    minHeight: "10vh",
    backgroundColor: "black",
  },
  text3: {
    fontSize: "15px",
    fontWeight: "400",
    color: "#808080",
    textAlign: "center",
    paddingTop: "10px",
  },
  bottom_mid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 730px)": {
      display: "block",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  button: {
    width: "200px",
    height: "35px",
    border: "2px solid green",
    marginTop: "12px",
    marginLeft: "8px",
    color: "green",
  },
});
function Topfooter() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.main}>
        <Box className={classes.submain}>
          <Box className={classes.bottom}>
            <Container>
              <Box className={classes.bottom_mid}>
                <Typography className={classes.text3}>
                  Behrouz Biryani (South Extension) can deliver to you at Latpat
                  Nagar
                </Typography>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <Button variant="outlined" className={classes.button}>
                    <RoomIcon />
                    CHANGE LOCATION
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Topfooter;
