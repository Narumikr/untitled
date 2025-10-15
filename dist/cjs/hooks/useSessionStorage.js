'use client';
'use strict';

var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');
var React = require('react');
var logging = require('../internal/logging.js');
var serialization = require('../utils/serialization.js');

var useSessionStorage = function useSessionStorage(sessionStorageKey, initialValue) {
  var isClient = React.useRef(typeof window !== 'undefined');
  var _useState = React.useState(function () {
      if (!isClient.current) return initialValue;
      try {
        var items = sessionStorage.getItem(sessionStorageKey);
        if (items) {
          return serialization.deserializeDataWithTemplate(JSON.parse(items), initialValue);
        }
      } catch (err) {
        logging.ConsoleError('Failed to get session storage value : ', err);
      }
      return initialValue;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    storedValue = _useState2[0],
    setStoredValue = _useState2[1];
  React.useEffect(function () {
    if (!isClient.current) return;
    try {
      var serialized = JSON.stringify(serialization.serializeData(storedValue));
      sessionStorage.setItem(sessionStorageKey, serialized);
    } catch (err) {
      logging.ConsoleError('Failed to set session storage : ', err);
    }
  }, [sessionStorageKey, storedValue]);
  var deleteSessionStorage = function deleteSessionStorage() {
    setStoredValue(initialValue);
    sessionStorage.removeItem(sessionStorageKey);
  };
  return {
    storedValue: storedValue,
    setStoredValue: setStoredValue,
    deleteSessionStorage: deleteSessionStorage
  };
};

exports.useSessionStorage = useSessionStorage;
