const FETCH_AIRPLANE_STATS_BEGIN = 'AirRovers-Frontend-App/details/FETCH_AIRPLANE_STATS_BEGIN';
const FETCH_AIRPLANE_STATS_SUCCESS = 'AirRovers-Frontend-App/details/FETCH_AIRPLANE_STATS_SUCCESS';
const FETCH_AIRPLANE_STATS_FAILURE = 'AirRovers-Frontend-App/details/FETCH_AIRPLANE_STATS_FAILURE';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const fetchPlaneStatsBegin = () => ({
  type: FETCH_AIRPLANE_STATS_BEGIN,
});

const fetchPlaneStatsSuccess = (payload) => ({
  type: FETCH_AIRPLANE_STATS_SUCCESS,
  payload,
});

const fetchPlaneStatsFailure = (error) => ({
  type: FETCH_AIRPLANE_STATS_FAILURE,
  payload: { error },
});

const url = 'https://aviones-api.herokuapp.com/planes/';

function handleErrors(response) {
  if (!response.ok) {
    throw Error(alert('The plane data you requested is not available'));
  }
  return response;
}

export function fetchPlaneStats(payload) {
  return (dispatch) => {
    dispatch(fetchPlaneStatsBegin());
    return fetch(url + payload)
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        const data = [];
        const planeStats = {
          id: json.id,
          name: json.name,
          capacity: json.capacity,
          range: json.range,
          url: json.url,
          speed: json.speed,
          images: json.images,
          price: json.price,
        };
        data.push(planeStats);
        dispatch(fetchPlaneStatsSuccess(data));
      })
      .catch((error) => dispatch(fetchPlaneStatsFailure(error)));
  };
}

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AIRPLANE_STATS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_AIRPLANE_STATS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_AIRPLANE_STATS_FAILURE:
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

export default detailsReducer;
