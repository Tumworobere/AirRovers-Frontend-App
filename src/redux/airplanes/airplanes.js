const FETCH_DATA_BEGIN = 'AirRovers-Frontend-App/airplanes/FETCH_DATA_BEGIN';
const FETCH_DATA_SUCCESS = 'AirRovers-Frontend-App/airplanes/FETCH_DATA_SUCCESS';
const FETCH_DATA_FAILURE = 'AirRovers-Frontend-App/airplanes/FETCH_DATA_FAILURE';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const fetchDataBegin = () => ({
  type: FETCH_DATA_BEGIN,
});

const fetchDataSuccess = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload,
});

const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: { error },
});

const url = 'https://aviones-api.herokuapp.com/planes';
