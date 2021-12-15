import axios from 'axios';
// const BASEURL = 'https://randomuser.me/api/?results=200&nat=us';
// const BASEURL = 'https://fj-randomizer-backend.herokuapp.com/api/people';
const BASEURL = 'http://localhost:8081/api/people';

const API = {
  getPeople: function () {
    return axios.get(BASEURL);
  },
  addPerson: function () {
    return axios.post(BASEURL);
  },
  updatePerson: function () {
    return axios.put(BASEURL);
  },
  deletePerson: function () {
    return axios.delete(`${BASEURL}/:id`);
  },
};

export default API;
