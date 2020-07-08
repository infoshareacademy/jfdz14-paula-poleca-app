
import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => setIsOpen(!isOpen);

    return (
        <div>
            <Button onClick={toggleDrawer}>Menu</Button>
            <Drawer open={isOpen} onClose={toggleDrawer} anchor="left">
            <List>
                <ListItem button onClick={toggleDrawer}>
                    <ListItemText primary="Statystyki" />
                </ListItem>
                
            <ListItem button onClick={toggleDrawer}>
                <ListItemText primary="Teatr" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
                <ListItemText primary="Kino" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
                <ListItemText primary="Muzea" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
                <ListItemText primary="Koncert" />
            </ListItem>
            <ListItem button onClick={toggleDrawer}>
                <ListItemText primary="Sport" />
            </ListItem>
            </List>
            </Drawer>
        </div>


    )
}



export default Sidebar