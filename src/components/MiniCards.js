import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import IconButton from '@material-ui/core/IconButton';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "30%",
        maxHeight: "30%",
        margin: "1%"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        margin: "3%",
        width: "100%"
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));


function MiniCards(props) {
    const [api_url,setApiUrl]=useState("")



    useEffect(()=>{
        mode_api_url()

    },[])
    function mode_api_url () {
        let url
        let port = process.env.PORT || "3005"
        if (process.env.NODE_ENV === 'development') {
          url = `http://localhost:${port}/`
        }
    
        if (process.env.NODE_ENV === 'production') {
          url = `https://react-bank-musa.herokuapp.com/:${port}`
        }
        setApiUrl(url)
    
      }
    async function addToFaviroutes() {
        
        let postResponse = await axios.post(`${api_url}images`, props.item)
        console.log(postResponse.status)
        if (postResponse.status === 201) {
          // this.genereteSucssesMsg("add")
          // this.handleAlertModalChange()
        //  getDataFromDb()
        }
      }
    const classes = useStyles();
    
   


    return (
        <Card className={classes.root}>
            <CardHeader

                title={props.item.title}
            />
            <CardMedia
                className={classes.media}
                image={props.item.img}
            />
            <CardContent>

            </CardContent>
            <CardActions disableSpacing>
                <IconButton onClick={addToFaviroutes} aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>

            </CardActions>

        </Card>
    )
}

export default MiniCards
