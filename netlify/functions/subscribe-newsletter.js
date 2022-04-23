const axios = require('axios')

const ENDPOINT = "https://api.buttondown.email/v1/subscribers"
const API_KEY = process.env.VITE_BUTTONDOWN_API_KEY

exports.handler = async (event, context) => {
  try {
    const response = await axios.post(ENDPOINT, JSON.parse(event.body), {
      headers: {
        'Authorization': `Token ${API_KEY}`
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    }
  } catch (error) {
    if (error.isAxiosError) {
      return {
        statusCode: error.response.status,
        body: JSON.stringify(error.response.data)
      }
    }

    return {
      statusCode: 500,
      body: JSON.stringify(error.toJSON())
    }
  }
}