webpackJsonp([2],{

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(6);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home(props) {
		_classCallCheck(this, Home);

		var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

		_this.state = {
			count: 0
		};
		return _this;
	}

	_createClass(Home, [{
		key: '_handleClick',
		value: function _handleClick() {
			this.setState({
				count: ++this.state.count
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				null,
				'this is home ',
				_react2.default.createElement('br', null),
				'\u5F53\u524D\u8BA1\u6570: ',
				this.state.count,
				_react2.default.createElement('br', null),
				_react2.default.createElement(
					'button',
					{ onClick: function onClick() {
							return _this2._handleClick();
						} },
					'\u81EA\u589E'
				)
			);
		}
	}]);

	return Home;
}(_react.Component);

var _default = Home;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Home, 'Home', 'D:\\react\\react-family\u5168\u5BB6\u6876\\src\\pages\\Home\\Home.js');

	__REACT_HOT_LOADER__.register(_default, 'default', 'D:\\react\\react-family\u5168\u5BB6\u6876\\src\\pages\\Home\\Home.js');
}();

;

/***/ })

});
//# sourceMappingURL=home.156d8e20c7a046c9178a.js.map