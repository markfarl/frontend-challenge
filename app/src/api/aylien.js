import { NEWSAPI_APP_ID, NEWSAPI_APP_KEY } from  '../constants/api'
const axios = require('axios');;

class AylienApi {
  constructor() {}

  listStories(searchTerm){
    return axios.get('https://api.aylien.com/news/stories', {
      headers: {
          'Content-Type': 'application/json',
      'X-AYLIEN-NewsAPI-Application-ID': NEWSAPI_APP_ID,
      'X-AYLIEN-NewsAPI-Application-Key': NEWSAPI_APP_KEY,
      },
      params: {
          language: ['en'],
          perPage: 25,
          cursor: '*',
          "entities.surface_forms.text": searchTerm
      }
      })
      .then(function (response) {
      console.log('response', response);
      })
      .catch(function (error) {console.log(error)})
  }

}

// export default api.listStories(opts, callback);
export default new AylienApi();
