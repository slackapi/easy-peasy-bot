const express = require('express')
const axios = require('axios')
const config = require('config')
const r = express.Router();


r.get('/', (req, res, next) => {
  console.log(req)
  return res.send('Welcome to Rotom, More than a Bot, a BOT!')
})

r.post('/', (req, res, next) => {
  console.log(req.body)
  return res.send('Got a POST')
})

// r.get('/test', async (req, res, next) => {
//   try {
//     const resp = await axios.post(
//       `https://hooks.slack.com/services/${config.get('slack.token')}`,
//       {
//         text: 'YO YO!!'
//       })
//     console.log(resp)
//     return res.send('okay')
//   } catch (error) {
//     return res.send('Something went really bad!')
//   }
// })

module.exports = r;