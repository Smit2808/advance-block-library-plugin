/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./block.js":
/*!******************!*\
  !*** ./block.js ***!
  \******************/
/***/ (() => {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    ToggleControl = _wp$components.ToggleControl,\n    TextControl = _wp$components.TextControl,\n    Button = _wp$components.Button,\n    SelectControl = _wp$components.SelectControl;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls,\n    ColorPalette = _wp$editor.ColorPalette,\n    MediaUpload = _wp$editor.MediaUpload;\nvar _wp = wp,\n    ServerSideRender = _wp.serverSideRender;\nvar __ = wp.i18n.__;\n\nvar blogListingBlock = /*#__PURE__*/function (_Component) {\n  _inherits(blogListingBlock, _Component);\n\n  var _super = _createSuper(blogListingBlock);\n\n  function blogListingBlock() {\n    var _this;\n\n    _classCallCheck(this, blogListingBlock);\n\n    _this = _super.apply(this, arguments);\n    _this.state = {\n      postList: []\n    };\n    return _this;\n  }\n\n  _createClass(blogListingBlock, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      wp.apiFetch({\n        path: 'abl_api/request/all_post_types'\n      }).then(function (posts) {\n        var postOption = [];\n        postOption.push({\n          label: __('Posts'),\n          value: __('post')\n        });\n        posts.forEach(function (item) {\n          postOption.push({\n            label: __(item.label),\n            value: __(item.title)\n          });\n        });\n        setTimeout(function () {\n          this.setState({\n            postList: postOption\n          });\n        }.bind(_this2), 600);\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this$props = this.props,\n          attributes = _this$props.attributes,\n          setAttributes = _this$props.setAttributes;\n      var selectedPostType = attributes.selectedPostType,\n          selectedPostStatus = attributes.selectedPostStatus,\n          selectedOrderBy = attributes.selectedOrderBy,\n          selectedOrder = attributes.selectedOrder,\n          displayFeatureImg = attributes.displayFeatureImg,\n          displayTitle = attributes.displayTitle,\n          displayDesc = attributes.displayDesc,\n          displayLink = attributes.displayLink,\n          titleColor = attributes.titleColor,\n          descColor = attributes.descColor,\n          linkColor = attributes.linkColor;\n      var postList = this.state.postList;\n      return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {\n        title: \"Query Settings\",\n        initialOpen: true\n      }, /*#__PURE__*/React.createElement(SelectControl, {\n        label: __('Select Post Type'),\n        value: selectedPostType,\n        options: postList,\n        onChange: function onChange(value) {\n          setAttributes({\n            selectedPostType: value\n          });\n        }\n      }), /*#__PURE__*/React.createElement(SelectControl, {\n        label: __('Select Post Status'),\n        value: selectedPostStatus,\n        options: [{\n          label: 'All',\n          value: 'any'\n        }, {\n          label: 'Publish',\n          value: 'publish'\n        }, {\n          label: 'Draft',\n          value: 'draft'\n        }, {\n          label: 'Private',\n          value: 'private'\n        }, {\n          label: 'Future',\n          value: 'future'\n        }],\n        onChange: function onChange(value) {\n          setAttributes({\n            selectedPostStatus: value\n          });\n        }\n      }), /*#__PURE__*/React.createElement(SelectControl, {\n        label: __('Select Post Orderby'),\n        value: selectedOrderBy,\n        options: [{\n          label: 'Title',\n          value: 'title'\n        }, {\n          label: 'Name',\n          value: 'name'\n        }, {\n          label: 'Date',\n          value: 'date'\n        }],\n        onChange: function onChange(value) {\n          setAttributes({\n            selectedOrderBy: value\n          });\n        }\n      }), /*#__PURE__*/React.createElement(SelectControl, {\n        label: __('Select Post Order'),\n        value: selectedOrder,\n        options: [{\n          label: 'Descending',\n          value: 'DESC'\n        }, {\n          label: 'Ascending',\n          value: 'ASC'\n        }],\n        onChange: function onChange(value) {\n          setAttributes({\n            selectedOrder: value\n          });\n        }\n      })), /*#__PURE__*/React.createElement(PanelBody, {\n        title: \"Color Settings\",\n        initialOpen: false\n      }, /*#__PURE__*/React.createElement(\"label\", null, \"Title Color\"), /*#__PURE__*/React.createElement(ColorPalette, {\n        value: titleColor,\n        onChange: function onChange(titleColor) {\n          setAttributes({\n            titleColor: titleColor\n          });\n        }\n      }), /*#__PURE__*/React.createElement(\"label\", null, \"Description Color\"), /*#__PURE__*/React.createElement(ColorPalette, {\n        value: descColor,\n        onChange: function onChange(descColor) {\n          setAttributes({\n            descColor: descColor\n          });\n        }\n      }), /*#__PURE__*/React.createElement(\"label\", null, \"Read More Link Color\"), /*#__PURE__*/React.createElement(ColorPalette, {\n        value: linkColor,\n        onChange: function onChange(linkColor) {\n          setAttributes({\n            linkColor: linkColor\n          });\n        }\n      })), /*#__PURE__*/React.createElement(PanelBody, {\n        title: \"Display Settings\",\n        initialOpen: false\n      }, /*#__PURE__*/React.createElement(ToggleControl, {\n        label: __('Display Feature Image'),\n        checked: displayFeatureImg,\n        onChange: function onChange() {\n          return setAttributes({\n            displayFeatureImg: !displayFeatureImg\n          });\n        }\n      }), /*#__PURE__*/React.createElement(ToggleControl, {\n        label: __('Display Title'),\n        checked: displayTitle,\n        onChange: function onChange() {\n          return setAttributes({\n            displayTitle: !displayTitle\n          });\n        }\n      }), /*#__PURE__*/React.createElement(ToggleControl, {\n        label: __('Display Description'),\n        checked: displayDesc,\n        onChange: function onChange() {\n          return setAttributes({\n            displayDesc: !displayDesc\n          });\n        }\n      }), /*#__PURE__*/React.createElement(ToggleControl, {\n        label: __('Display Read More Link'),\n        checked: displayLink,\n        onChange: function onChange() {\n          return setAttributes({\n            displayLink: !displayLink\n          });\n        }\n      }))), /*#__PURE__*/React.createElement(ServerSideRender, {\n        block: \"abl/blogs-listing-block\",\n        attributes: {\n          selectedPostType: selectedPostType,\n          selectedPostStatus: selectedPostStatus,\n          selectedOrderBy: selectedOrderBy,\n          selectedOrder: selectedOrder,\n          displayFeatureImg: displayFeatureImg,\n          displayTitle: displayTitle,\n          displayDesc: displayDesc,\n          displayLink: displayLink,\n          titleColor: titleColor,\n          descColor: descColor,\n          linkColor: linkColor\n        }\n      }));\n    }\n  }]);\n\n  return blogListingBlock;\n}(Component);\n\nregisterBlockType(\"abl/blogs-listing-block\", {\n  title: \"Blogs Listing Block\",\n  icon: \"format-gallery\",\n  category: \"common\",\n  edit: blogListingBlock,\n  save: function save() {\n    return null;\n  }\n});\n\n//# sourceURL=webpack://gutenberg-block-static-jsx-example/./block.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./block.js"]();
/******/ 	
/******/ })()
;