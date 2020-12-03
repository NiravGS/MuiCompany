import { Style } from "@material-ui/icons";
import React from "react";
import Intro from "./Elements/IntroArea";
import Service from "./Elements/allWelServices"
import About from "./Elements/About"
import ServiceArea from "./Elements/Service"
import { makeStyles, Button, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles({
   FixPadding: {
      padding: "110px 0px",
      "@media(max-width:991px)": {
         padding: "50px",
      },
      "@media(max-width:767px)": {
         padding: "20px",
      },
   },
   WelcomeArea: {
      
   },
   About: {
      "& .MuiGrid-root":{
         width:"100%"
      }
   }

});

const Footer = () => {
   const Style = useStyles();
   return (
      <>
         <section className={Style.Intro}>
            <Intro />
         </section>
         <section className={Style.WelcomeArea}  className={Style.FixPadding}>
            <Service />
         </section>
         <section className={Style.About} >
            <About />
         </section>
         <section className={`${Style.ServiceArea} ${Style.FixPadding}`} >
            <ServiceArea />
         </section>
      </>
   );
};

export default Footer;
