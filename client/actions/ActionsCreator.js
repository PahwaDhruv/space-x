import axios from 'axios';

export const IS_LOADING = 'is_loading';
export const FETCH_PROGRAMS = 'fetch_programs';
export const FETCH_BY_YEAR = 'fetch_by_year';
export const FETCH_BY_SUCCESSFUL_LAUNCH = 'fetch_by_successful_launch';
export const FETCH_BY_SUCCESSFUL_LANDING = 'fetch_by_successful_landing';

export const fetchPrograms = (url) => async dispatch =>{
    dispatch({type : IS_LOADING});
    const res = await axios.get(url);
    dispatch({
        type : FETCH_PROGRAMS,
        payload : res.data
    });
};

export const fetchByYear = (year) => async dispatch => {
    dispatch({type : IS_LOADING});
    const res = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=${year}`);
    dispatch({
        type : FETCH_BY_YEAR,
        payload : res.data
    });
}

export const fetchBySuccessfulLaunch = (val) => async dispatch => {
    dispatch({type : IS_LOADING});
    const res = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${val.toLowerCase()}`);
    dispatch({
        type : FETCH_BY_SUCCESSFUL_LAUNCH,
        payload : res.data
    });
}

export const fetchBySuccessfulLanding = (val) => async dispatch => {
    dispatch({type : IS_LOADING});
    const res = await axios.get(`https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${val.toLowerCase()}`);
    dispatch({
        type : FETCH_BY_SUCCESSFUL_LANDING,
        payload : res.data
    });
}