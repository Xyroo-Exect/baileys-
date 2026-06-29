"use strict";
console.log(String.fromCharCode(10, 91, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 93, 10, 91, 32, 76, 111, 116, 117, 115, 66, 97, 105, 108, 32, 86, 55, 46, 48, 46, 48, 45, 82, 67, 49, 51, 32, 45, 32, 69, 120, 99, 108, 117, 115, 105, 118, 101, 32, 67, 117, 115, 116, 111, 109, 32, 66, 117, 105, 108, 100, 32, 98, 121, 32, 64, 80, 114, 105, 109, 114, 111, 115, 101, 95, 76, 111, 116, 117, 115, 32, 32, 32, 32, 93, 10, 91, 32, 77, 111, 100, 105, 102, 105, 99, 97, 116, 105, 111, 110, 115, 32, 73, 110, 99, 108, 117, 100, 101, 58, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 93, 10, 91, 32, 45, 32, 70, 117, 108, 108, 32, 67, 111, 109, 109, 111, 110, 74, 83, 32, 67, 111, 109, 112, 97, 116, 105, 98, 105, 108, 105, 116, 121, 32, 38, 32, 77, 105, 103, 114, 97, 116, 105, 111, 110, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 93, 10, 91, 32, 45, 32, 65, 100, 118, 97, 110, 99, 101, 100, 32, 73, 110, 116, 101, 114, 97, 99, 116, 105, 118, 101, 32, 66, 117, 116, 116, 111, 110, 115, 32, 83, 117, 112, 112, 111, 114, 116, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 93, 10, 91, 32, 45, 32, 68, 101, 101, 112, 32, 76, 111, 103, 105, 99, 32, 85, 83, 121, 110, 99, 32, 66, 121, 112, 97, 115, 115, 32, 102, 111, 114, 32, 83, 111, 108, 111, 32, 80, 97, 114, 116, 105, 99, 105, 112, 97, 110, 116, 32, 83, 117, 112, 112, 111, 114, 116, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 93, 10, 91, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 93, 10));

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  makeWASocket: true
};
exports.default = void 0;
Object.defineProperty(exports, "makeWASocket", {
  enumerable: true,
  get: function () {
    return _index.default;
  }
});
var _index = _interopRequireDefault(require("./Socket/index.js"));
var _index2 = require("../WAProto/index.js");
Object.keys(_index2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index2[key];
    }
  });
});
var _index3 = require("./Utils/index.js");
Object.keys(_index3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index3[key];
    }
  });
});
var _index4 = require("./Types/index.js");
Object.keys(_index4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index4[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index4[key];
    }
  });
});
var _index5 = require("./Defaults/index.js");
Object.keys(_index5).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index5[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index5[key];
    }
  });
});
var _index6 = require("./WABinary/index.js");
Object.keys(_index6).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index6[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index6[key];
    }
  });
});
var _index7 = require("./WAM/index.js");
Object.keys(_index7).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index7[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index7[key];
    }
  });
});
var _index8 = require("./WAUSync/index.js");
Object.keys(_index8).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _index8[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _index8[key];
    }
  });
});
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = _index.default; //# sourceMappingURL=index.js.map