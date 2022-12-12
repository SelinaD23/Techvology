import { React, useState } from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';

import BASE_URL from '../utilities/constants';
import { FormControl } from '@mui/material';

const SearchBar = (props) => {
    const handleSubmit = (e) => e.preventDefault();
    //const [query, setQuery] = useState('');

    const handleSearchChange = (e) => {
        if (!e.target.value) {
            return props.setSearchList(props.actionsList);
        }
        const resultsArray = props.actionsList.filter(action => action.title.toLowerCase().includes(e.target.value.toLowerCase()));
        props.setSearchList(resultsArray);
    }

    const addFromSearch = async (e) => {
        if (e.key === 'Enter') {
            try {
                const response = await axios.post(`${BASE_URL}/actions`, {
                    title: e.target.value,
                    carbon_output: 999,
                });
                console.log(response);
                props.fetchActions();
            } catch (err) {
                console.log(err);
            }
            e.target.value = "";
           // setQuery('');
        }
    }

    return (
        <FormControl className="search" onSubmit={handleSubmit} fullWidth={true} variant="standard" style={{ marginLeft: '32px', margin: 'auto', marginBottom: '15px' }}>
            <div class="container">
                <div class="row text-center">
                    <div class="col-1"></div>
                    <div class="col-10 col-md-4 col-xl-10 text-center">
                        <input class="form-control d-xl-inline-flex justify-content-xl-center" type="search" placeholder="Search Action"
                            id="search"
                            onChange={handleSearchChange}
                            onKeyPress={addFromSearch}
                        //  value={query}U
                        />
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>
        </FormControl>
        )
}
export default SearchBar;

/*
const SearchBar = (props) => {
    const [query, setQuery] = React.useState('');

    const search = async(e) => {
        if(e.key === 'Enter') {
            try{
                const response = await axios.post(`${BASE_URL}/actions`, {
                    title: e.target.value,
                    carbon_output: 999,
                });
                console.log(response);
                props.fetchActions();
            }catch(err){
                console.log(err);
            }
            setQuery('');
        }
    }

    return (
        <TextField  // https://mui.com/material-ui/react-text-field/
            onKeyPress={search}
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className="search-bar"
            autoFocus={true}
            id="outlined-full-width"
            label="Search Actions"
            style={{ margin:8 }}
            placeholder="Action Name"
            required={true}
            fullWidth
            margin="normal"
        />
    )
}
*/
