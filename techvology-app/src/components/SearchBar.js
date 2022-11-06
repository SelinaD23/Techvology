import React from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';

const baseUrl = "http://127.0.0.1:5000";
const SearchBar = () => {
    const [query, setQuery] = React.useState('');

    const search = async(e) => {
        if(e.key === 'Enter') {
            try{
                const response = await axios.post(`${baseUrl}/actions`, {
                    title: e.target.value,
                    carbon_output: 999,
                });
                console.log(response);
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