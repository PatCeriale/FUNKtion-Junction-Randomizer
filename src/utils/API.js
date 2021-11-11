import axios from 'axios';
const BASEURL = 'https://randomuser.me/api/?results=200&nat=us';
// const BASEURL = 'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all';

const API = {
  getPeople: function () {
    return axios.get(BASEURL);
  },
};

export default API;
