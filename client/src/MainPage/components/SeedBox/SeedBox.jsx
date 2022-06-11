import React from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';


const SeedBox = ({ changeSeed, defaultValue = '', setUsers, setPage }) => {
    const getRandom = async () => {
        try {
            setUsers([])
            setPage(1)
            await axios.get('/api/user/getRandom', {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    if (res?.data) {
                        changeSeed(res?.data)
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setRandom = (event) => {
        if (Number(event.target.value >= 0)) {
            setPage(1)
            setUsers([])
            changeSeed(event.target.value)
        }
    }
    return (
        <div className='w-100 d-flex align-items-center justify-content-end'>
            <input type="number" className="form-control bg-transparent border-0 border-bottom rounded-0 shadow-none" value={defaultValue} onChange={setRandom} />
            <Button variant="contained" className='ms-2' onClick={getRandom}>Random</Button>
        </div>
    )
}

export default SeedBox