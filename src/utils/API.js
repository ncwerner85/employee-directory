import axios from 'axios';

// eslint-disable-next-line
export default {
    getEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=50");
    }
};