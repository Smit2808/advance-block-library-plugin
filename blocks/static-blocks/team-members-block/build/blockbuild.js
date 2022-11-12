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

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar _wp$element = wp.element,\n    Component = _wp$element.Component,\n    Fragment = _wp$element.Fragment;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    Button = _wp$components.Button,\n    RangeControl = _wp$components.RangeControl,\n    Tooltip = _wp$components.Tooltip;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    InspectorControls = _wp$editor.InspectorControls,\n    ColorPalette = _wp$editor.ColorPalette,\n    MediaUpload = _wp$editor.MediaUpload,\n    MediaUploadCheck = _wp$editor.MediaUploadCheck;\n\nvar teamPresentersSectionEdit = /*#__PURE__*/function (_Component) {\n  _inherits(teamPresentersSectionEdit, _Component);\n\n  var _super = _createSuper(teamPresentersSectionEdit);\n\n  function teamPresentersSectionEdit() {\n    _classCallCheck(this, teamPresentersSectionEdit);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(teamPresentersSectionEdit, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var DataArray = this.props.attributes.DataArray;\n\n      if (0 === DataArray.length) {\n        this.initList();\n      }\n    }\n  }, {\n    key: \"initList\",\n    value: function initList() {\n      var DataArray = this.props.attributes.DataArray;\n      var setAttributes = this.props.setAttributes;\n      setAttributes({\n        DataArray: [].concat(_toConsumableArray(DataArray), [{\n          index: DataArray.length,\n          media: \"\",\n          mediaId: \"\",\n          mediaAlt: \"\",\n          title: \"\",\n          description: \"\",\n          secTitleColor: \"#FFFFFF\",\n          secDescColor: \"#FFFFFF\"\n        }])\n      });\n    }\n  }, {\n    key: \"moveItem\",\n    value: function moveItem(oldIndex, newIndex) {\n      var _this$props = this.props,\n          attributes = _this$props.attributes,\n          setAttributes = _this$props.setAttributes;\n      var DataArray = attributes.DataArray;\n\n      var arrayCopy = _toConsumableArray(DataArray);\n\n      arrayCopy[oldIndex] = DataArray[newIndex];\n      arrayCopy[newIndex] = DataArray[oldIndex];\n      setAttributes({\n        DataArray: arrayCopy\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var _this$props2 = this.props,\n          attributes = _this$props2.attributes,\n          setAttributes = _this$props2.setAttributes;\n      var DataArray = attributes.DataArray,\n          backgroundImage = attributes.backgroundImage,\n          colWidth = attributes.colWidth;\n      var colors = [{\n        name: \"Steel Blue\",\n        color: \"#337ab7\"\n      }, {\n        name: \"Midnight Green\",\n        color: \"#00465b\"\n      }, {\n        name: \"White\",\n        color: \"#ffffff\"\n      }, {\n        name: \"Black\",\n        color: \"#000000\"\n      }, {\n        name: \"Pear\",\n        color: \"#bed82f\"\n      }, {\n        name: \"Android Green\",\n        color: \"#b6d232\"\n      }, {\n        name: \"Cultured\",\n        color: \"#f7f7f7\"\n      }];\n\n      var getImage = function getImage(openEvent) {\n        if (backgroundImage) {\n          return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(\"img\", {\n            src: backgroundImage,\n            className: \"bgimg-editor\"\n          }), /*#__PURE__*/React.createElement(Button, {\n            onClick: function onClick() {\n              setAttributes({\n                backgroundImage: \"\"\n              });\n            },\n            className: \"button button-large\"\n          }, \"Remove Image\"));\n        } else {\n          return /*#__PURE__*/React.createElement(\"div\", null, /*#__PURE__*/React.createElement(Button, {\n            onClick: openEvent,\n            className: \"button button-large\"\n          }, \"Upload image\"));\n        }\n      };\n\n      var getImageButton = function getImageButton(openEvent, index) {\n        if (DataArray[index].media) {\n          return /*#__PURE__*/React.createElement(\"img\", {\n            src: DataArray[index].media,\n            alt: DataArray[index].alt\n          });\n        } else {\n          return /*#__PURE__*/React.createElement(Button, {\n            onClick: openEvent,\n            className: \"button button-large\"\n          }, \"Upload Image\");\n        }\n      };\n\n      var DataArrayList = DataArray.map(function (product, index) {\n        return /*#__PURE__*/React.createElement(\"div\", {\n          className: \"team-presenter-item\",\n          key: index,\n          style: {\n            width: colWidth + \"%\"\n          }\n        }, DataArray.length > 0 && /*#__PURE__*/React.createElement(\"div\", {\n          className: \"team-presenter-item__action-wrap\"\n        }, /*#__PURE__*/React.createElement(\"div\", {\n          className: \"team-presenter-item__move\"\n        }, 0 < index && /*#__PURE__*/React.createElement(Tooltip, {\n          text: __(\"Move to Left\", \"adient\")\n        }, /*#__PURE__*/React.createElement(\"i\", {\n          className: \"fa fa-arrow-left move-left\",\n          \"aria-hidden\": \"true\",\n          onClick: function onClick() {\n            return _this.moveItem(index, index - 1);\n          }\n        })), index + 1 < DataArray.length && /*#__PURE__*/React.createElement(Tooltip, {\n          text: __(\"Move to Right\", \"adient\")\n        }, /*#__PURE__*/React.createElement(\"i\", {\n          className: \"fa fa-arrow-right move-right\",\n          \"aria-hidden\": \"true\",\n          onClick: function onClick() {\n            return _this.moveItem(index, index + 1);\n          }\n        }))), /*#__PURE__*/React.createElement(Tooltip, {\n          text: \"Remove item\"\n        }, /*#__PURE__*/React.createElement(\"i\", {\n          className: \"fa fa-times remove-item\",\n          onClick: function onClick() {\n            var retVal = confirm(\"Are you sure you want to remove this item?\");\n\n            if (retVal == false) {\n              return false;\n            }\n\n            var qewQusote = DataArray.filter(function (item) {\n              return item.index != product.index;\n            }).map(function (t) {\n              if (t.index > product.index) {\n                t.index -= 1;\n              }\n\n              return t;\n            });\n            setAttributes({\n              DataArray: qewQusote\n            });\n          }\n        }))), /*#__PURE__*/React.createElement(\"div\", {\n          className: \"team-presenter-item__imgcontainer\"\n        }, /*#__PURE__*/React.createElement(\"div\", {\n          className: \"team-presenter-item__img\"\n        }, product.mediaId && /*#__PURE__*/React.createElement(\"div\", {\n          className: \"team-presenter-item__action-wrap team-presenter-item__action-wrap--image-action-wrap\"\n        }, /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(MediaUpload, {\n          onSelect: function onSelect(media) {\n            var copyData = _toConsumableArray(DataArray);\n\n            copyData[index].media = media.url;\n            copyData[index].mediaId = media.id;\n            copyData[index].mediaAlt = media.alt;\n            setAttributes({\n              DataArray: copyData\n            });\n          },\n          type: \"image\",\n          value: product.mediaId,\n          render: function render(_ref) {\n            var open = _ref.open;\n            return /*#__PURE__*/React.createElement(Tooltip, {\n              text: \"Edit image\"\n            }, /*#__PURE__*/React.createElement(\"i\", {\n              onClick: open,\n              className: \"fa fa-pencil edit-image\"\n            }));\n          }\n        })), /*#__PURE__*/React.createElement(Tooltip, {\n          text: __(\"Remove Image\", \"adient\")\n        }, /*#__PURE__*/React.createElement(\"i\", {\n          className: \"fa fa-times remove-item\",\n          onClick: function onClick() {\n            var copyData = _toConsumableArray(DataArray);\n\n            copyData[index].media = '';\n            copyData[index].mediaId = '';\n            copyData[index].mediaAlt = '';\n            setAttributes({\n              DataArray: copyData\n            });\n          }\n        }))), /*#__PURE__*/React.createElement(MediaUpload, {\n          onSelect: function onSelect(media) {\n            var copyData = _toConsumableArray(DataArray);\n\n            copyData[index].media = media.url;\n            copyData[index].mediaId = media.id;\n            copyData[index].mediaAlt = media.alt;\n            setAttributes({\n              DataArray: copyData\n            });\n          },\n          type: \"image\",\n          value: product.mediaId,\n          render: function render(_ref2) {\n            var open = _ref2.open;\n            return getImageButton(open, index);\n          }\n        }))), /*#__PURE__*/React.createElement(\"div\", {\n          className: \"team-presenter-item__info\"\n        }, /*#__PURE__*/React.createElement(RichText, {\n          tagName: \"h3\",\n          placeholder: \"Enter name\",\n          keepPlaceholderOnFocus: \"true\",\n          value: product.title,\n          className: \"team-presenter-item-name\",\n          onChange: function onChange(title) {\n            var newObject = Object.assign({}, product, {\n              title: title\n            });\n            setAttributes({\n              DataArray: [].concat(_toConsumableArray(DataArray.filter(function (item) {\n                return item.index != product.index;\n              })), [newObject])\n            });\n          },\n          style: {\n            color: product.secTitleColor\n          }\n        }), /*#__PURE__*/React.createElement(RichText, {\n          tagName: \"p\",\n          className: \"team-presenter-item-description\",\n          keepPlaceholderOnFocus: \"true\",\n          placeholder: \"Enter description\",\n          value: product.description,\n          onChange: function onChange(description) {\n            var newObject = Object.assign({}, product, {\n              description: description\n            });\n            setAttributes({\n              DataArray: [].concat(_toConsumableArray(DataArray.filter(function (item) {\n                return item.index != product.index;\n              })), [newObject])\n            });\n          },\n          style: {\n            color: product.secDescColor\n          }\n        })));\n      });\n      return [/*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(InspectorControls, null, /*#__PURE__*/React.createElement(PanelBody, {\n        title: \"Background Image Settings\",\n        initialOpen: true\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"settings-row\"\n      }, /*#__PURE__*/React.createElement(\"label\", null, \"Background Item\"), /*#__PURE__*/React.createElement(MediaUpload, {\n        onSelect: function onSelect(media) {\n          setAttributes({\n            backgroundImage: media.url\n          });\n        },\n        type: \"image\",\n        value: backgroundImage,\n        render: function render(_ref3) {\n          var open = _ref3.open;\n          return getImage(open);\n        }\n      }))), /*#__PURE__*/React.createElement(PanelBody, {\n        title: \"Item column width settings\",\n        initialOpen: false\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"setting-row\"\n      }, /*#__PURE__*/React.createElement(\"label\", null, \"Column Width\"), /*#__PURE__*/React.createElement(RangeControl, {\n        label: \"Width (%)\",\n        value: colWidth,\n        onChange: function onChange(value) {\n          return setAttributes({\n            colWidth: value\n          });\n        },\n        min: 0,\n        max: 100\n      }))), /*#__PURE__*/React.createElement(PanelBody, {\n        title: \"Text color settings\",\n        initialOpen: false\n      }, DataArray.map(function (data, index) {\n        return /*#__PURE__*/React.createElement(PanelBody, {\n          title: \"item \".concat(index + 1),\n          initialOpen: false\n        }, /*#__PURE__*/React.createElement(\"div\", {\n          className: \"setting-row\"\n        }, /*#__PURE__*/React.createElement(\"label\", null, \"Name Color\"), /*#__PURE__*/React.createElement(\"span\", {\n          className: \"component-color-indicator\",\n          style: {\n            background: data.secTitleColor\n          }\n        }), /*#__PURE__*/React.createElement(ColorPalette, {\n          value: data.secTitleColor,\n          onChange: function onChange(value) {\n            var arrayCopy = _toConsumableArray(DataArray);\n\n            arrayCopy[index].secTitleColor = value;\n            setAttributes({\n              DataArray: arrayCopy\n            });\n          },\n          colors: colors\n        })), /*#__PURE__*/React.createElement(\"div\", {\n          className: \"setting-row\"\n        }, /*#__PURE__*/React.createElement(\"label\", null, \"Description Color\"), /*#__PURE__*/React.createElement(\"span\", {\n          className: \"component-color-indicator\",\n          style: {\n            background: data.secDescColor\n          }\n        }), /*#__PURE__*/React.createElement(ColorPalette, {\n          value: data.secDescColor,\n          onChange: function onChange(value) {\n            var arrayCopy = _toConsumableArray(DataArray);\n\n            arrayCopy[index].secDescColor = value;\n            setAttributes({\n              DataArray: arrayCopy\n            });\n          },\n          colors: colors\n        })));\n      }))), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"team-presenters-section\",\n        style: {\n          backgroundImage: \"url(\".concat(backgroundImage, \")\")\n        }\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"ad-container-fluid vertical-align\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"row\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"col-12 fig-caption\"\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"team-presenters-section__wrapper\"\n      }, DataArrayList, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"team-presenters-section__item-add\"\n      }, /*#__PURE__*/React.createElement(\"i\", {\n        className: \"fa fa-plus add-new-item\",\n        onClick: function onClick() {\n          setAttributes({\n            DataArray: [].concat(_toConsumableArray(DataArray), [{\n              index: DataArray.length,\n              media: \"\",\n              mediaId: \"\",\n              mediaAlt: \"\",\n              title: \"\",\n              description: \"\",\n              secTitleColor: \"#FFFFFF\",\n              secDescColor: \"#FFFFFF\"\n            }])\n          });\n        }\n      }))))))))];\n    }\n  }]);\n\n  return teamPresentersSectionEdit;\n}(Component);\n\nregisterBlockType(\"abl/team-members-block\", {\n  title: \"Our Team Block\",\n  description: \"Team Members Block include title, sub-title, background image and team member profile image\",\n  icon: \"groups\",\n  category: \"common\",\n  attributes: {\n    backgroundImage: {\n      type: \"string\",\n      \"default\": null\n    },\n    title: {\n      type: \"string\",\n      \"default\": \"\"\n    },\n    DataArray: {\n      type: \"array\",\n      \"default\": []\n    },\n    colWidth: {\n      type: \"number\",\n      \"default\": 45\n    },\n    maintitleColor: {\n      type: \"string\",\n      \"default\": \"#fff\"\n    }\n  },\n  edit: teamPresentersSectionEdit,\n  save: function save(props) {\n    var attributes = props.attributes,\n        className = props.className;\n    var backgroundImage = attributes.backgroundImage,\n        colWidth = attributes.colWidth,\n        DataArray = attributes.DataArray,\n        maintitleColor = attributes.maintitleColor;\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"team-presenters-section\",\n      style: {\n        backgroundImage: \"url(\".concat(backgroundImage, \")\")\n      }\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"ad-container-fluid vertical-align\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"row row-eq-height\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"col-12 fig-caption\"\n    }, /*#__PURE__*/React.createElement(\"div\", {\n      className: \"team-presenters-section__wrapper\"\n    }, DataArray.map(function (product, index) {\n      return /*#__PURE__*/React.createElement(\"div\", {\n        className: \"team-presenter-item\",\n        key: index,\n        style: {\n          width: colWidth + \"%\"\n        }\n      }, /*#__PURE__*/React.createElement(\"div\", {\n        className: \"team-presenter-item__imgcontainer\"\n      }, product.media && /*#__PURE__*/React.createElement(\"div\", {\n        className: \"team-presenter-item__img\"\n      }, /*#__PURE__*/React.createElement(\"img\", {\n        src: product.media,\n        alt: product.mediaAlt\n      }))), /*#__PURE__*/React.createElement(\"div\", {\n        className: \"team-presenter-item__info\"\n      }, product.title && /*#__PURE__*/React.createElement(RichText.Content, {\n        tagName: \"h3\",\n        value: product.title,\n        className: \"team-presenter-item-name\",\n        style: {\n          color: product.secTitleColor\n        }\n      }), product.description && /*#__PURE__*/React.createElement(RichText.Content, {\n        tagName: \"p\",\n        value: product.description,\n        className: \"team-presenter-item-description\",\n        style: {\n          color: product.secDescColor\n        }\n      })));\n    }))))));\n  }\n});\n\n//# sourceURL=webpack://gutenberg-block-static-jsx-example/./block.js?");

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