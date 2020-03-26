function localParam (search, hash) {
  search = search || window.location.search;
  hash = hash || window.location.hash;
  let fn = function(str, reg) {
      if (str) {
          let data = {};
          str.replace(reg, function($0, $1, $2, $3) {
              data[$1] = $3;
          });
          return data;
      }
    }
      return {
        search : fn(search, new RegExp("([^?=&]+)(=([^&]*))?", "g")) || {},
        hash : fn(hash, new RegExp("([^#=&]+)(=([^&]*))?", "g")) || {}
    }
  }

export {localParam}



