import { call, put } from 'redux-saga/effects';
import { doAddPlanning } from '../actions/planning';

const BASE_URL = 'https://planning.iae-paris.com/api/v1/cours.json?d=';

const fetchPlanning = query => 
    fetch(BASE_URL + query)
        .then(response => response.json());

function *handleFetchPlanning(action) {
    const { query } = action;

    const result = yield call(fetchPlanning, query);
    yield put(doAddPlanning(result));
}

export {
    handleFetchPlanning,
};