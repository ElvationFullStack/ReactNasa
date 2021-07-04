import { React, useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios'
import MiniCards from './MiniCards';
import '../styles/search.css'
const searchApiUrl = "https://images-api.nasa.gov"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

export default function Search(props) {
    const classes = useStyles();
    const [searchText, setSearchText] = useState("")
    const [itemsSearched, setItemsSearched] = useState([])


    useEffect(() => {
        if (searchText === "") {
            return
        }
        const res = axios.get(`${searchApiUrl}/search?q=${searchText}`)

        res.then(response => {
            const { items } = response.data.collection

            console.log(items)
            const filtterd = items.map(item => {
                return {
                    title: item.data[0].title,
                    img: item.links === undefined ? "not found" : item.links[0].href,
                    description:item.data[0].description

                }
            }, [searchText])
            setItemsSearched(filtterd)
            console.log(filtterd)
        })


    }, [searchText])

    return (


        <div >

            <TextField
                id="standard-full-width"
                label="Label"
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                onChange={(e) => setSearchText(e.target.value)}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
            />
            {
               
                <div className="search-display">
                    {itemsSearched.map((i,indx) => {

                        return <MiniCards showAdd={true}   addToFaviroutes={props.addToFaviroutes} key={indx} item={i}></MiniCards>
                    })}
                </div>


            }
        </div>





    )
}
