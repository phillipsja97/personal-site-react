import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/projects.json`)
    .then((response) => {
      const theProjects = response.data;
      const projects = [];
      Object.keys(theProjects).forEach((fbId) => {
        theProjects[fbId].id = fbId;
        projects.push(theProjects[fbId]);
      });
      resolve(projects);
    })
    .catch((error) => reject(error));
});

export default { getProjects };
