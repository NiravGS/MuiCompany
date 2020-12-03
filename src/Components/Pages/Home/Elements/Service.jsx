import React from "react";
import { makeStyles, Button, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles({
   headingArea: {
      textAlign: "center",
      paddingBottom: "40px",
      position: "relative",
      "& h3": {
         fontSize: "34px",
         maxWidth: "500px",
         lineHeight: "40px",
         margin: "0px auto 15px",
         fontWeight: "500",
         textAlign: "center",
      },
      "& p": {
         color: "#5d6471",
      },
   },
});
const About = () => {
   const Style = useStyles();
   return (
      <>
         <Container>
            <div className={Style.headingArea}>
               <h3>Professional services</h3>
               <p>
                  We help agencies to define their new business objectives and
                  then create the road map
               </p>
            </div>
            <div className={Style.allService}>
               <Grid container>
                  <Grid md={4} sm={6} xs={12}>
                     <div className={Style.AboutImg}>
                        <div className={Style.Icon}></div>
                     </div>
                  </Grid>
               </Grid>
            </div>
         </Container>
      </>
   );
};

export default About;
