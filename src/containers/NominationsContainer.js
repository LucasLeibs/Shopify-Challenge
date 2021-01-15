import React from 'react'
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles({
    list:  {
        width: 400,
    },
    fullList: {
        width: 'auto',
    },
})

export default function NominationsContainer(props) {
const classes = useStyles()
const [state, setState] = useState(false)

const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState(open);
}

const removeNomination = (nomination, index) => {
    props.nominations.splice(index, 1)
    setState(false)
    return <Alert severity="warning">Deleted {nomination.Title}</Alert>
    
}
const x = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>

    return (
        <div className="nominations">
            {console.log("hi",props.nominations)}
            <Button className="drawer-button" onClick={toggleDrawer(true)}> Nomination List</Button>
     <Drawer anchor='left' open={state} onClose={toggleDrawer(false)}>
        <List className={classes.list}>
            <h1 className="nomination-title">Nominations</h1>
        {props.nominations.map((nomination, index) =>  (
            
            <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <Avatar src={nomination.Poster}/>
            </ListItemAvatar>
            <ListItemText>
               {index + 1}. {nomination.Title} 
            </ListItemText>
            <IconButton onClick={() => removeNomination(nomination, index)} color ="secondary" aria-label="delete">
        <DeleteIcon />
      </IconButton>
            <Divider>
                </Divider>
            </ListItem>
        
        ))}
        </List>
     </Drawer>
     </div>
    )
}


