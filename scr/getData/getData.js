const axios = require("axios");

const getData = async () => {
  try {
    const response = await axios.get('http://jsonplaceholder.typicode.com/users')
    const userIds = response.data.map(user => user.id)
  } catch (e) {
    console.log(e)
  }
}

module.exports == getData;