import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '150px',
                // height: '1px',
                // outline: 'none',
                // cursor: 'pointer',
                // color: 'rgba(0, 204, 34, 1)',
                // backgroundColor:'gray'
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
