import { React, useState } from 'react'
import TextField from '@mui/material/TextField';

const SearchBar = ({ actionsList, setSearchList }) => {
    const handleSubmit = (e) => e.preventDefault();

    const handleSearchChange = (e) => {
        if (!e.target.value) {
            return setSearchList(actionsList);
        }
        const resultsArray = actionsList.filter(action => action.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setSearchList(resultsArray);
    }

    return (
            <form className="search" onSubmit={handleSubmit}>
                <input
                    className="search__input"
                    type="text"
                    id="search"
                    onChange={handleSearchChange}
                />
            </form>
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
