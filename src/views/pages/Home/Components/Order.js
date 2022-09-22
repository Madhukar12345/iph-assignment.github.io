import React from "react";
import {
  Box,
  Container,
  makeStyles,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles({
  main: {
    width: "100%",
    minHeight: "354px",
    backgroundColor: "#f5f5f5",
    border: "0.5px solid #999999",
  },
  hrtag: {
    border: "0.2px solid #999999",
  },
  text1: {
    fontSize: "17px",
    fontWeight: "400",
    color: "black",
    paddingTop: "10px",
  },
  text2: {
    fontSize: "12px",
    fontWeight: "300",
    color: "#999999",
    marginRight: "30px",
    // paddingTop: "10px",
  },
  text3: {
    fontSize: "12px",
    fontWeight: "300",
    color: "#999999",
    marginTop: "2px",
    display: "flex",
    alignItems: "center",
  },
  text4: {
    fontSize: "15px",
    fontWeight: "500px",
  },
  text5: {
    display: "flex",
    alignItems: "center",
  },
  dolloricon1: {
    width: "20px",
    height: "20px",
  },
  text6: {
    fontSize: "15px",
    fontWeight: "700px",
  },

  submain1: {
    width: "100%",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  submain2: {
    width: "100%",
    minHeight: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  submain3: {
    width: "100%",
    height: "70px",
    display: "flex",
    justifyContent: "space-between",
  },
  submain4: {
    width: "100%",
    height: "50px",
    backgroundColor: "#e5e4e2",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  clearicon: {
    width: "10px",
    height: "10px",
  },
  dolloricon: {
    width: "15px",
    height: "15px",
  },
  delicon: {
    paddingLeft: "10px",
    color: "red",
  },
  text7: {
    width: "100%",
    height: "35px",
    backgroundColor: "#E8B90E",
    textAlign: "center",
    paddingTop: "15px",
  },
});

function Order() {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xs">
        <Box className={classes.main}>
          <Box className={classes.submain1}>
            <Typography className={classes.text1}>Your Order</Typography>
          </Box>
          <hr className={classes.hrtag} />

          <Box className={classes.submain2}>
            <Container>
              <Box className={classes.submain2}>
                <Box>
                  <Typography className={classes.text2}>
                    Anarus Valupat Poras Magna
                  </Typography>
                </Box>
                <Box style={{ display: "flex", marginTop: "5px" }}>
                  <Typography style={{ display: "flex", alignItems: "center" }}>
                    1<ClearIcon className={classes.clearicon} />
                    <Typography
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "500",
                      }}
                    >
                      <AttachMoneyIcon className={classes.dolloricon} />
                      20.00
                    </Typography>
                  </Typography>
                  <DeleteOutlineIcon className={classes.delicon} />
                </Box>
                <Box />
              </Box>
            </Container>
          </Box>

          <hr className={classes.hrtag} />
          <Box className={classes.submain2}>
            <Container>
              <Box className={classes.submain2}>
                <Box>
                  <Typography className={classes.text2}>
                    Anarus Valupat Poras Magna
                  </Typography>
                </Box>
                <Box style={{ display: "flex", marginTop: "5px" }}>
                  <Typography style={{ display: "flex", alignItems: "center" }}>
                    1<ClearIcon className={classes.clearicon} />
                    <Typography
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontWeight: "500",
                      }}
                    >
                      <AttachMoneyIcon className={classes.dolloricon} />
                      20.00
                    </Typography>
                  </Typography>
                  <DeleteOutlineIcon className={classes.delicon} />
                </Box>
                <Box />
              </Box>
            </Container>
          </Box>
          <hr className={classes.hrtag} />
          <Box className={classes.submain3}>
            <Container>
              <Box className={classes.submain3}>
                <Box>
                  <Typography className={classes.text3}>Sub Total</Typography>
                  <Typography className={classes.text3}>
                    Delivery Fee
                  </Typography>
                  <Typography className={classes.text3}>VAT(13%)</Typography>
                </Box>
                <Box>
                  <Typography className={classes.text3}>
                    <AttachMoneyIcon className={classes.dolloricon} />
                    52.00
                  </Typography>
                  <Typography className={classes.text3}>
                    <AttachMoneyIcon className={classes.dolloricon} />
                    16.00
                  </Typography>
                  <Typography className={classes.text3}>
                    <AttachMoneyIcon className={classes.dolloricon} />
                    5.68
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>

          <Box className={classes.submain4}>
            <Container>
              <Box className={classes.submain4}>
                <Typography className={classes.text4}>Total</Typography>
                <Typography className={classes.text5}>
                  <AttachMoneyIcon className={classes.dolloricon1} />
                  <span className={classes.text6}>66.68</span>
                </Typography>
              </Box>
            </Container>
          </Box>
          <Box style={{ display: "flex", justifyContent: "center" }}>
            <Typography className={classes.text7} style={{ Color: "yellow" }}>
              PROCESS TO CHECKOUT
            </Typography>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Order;
