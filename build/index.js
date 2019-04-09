'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (content, words) {
  return content.replace(new RegExp(words.join('|'), 'ig'), '***');
};