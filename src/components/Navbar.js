import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import react from "react";
import MenuIcon from "@material-ui/icons/Menu";
const Navbar = () =>
{
    return(
        <div>
           <AppBar position="static">
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Live Score
                    </Typography>
                </Toolbar>
           </AppBar>
        </div>
    );
}

export default Navbar;