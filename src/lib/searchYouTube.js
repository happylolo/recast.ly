var searchYouTube = (options, callback) => {
  // The $.get() method requests data from the server with an HTTP GET request.
  // Here 'https://www.googleapis.com/youtube/v3/search' is the URL, following with the callback
  // The template for sending a GET request to the Youtube Search:list API is: https://developers.google.com/youtube/v3/docs/search/list, we can also refer to SearchYouTubeSpec.js(line 63)
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({ items }) => {
      console.log("items = ", items);
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchYouTube;
