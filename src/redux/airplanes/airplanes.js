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

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function fetchData() {
  return (dispatch) => {
    dispatch(fetchDataBegin());
    return fetch(url)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        const data = [];
        json.forEach((element) => {
          const plane = {
            id: element.id,
            name: element.name,
            capacity: element.capacity,
            range: element.range,
            url: element.url,
            speed: element.speed,
            images: element.images,
            price: element.price,
          };
          data.push(plane);
        });
        dispatch(fetchDataSuccess(data));
      })
      .catch((error) => dispatch(fetchDataFailure(error)));
  };
}

const planeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: [],
      };

    default:
      return state;
  }
};

export default planeReducer;
