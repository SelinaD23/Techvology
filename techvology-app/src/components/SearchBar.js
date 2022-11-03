import React from 'react'
import TextField from '@mui/material/TextField';

const SearchBar = (props) => {
    const query = "Hello";

    const handleSearch = (e) => {
        console.log(e) 
        // e.preventDefault();
        // const queryVal = query.current.value;
        // props.fetchAction(queryVal.trim())
    }

    return (
        <form onSubmit={handleSearch} className="search-bar">
            <TextField  // https://mui.com/material-ui/react-text-field/
                className="search-bar"
                autoFocus={true}
//                inputRef={query}
                id="outlined-full-width"
                label="Search Actions"
                style={{ margin:8 }}
                placeholder="Action Name"
                required={true}
                fullWidth
                margin="normal"
            />
        </form>
    )
}

export default SearchBar