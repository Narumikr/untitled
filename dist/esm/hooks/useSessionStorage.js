'use client';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { useRef, useState, useEffect } from 'react';
import { ConsoleError } from '../internal/logging.js';
import { deserializeDataWithTemplate, serializeData } from '../utils/serialization.js';

var useSessionStorage = function useSessionStorage(sessionStorageKey, initialValue) {
  var isClient = useRef(typeof window !== 'undefined');
  var _useState = useState(function () {
      if (!isClient.current) return initialValue;
      try {
        var items = sessionStorage.getItem(sessionStorageKey);
        if (items) {
          return deserializeDataWithTemplate(JSON.parse(items), initialValue);
        }
      } catch (err) {
        ConsoleError('Failed to get session storage value : ', err);
      }
      return initialValue;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    storedValue = _useState2[0],
    setStoredValue = _useState2[1];
  useEffect(function () {
    if (!isClient.current) return;
    try {
      var serialized = JSON.stringify(serializeData(storedValue));
      sessionStorage.setItem(sessionStorageKey, serialized);
    } catch (err) {
      ConsoleError('Failed to set session storage : ', err);
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

export { useSessionStorage };
