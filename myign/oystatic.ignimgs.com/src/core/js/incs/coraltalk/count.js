var IGN = IGN || {};
IGN.Coraltalk = IGN.Coraltalk || {};

IGN.Coraltalk.Count = (function(window) {
  var Count = {
    init: function() {
      this.reload();
    },
    reload: function(formatFn) {
      formatFn = typeof formatFn === 'function' ? formatFn : (function(count) { return count; });
      reloadCounts(formatFn);
    }
  };

  var makeRequest = function(talkUrl, ids) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', talkUrl + 'api/v1/ign/assets/count');
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhr.onload = function () {
        if (this.status === 200) {
          resolve(xhr.response);
        } else {
          reject({
            status: this.status,
            statusText: xhr.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      };
      xhr.send(JSON.stringify({ids: ids}));
    });
  }

  var reloadCounts = function(formatFn) {
    var ids = [];
    var elements = document.getElementsByClassName('coraltalk-commentcount coraltalk-unloaded');
    var settings = {};
    for(i = 0; i < elements.length; i++) {
      var element = elements[i];
      settings = JSON.parse(element.getAttribute('data-settings'));
      ids.push(settings.contentId);
      element.classList.remove('coraltalk-unloaded');
    }
    // make coral api call with bulk ids
    // only care if there are ids to process
    if(ids.length > 0) {
      makeRequest(settings.talkUrl, ids)
      .then(function(data) {
        processCountResults(data, formatFn);
      }).catch(function(error) {
        console.error(error);
      })
    }
  }

  var processCountResults = function(data, formatFn) {
    var result = JSON.parse(data);
    if(result && result.assets && result.assets.length > 0) {
      for(i = 0; i < result.assets.length; i++) {
        var selector = '.coraltalk-commentcount[data-content-id="' + result.assets[i].id + '"]';
        var element = document.querySelector(selector);
        var settings = JSON.parse(element.getAttribute('data-settings'));
        var count = result.assets[i].count;
        if (count > 0) {
          element.classList.remove('coraltalk-no-comments');
        }
        element.innerHTML = (settings.showLabel || typeof settings.showLabel === 'undefined')
          ? formatFn(count) + ' Comment'+ (count === 1 ? '' : 's')		
          : formatFn(count);
      }
    } else {
      console.error('Malformed Coral Talk Count API return');
    }
  }
  
  return Count;
})(window);


window.addEventListener(
  'load',
  IGN.Coraltalk.Count.init.bind(IGN.Coraltalk.Count),
  false
);
