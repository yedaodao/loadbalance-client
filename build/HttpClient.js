'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.send = undefined;

/**
 * Send http request.
 *
 * @param options
 * @return {Promise.<*>}
 */
let send = exports.send = (() => {
    var _ref = _asyncToGenerator(function* (options = {}) {

        //compile uri params.
        if (options.url && options.params) {
            options.url = (0, _uriParams2.default)(options.url, options.params);
        }

        //set default configuration.
        options.resolveWithFullResponse = options.resolveWithFullResponse || false;
        options.simple = options.simple || false;
        options.json = options.json || true;

        try {
            let response = yield (0, _requestPromise2.default)(options);

            return response;
        } catch (e) {
            throw e;
        }
    });

    return function send() {
        return _ref.apply(this, arguments);
    };
})();

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _uriParams = require('uri-params');

var _uriParams2 = _interopRequireDefault(_uriParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //common lib


_request2.default.defaults.pool = {
    pool: { maxSockets: Infinity }
};