// third party api calls and validations
const axios = require('axios');

const getUsers = async() => {
    try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports={getUsers}
