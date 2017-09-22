webpackJsonp([1],{

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(122);

var _userInfo = __webpack_require__(124);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserInfo = function (_Component) {
	_inherits(UserInfo, _Component);

	function UserInfo() {
		_classCallCheck(this, UserInfo);

		return _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).apply(this, arguments));
	}

	_createClass(UserInfo, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props$userInfo = this.props.userInfo,
			    userInfo = _props$userInfo.userInfo,
			    isLoading = _props$userInfo.isLoading,
			    errorMsg = _props$userInfo.errorMsg;

			return _react2.default.createElement(
				'div',
				null,
				isLoading ? '请求信息中......' : errorMsg ? errorMsg : _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'p',
						null,
						'\u7528\u6237\u4FE1\u606F\uFF1A'
					),
					_react2.default.createElement(
						'p',
						null,
						'\u7528\u6237\u540D\uFF1A',
						userInfo.name
					),
					_react2.default.createElement(
						'p',
						null,
						'\u4ECB\u7ECD\uFF1A',
						userInfo.intro
					)
				),
				_react2.default.createElement(
					'button',
					{ onClick: function onClick() {
							return _this2.props.getUserInfo();
						} },
					'\u8BF7\u6C42\u7528\u6237\u4FE1\u606F'
				)
			);
		}
	}]);

	return UserInfo;
}(_react.Component);

var _default = (0, _reactRedux.connect)(function (state) {
	return {
		userInfo: state.userInfo
	};
}, {
	getUserInfo: _userInfo.getUserInfo
})(UserInfo);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(UserInfo, 'UserInfo', 'D:\\react\\react-family\u5168\u5BB6\u6876\\src\\pages\\UserInfo\\UserInfo.js');

	__REACT_HOT_LOADER__.register(_default, 'default', 'D:\\react\\react-family\u5168\u5BB6\u6876\\src\\pages\\UserInfo\\UserInfo.js');
}();

;

/***/ })

});
//# sourceMappingURL=userInfo.8deaf2521a2bb6277ac2.js.map