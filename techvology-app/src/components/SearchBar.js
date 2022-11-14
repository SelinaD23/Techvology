import React from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';

import BASE_URL from '../utilities/constants';

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

export default SearchBar