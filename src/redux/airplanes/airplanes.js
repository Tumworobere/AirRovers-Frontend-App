// const FETCH_DATA_BEGIN = 'AirRovers-Frontend-App/airplanes/FETCH_DATA_BEGIN';
// const FETCH_DATA_SUCCESS = 'AirRovers-Frontend-App/airplanes/FETCH_DATA_SUCCESS';
// const FETCH_DATA_FAILURE = 'AirRovers-Frontend-App/airplanes/FETCH_DATA_FAILURE';

// const initialState = {
//   data: [],
//   loading: false,
//   error: null,
// };

// const fetchDataBegin = () => ({
//   type: FETCH_DATA_BEGIN,
// });

// const fetchDataSuccess = (payload) => ({
//   type: FETCH_DATA_SUCCESS,
//   payload,
// });

// const fetchDataFailure = (error) => ({
//   type: FETCH_DATA_FAILURE,
//   payload: { error },
// });

// const url = 'https://aviones-api.herokuapp.com/planes';

// function handleErrors(response) {
//   if (!response.ok) {
//     throw Error(response.statusText);
//   }
//   return response;
// }

// export function fetchData() {
//   return (dispatch) => {
//     dispatch(fetchDataBegin());
//     return fetch(url)
//       .then(handleErrors)
//       .then((res) => res.json())
//       .then((json) => {
//         const data = [];
//         json.forEach((element) => {
//           const plane = {
//             id: element.id,
//             name: element.name,
//             capacity: element.capacity,
//             range: element.range,
//             url: element.url,
//             speed: element.speed,
//             images: element.images,
//             price: element.price,
//           };
//           data.push(plane);
//         });
//         dispatch(fetchDataSuccess(data));
//       })
//       .catch((error) => dispatch(fetchDataFailure(error)));
//   };
// }

// const planeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case FETCH_DATA_BEGIN:
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };

//     case FETCH_DATA_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: action.payload,
//       };

//     case FETCH_DATA_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload.error,
//         data: [],
//       };

//     default:
//       return state;
//   }
// };

// export default planeReducer;

import { baseAPI } from '../../logic/api';

const LOAD_AIRPLANES = 'App/airplanes/LOAD_AIRPLANES';
const LOAD_AIRPLANES_SUCCESS = 'App/airplanes/LOAD_AIRPLANES_SUCCESS';

const initialState = {
  airplanes_arr: [],
  loading: true,
};

export const loadAirplanes = () => ({
  type: LOAD_AIRPLANES,
});

export const loadAirplanesSuccess = (payload) => ({
  type: LOAD_AIRPLANES_SUCCESS,
  payload,
});

export const fetchAirplanes = () => async (dispatch) => {
  dispatch(loadAirplanes());
  const fetchedData = await fetch(`${baseAPI}/planes`, {
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: sessionStorage.getItem('token'),
    },
  });
  const result = await fetchedData.json();
  dispatch(loadAirplanesSuccess(result));
};

const airplanesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AIRPLANES:
      return {
        airplanes_arr: [...state.airplanes_arr],
        loading: true,
      };
    case LOAD_AIRPLANES_SUCCESS:
      return {
        airplanes_arr: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default airplanesReducer;
