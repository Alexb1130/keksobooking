'use strict';

(function () {
  var URL = 'https://js.dump.academy/keksobooking/data';

  var load = function (onSucces, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      try {
        onSucces(xhr.response);
      } catch (err) {
        onError();
      }
    });

    xhr.open('GET', URL);
    xhr.send();

  };

  window.load = load;

})();