import { React, useState, useEffect, Link } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import IconButton from '@material-ui/core/IconButton';

import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { matchPath } from 'react-router';
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
    const [api_url, setApiUrl] = useState("")


    function handleLink() {

    }

    useEffect(() => {
        console.log(props)

    }, [])

    async function addToFaviroutes() {
        props.addToFaviroutes(props.item)

    }
    async function deleteFromFaviroutes() {
        props.deleteFromFaviroutes(props.item._id)

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


                {props.showAdd === true ? <IconButton onClick={addToFaviroutes} aria-label="add to favorites">
                    <FavoriteIcon></FavoriteIcon></IconButton> :
                    <IconButton onClick={deleteFromFaviroutes} aria-label="add to favorites">
                        <DeleteForeverOutlinedIcon /></IconButton>
                }






            </CardActions>

        </Card>

    )
}

export default MiniCards
