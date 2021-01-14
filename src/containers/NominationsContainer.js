import React from 'react'
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
const useStyles = makeStyles({
    list:  {
        width: 300,
    },
    fullList: {
        width: 'auto',
    },
})

export default function NominationsContainer(movies) {
const classes = useStyles()
const [state, setState] = useState(false)


const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState(open);
}

    return (
        <React.Fragment>
            <Button onClick={toggleDrawer(true)}>See Nomination List</Button>
     <Drawer anchor='left' open={state} onClose={toggleDrawer(false)}>
        <List className={classes.list}>

        </List>
     </Drawer>
     </React.Fragment>
    )
}


