(function () {

  'use strict';

  function hasProperty(needle, haystack) {

    if (typeof haystack !== 'object' || haystack === null) {
      return false;
    }

    if (typeof needle !== 'string' || needle === '') {
      return false;
    }

    return recur(haystack, needle.split('.'));
  }

  function recur(haystack, parts) {

    if (parts.length === 0) {
      return true;
    }

    if (typeof haystack[parts[0]] !== 'undefined') {
      return recur(haystack[parts[0]], parts.slice(1));
    }

    return false;
  }

  module.exports = hasProperty;

}());
