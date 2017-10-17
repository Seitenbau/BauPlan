import { put, takeLatest } from 'redux-saga/effects';
import plans from 'settings/plans.json';
import { requestTableDataSuccess, requestProjectDataSuccess, requestPlansSuccess } from './actions';
import {
  REQUEST_TABLE_DATA,
  REQUEST_PROJECTS_DATA,
} from './constants';

// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
  yield takeLatest(REQUEST_TABLE_DATA, getTables);
  yield takeLatest(REQUEST_PROJECTS_DATA, getProjects);
}

/* parameter : action */
export function* getTables() {
  yield put(requestTableDataSuccess(
    [{
      name: 'Tim Dresner',
      x: 2,
      y: 1.5,
      floor: 0,
      rotation: 0,
      number: 1,
      projects: [1, 2],
      planId: 'F0',
    }, {
      name: 'Christina Freud',
      x: 2.50,
      y: 3,
      floor: 0,
      rotation: 180,
      projects: 1,
      number: 2,
      planId: 'F0',
    }, {
      name: 'Martina Huber',
      x: 3,
      y: 4,
      floor: 0,
      rotation: 245,
      number: 2,
      planId: 'F1',
    }, {
      name: 'Jan Friedmann',
      x: 3.50,
      y: 5,
      floor: 0,
      rotation: 90,
      number: 3,
      planId: 'F0',
    }]
  ));
}

export function* getProjects() {
  yield put(requestProjectDataSuccess(
    [{
      id: 1,
      name: 'Human Resources',
      short: 'HR',
      color: '#FFFF00',
    }, {
      id: 2,
      name: 'Financial Department',
      short: 'FD',
      color: '#FF00FF',
    }]
  ));
}

export function* getPLans() {
  yield put(requestPlansSuccess(plans));
}

// All sagas to be loaded
export default [
  defaultSaga,
  getPLans,
  getTables,
  getProjects,
];
