import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PropTypes from 'prop-types';

export const Searcher = ({setSearch, valueToShort, valueSucces}) => {

    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange  = (e) => {
        setInputValue(e.target.value);
    }   
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            setSearch(inputValue);
            valueSucces();
            setInputValue('');
        } else {
            valueToShort();
        }
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <Paper
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, margin: 'auto'}}
                    type="text" 
                    onChange={ handleInputChange }
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Images"
                        value={inputValue}
                    />
                    <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </form>
        </>
    )
    }
    
    Searcher.propTypes = {
        setSearch: PropTypes.func.isRequired,
        valueToShort: PropTypes.func.isRequired
    }
