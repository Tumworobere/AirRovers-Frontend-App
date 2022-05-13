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
