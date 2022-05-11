import React from 'react';
import { CardActionArea } from '@mui/material';
import { useLocation } from 'react-router-dom';
import LowerCardDelete from './lowerCardDelete';
import LowerCardReserve from './lowerCardReserve';

/* eslint-disable */

const PlaneCard = (props) => {
    const location = useLocation();

    return(
    <div className='w-full h-32 sm:w-2/3 md:w-full mx-auto md:h-60 rounded-2xl flex hover:shadow-2xl hover:shadow-gray-600 transition-all' style={{
        backgroundImage: `url(${props.airplane.image})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        borderRadius: 10,
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'flex-start'}}>
        <CardActionArea
            onClick={props.handleClickOpen}
            className="h-3/4 border-b border-gray-600"
            style={{
            display: 'flex',
            flexFlow: 'column',
            justifyContent: 'flex-start',
            alignItems: 'start'
        }} >
            <div className="h-10 w-full bg-gray-900 bg-opacity-75 rounded-t-md">
                <h1 className="cool-title ml-4 my-auto text-left h-full">{props.airplane.name}</h1>
            </div>  
        </CardActionArea> 
        {location.pathname == '/remove-airplane' ? <LowerCardDelete airplane={props.airplane} /> : <LowerCardReserve airplane={props.airplane} />} 
    </div>
);}

export default PlaneCard;
