import * as actionTypes from '../constants';
import axios from 'axios';

//TODO : split actions into separate files
//TODO : remove payload if not necessary
/**
 * init app & get data from package.json file
 */
export const init = () => dispatch => {
  axios.get('/products.json')
    .then(function (response) {
      dispatch({ type: actionTypes.APP_INIT, payload: response.data });
    });


};
