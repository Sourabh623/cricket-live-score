import react, { Fragment, useState } from "react";
import Card from '@material-ui/core/Card';
import { Button, CardActions, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Typography } from "@material-ui/core";
import img1 from '../img/vs.png';
import { blue } from "@material-ui/core/colors";
import { getMatchDetails } from '../api/Api';

const MyCard = ({match}) =>
{

    const [detail, setDetail] = useState({});

    const [open, setOpen] = useState(false);

    const handleClick = (id) =>
    {
       //alert(id)
       getMatchDetails(id).then(data=>
        {
        console.log("Match Data",data);
        setDetail(data);
        handleOpen();
        }
        ).catch(error=>console.log(error));
    }

    const getMatcheCard = () =>
    {
        return (
            <Card style={{margin:10}}>
                <CardContent>
                    <Grid container justify="center" alignItems="center" spacing={4}>
                        {/* team-1 */}
                        <Grid item xs={4}><Typography varient="h3">{match['team-1']}</Typography></Grid>

                        {/* img vs */}
                        <Grid item xs={4}>
                            <img style={{width:65}} src={img1} alt="vs-image"/>
                        </Grid>

                        {/* team-2 */}
                        <Grid item xs={4}><Typography varient="h3">{match['team-2']}</Typography></Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                        <Button varient="contained" outline color="secondary" onClick={()=>{
                            handleClick(match.unique_id);
                        }}>Show Details</Button>
                        <Button varient="contained" outline color="primary">Start Time {new Date(match.dateTimeGMT).toString()}</Button>
                    </Grid>
                </CardActions>
            </Card>
        );
    }

    const handleClose = () =>
    {
        setOpen(false);
    }

    const handleOpen = () =>
    {
        setOpen(true);
    }

    const getDialog = () =>
    {
        return ( 
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">{"Match Details"}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>{detail.stat}</Typography>
                    <Typography>Match <span style={{fontStyle:"normal", fontWeight: "bold"}}>{detail.matchStated ? "Started" : "Still not started"}{" "}</span></Typography>
                    <Typography>Score <span style={{fontStyle:"normal", fontWeight: "bold"}}>{detail.score}</span></Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>Close</Button>
            </DialogActions>
        </Dialog> 
        )}
 
    return (
        <Fragment>
            {getMatcheCard()}
            {getDialog()}
        </Fragment>
    );
}

export default MyCard;