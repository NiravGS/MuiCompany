import React from "react";
import {
   makeStyles,
   Button,
   Container,
   Grid,
   TextField,
} from "@material-ui/core";
import { purple } from "@material-ui/core/colors/purple";
import { FaPlay } from "react-icons/fa";

const useStyles = makeStyles({
   SubHead: {
      "& h3": {
         color: "#fff",
         fontSize: "34px",
         lineHeight: "40px",
         fontWeight: "500",
      },
      "& p": {
         color: "#ddd",
      },
   },
   FormArea: {
      "& label ": {
         color: "#fff",
      },
      "& input": {
         border: "1px solid rgba(49,120,251,0.4)",
         borderRadius: "3px",
         color: "#fff",
      },
      "& textarea": {
         padding: "0 0 !important",
         width: "330px",
      },
      "& .MuiOutlinedInput-input": {
          padding: "18.5px 14px ",
      },
   },
   palette: {
      secondary: {
         main: "#e30342",
      },
   },
   InputText: {
      marginBottom: "10px",
    },
    SubmitBtn: {
        marginTop: "20px",
        width:"100%"
    }
});

const About = () => {
   const Style = useStyles();
   return (
      <>
         <Container>
            <Grid container>
               <Grid md={5} sm={4} xs={12}>
                  <div className={Style.SubHead}>
                     <h3>
                        Request a <span class={Style.color}>Call back</span>
                     </h3>
                     <p>
                        Lorem ipsum dolor sit amet conse adipis elit Assumenda
                        repud eum veniam optio modi sit explicabo nisi magnam
                        quibusdam.
                     </p>
                  </div>
               </Grid>
               <Grid md={7} sm={8} xs={12}>
                  <form className={Style.FormArea} noValidate>
                     <Grid container>
                        <Grid md={6} sm={6} xs={12}>
                           <TextField
                              id="outlined-search"
                              label="Name"
                              variant="outlined"
                              color="secondary"
                              className={Style.InputText}
                           />
                           <TextField
                              id="outlined-search"
                              label="email"
                              variant="outlined"
                              color="secondary"
                              className={Style.InputText}
                           />
                           <TextField
                              id="outlined-search"
                              label="Subject"
                              variant="outlined"
                              color="secondary"
                              className={Style.InputText}
                           />
                        </Grid>
                        <Grid md={6} sm={6} xs={12}>
                           <TextField
                              id="outlined-search"
                              label="message"
                              variant="outlined"
                              color="secondary"
                              multiline
                              rows={15}
                              rowsMax={4}
                              className={Style.TextArea}
                           />
                           <Button variant="contained" color="secondary" className={Style.SubmitBtn}>
                              Submit
                           </Button>
                        </Grid>
                     </Grid>
                  </form>
               </Grid>
            </Grid>
         </Container>
      </>
   );
};

export default About;
