// import request from 'superagent'

// const rootUrl = '/api/v1'

// export function getBets () {
//   return request.get(rootUrl + '/bets')
//     .then(res => {
//       return res.body.bets
//     })
// }

import request from 'superagent'

const horoscopeApi = 'https://www.horoscopes-and-astrology.com/json'

export function getHoroscopes () {
  return request
    .get(horoscopeApi)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log(err.message)
    })
}

export function getDuckDuck () {
  return request
    .get(duckDuckApi)
    .then(res => {
      return res.body
    })
    .catch(err => {
      console.log(err.message)
    })
}