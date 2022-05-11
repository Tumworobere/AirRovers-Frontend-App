import React from 'react';
import Money from './Money';
import planeReserve from './planeReserve';
/* eslint-disable */

const LowerCardReserve = (props) => (
  <div className=" bg-gray-900 w-full h-1/4 flex flex-row-reverse justify-between bg-opacity-50">
    <planeReserve airplane={props.airplane} />
                <div className="ml-3 my-auto flex">
                    <Money />
                    <p className="ml-2 text-xs text-white " style={{fontFamily: 'Montserrat'}}>Price per day:<br/><span className="text-md font-bold">{props.airplane.price}$</span></p>
                </div>

  </div>
);

export default LowerCardReserve;
