import React from "react";
import { Box } from "@material-ui/core";
import Page from "src/component/Page";
import Banner from "./Banner";
import App from "./"
import Home1 from "./Components/Home1";
import About from "./Components/About";
import Contact_us from "./Components/Contact_us";
import Footer from "./Components/Footer";
import Topfooter from "./Components/Topfooter";


import Date from "./Date"
import Footer1 from "./Components/Footer";
function Home(props) {
  return (
    <Page title="Kin Kao">
      <Home1/>
     <About/>
     <Contact_us/>
     <Footer/>
     
    </Page>
  );
}

export default Home;
