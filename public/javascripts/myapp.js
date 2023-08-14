myappJs = (function() {
  "use strict";

  function myappJs() {
    
  }

  myappJs.toIndex = function() {
    location.href='/';
    return false;
  }

  myappJs.toHome = function() {
    location.href='/home';
    return false;
  }

  return myappJs;
})();