'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sensitiveWords = exports.sensitiveWords = function sensitiveWords(content, words) {
  return content.replace(new RegExp(words.join('|'), 'ig'), '****');
};