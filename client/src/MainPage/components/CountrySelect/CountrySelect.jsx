import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const CountrySelect = ({ country, setCountry }) => {
    return (
        <FormControl fullWidth>
            <InputLabel id="countrySelectLabel">Country</InputLabel>
            <Select
                labelId="countrySelectLabel"
                id="countrySelect"
                value={country}
                label="Country"
                onChange={setCountry}
            >
                <MenuItem value={'ru'}>Russia</MenuItem>
                <MenuItem value={'en_US'}>US</MenuItem>
                <MenuItem value={'tr'}>Turkey</MenuItem>
            </Select>
        </FormControl>
    )
}

export default CountrySelect