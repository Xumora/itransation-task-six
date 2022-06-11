import React from 'react'
import Slider from '@mui/material/Slider';

const ErrorBox = ({ defaultValue, setErrors }) => {
    const changeErrors = (event) => {
        if (Number(event.target.value) >= 0 && Number(event.target.value) <= 1000) {
            setErrors(event.target.value)
        }
    }

    return (
        <div className='w-100'>
            <input type="number" className="form-control bg-transparent border-0 border-bottom rounded-0 shadow-none" value={defaultValue} onChange={changeErrors} />
            <Slider
                aria-label="Small steps"
                defaultValue={0}
                getAriaValueText={(value) => `${value}`}
                onChange={(e) => setErrors(100 * e.target.value)}
                step={1}
                min={0}
                max={10}
                valueLabelDisplay="auto"
            />
        </div>
    )
}

export default ErrorBox