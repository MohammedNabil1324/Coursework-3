let app = new Vue({
  data: {
    sitename: "Lessons",
    lessons: {},
  },
  created: function () {
    fetch('https://coursewrk-2.herokuapp.com/collection/Lessons').then(
        function (response) {
            response.setHeader('Access-Control-Allow-Origin', req.headers.origin);
      response.json().then(function (json) {
        app.lessons = json;
      });
    })
  }
})
