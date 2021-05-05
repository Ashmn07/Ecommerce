import React from 'react'
import {AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography} from '@material-ui/core'
import {ShoppingCart} from '@material-ui/icons'
import Logo from '../../images/logo_new.png'

import useStyles from './styles'

function Navbar() {
    const classes = useStyles()
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color="inherit">
                        <img src={Logo} alt="Booksify" height="45px" className={classes.image}/>
                        Booksify
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>  
        </>
    )
}

export default Navbar
