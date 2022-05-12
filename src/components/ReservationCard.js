/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchReservations, loadReservations } from '../redux/reservations/reservations';
import { delete_reservation } from '../logic/api';

/* eslint-disable */

const ReservationCard = (props) => {
    const dispatch = useDispatch();
    return(
    <div className='w-full h-36 sm:w-2/3 md:w-full mx-auto md:h-60 rounded-t-3xl flex hover:shadow-2xl hover:shadow-gray-600 transition-all' style={{
        backgroundImage: `url(${props.reservation.airplane.image})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        borderRadius: 10,
        display: 'flex',
        flexFlow: 'column-reverse'}}>
        <div className="relative top-6 h-28 md:h-1/2 w-1/2 md:w-3/4 mx-auto bg-white bg-opacity-80 rounded-t-md flex flex-col shadow-black shadow-xl">
            <div className="flex flex-col">
                <p className="mx-auto mt-2 raleway font-bold text-xl text-black">{props.reservation.airplane.name}</p>
                <hr className="border-black h-1 w-3/4 m-auto" />
                <div className="flex p-2 pb-0">
                    <div className="w-full flex flex-col justify-center text-black text-xs montserrat text-center">
                    <p className="w-full flex mb-5 justify-center"><svg className="h-full my-auto mr-2" xmlns="http://www.w3.org/2000/svg" fill="black" width="20" height="20" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" /></svg> A: {props.reservation.date_start}</p>
                    <p className="mb-1 w-full flex justify-center"><svg className="h-full my-auto mr-2" xmlns="http://www.w3.org/2000/svg" fill="black" width="20" height="20" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" /></svg> B:   {props.reservation.date_end}</p>
                    </div>
                </div>
                <button onClick={async() => {
                  dispatch(loadReservations())
                  await(delete_reservation(props.reservation.id));
                  dispatch(fetchReservations());
                }}
                type="button" className="w-full bg-red-600 text-white rounded-b-2xl">CANCEL</button>
            </div>
            
        </div>
        
    </div> 
    
    
);}

export default ReservationCard;
