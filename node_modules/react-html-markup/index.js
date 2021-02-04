'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // eslint-disable-line


var Markup = function Markup(_ref) {
  var htmlTag = _ref.htmlTag,
    htmlString = _ref.htmlString,
    rest = _objectWithoutProperties(_ref, ['htmlTag', 'htmlString']);
  
  var custom = rest || {};
  custom.dangerouslySetInnerHTML = { __html: htmlString };
  return _react2.default.createElement(htmlTag, custom);
};

Markup.propTypes = {
  htmlTag: _propTypes2.default.string,
  htmlString: _propTypes2.default.string
};

Markup.defaultProps = {
  htmlTag: 'div',
  htmlString: ''
};

module.exports = Markup;
