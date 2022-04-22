import axios from 'axios'

const ENDPOINT = "https://api.buttondown.email/v1/subscribers"
const API_KEY = process.env.VITE_BUTTONDOWN_API_KEY

exports.handler = async (event, context) => {
  axios.post(ENDPOINT, {
    email: event.body.email,
    referrer_url: 'https://imsus.dev',
    tags: ['visitor']
  }, {
    headers: {
      'Authorization': `Token ${API_KEY}`
    }
  }).then((res) => {
    return {
      statusCode: 200,
      body: JSON.stringify(res.data)
    }
  }).catch((res) => {
    return {
      statusCode: 500,
      body: JSON.stringify(res.data)
    }
  })
}