import * as AylienNewsApi from 'aylien-news-api'
import { NEWSAPI_APP_ID, NEWSAPI_APP_KEY } from  '../constants/api'

const defaultClient = AylienNewsApi.ApiClient.instance;

const app_id = defaultClient.authentications["app_id"];
app_id.apiKey = NEWSAPI_APP_ID;

const app_key = defaultClient.authentications["app_key"];
app_key.apiKey = NEWSAPI_APP_KEY;

const api = new AylienNewsApi.DefaultApi();

const opts = {
  title: "startup",
  publishedAtStart: "NOW-7DAYS",
  publishedAtEnd: "NOW"
};

const callback = (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log("API called successfully. Returned data: ");
    console.log("========================================");
    for (var i = 0; i < data.stories.length; i++) {
      console.log(data.stories[i].title + " / " + data.stories[i].source.name);
    }
  }
};

class AylienApi {
  constructor(opts) {
    this._title = opts.title;
    this._publishedAtStart = opts.publishedAtStart;
    this._publishedAtEnd = opts.publishedAtEnd;
  }

  listStories() {
    return new Promise((resolve, reject) => {
      try {
        const data = api.listStories({title:this._title, publishedAtStart:this._publishedAtStart, publishedAtEnd:this._publishedAtEnd}, callback)
        resolve(data);
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }
}

// export default api.listStories(opts, callback);
export default new AylienApi(opts);
