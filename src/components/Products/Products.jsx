import React from 'react'
import Grid from '@material-ui/core/Grid'
import Product from './Product/Product'

import useStyles from './styles'


// const products = [
//     {id:1,name:'Shoes',description:'Running shoes',price:'Rs2000',image:'https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
//     {id:2,name:'Macbook',description:'Apple Macbook',price:'Rs90000',image:'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1057&q=80'}
// ]

function Products({products,onAddtoCart}) {
    const classes = useStyles();
    return (
        <div className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify='center' spacing={4}>
            {products.map((product)=>(
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} onAddtoCart={onAddtoCart}/>
                </Grid>
            ))}   
            </Grid> 
        </div>
    )
}

export default Products
