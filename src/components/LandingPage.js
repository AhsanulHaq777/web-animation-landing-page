import React from 'react';
import '.././App.css';
import landingright from '.././images/enterprise.gif';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: 12,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function LandingPage() {
    
    const classes = useStyles();
    return(
        <div>
            <div id="landingimage">
                {/* <img  alt="landingpic" src={landing} /> */}
                <div  className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.paper}>
                                 <h3>
                                    Hello there!
                                </h3>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.paper}><img id="landright" alt="enterpr" src={landingright} /></div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    );
}