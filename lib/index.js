"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// import fetch from "node-fetch";
// const fetch = require("node-fetch");
var axios_1 = require("axios");
var Ring = /** @class */ (function () {
    function Ring() {
        this.url_prefix = "https://the-one-api.dev/v2/";
        this.access_token = "";
        this.url_suffix = "";
    }
    /**
     * set access token for rest api calls
     * @param token
     * @returns
     */
    Ring.prototype.setAccessToken = function (token) {
        this.access_token = token;
        return this;
    };
    /**
     * set pagination limit number(default is 10)
     * @param limit
     * @returns
     */
    Ring.prototype.setPaginationLimit = function (limit) {
        this.url_suffix += "?limit=".concat(limit);
        return this;
    };
    /**
     * set page number (default is 10)
     * @param page
     * @returns
     */
    Ring.prototype.setPaginationPage = function (page) {
        this.url_suffix += "?page=".concat(page);
        return this;
    };
    /**
     * set page offset
     * @param offset
     * @returns
     */
    Ring.prototype.setPaginationOffset = function (offset) {
        this.url_suffix += "?offset=".concat(offset);
        return this;
    };
    /**
     * set sorting mod ('asc' or 'desc)
     * @param item
     * @param order
     */
    Ring.prototype.setSorting = function (item, order) {
        this.url_suffix += "?sort=".concat(item, ":").concat(order);
        return this;
    };
    /**
     * utility function for calling rest api
     * @param url
     * @returns
     */
    Ring.prototype.fetchandReturn = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default
                            .get(url, {
                            headers: { Authorization: "Bearer ".concat(this.access_token) },
                        })
                            .then(function (res) {
                            return res.data.docs;
                        })
                            .catch(function (error) {
                            return { error: error };
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    };
    /**
     * List of all "The Lord of the Rings" books
     */
    Ring.prototype.getBooks = function () {
        var url = "".concat(this.url_prefix, "book").concat(this.url_suffix);
        return this.fetchandReturn(url);
    };
    /**
     * Request one specific book
     * @param id
     */
    Ring.prototype.getBook = function (id) {
        var url = "".concat(this.url_prefix, "book/").concat(id).concat(this.url_suffix);
        return this.fetchandReturn(url);
    };
    /**
     * Request all chapters of one specific book
     * @param id
     */
    Ring.prototype.getBookChapter = function (id) {
        var url = "".concat(this.url_prefix, "book/").concat(id, "/chapter").concat(this.url_suffix);
        return this.fetchandReturn(url);
    };
    /**
     * List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies
     */
    Ring.prototype.getMovies = function () {
        var url = "".concat(this.url_prefix, "movie").concat(this.url_suffix);
        return this.fetchandReturn(url);
    };
    /**
     * Request one specific movie
     * @param id
     */
    Ring.prototype.getMovie = function (id) {
        var url = "".concat(this.url_prefix, "movie/").concat(id).concat(this.url_suffix);
        return this.fetchandReturn(url);
    };
    /**
     * Request all movie quotes for one specific movie (only working for the LotR trilogy)
     * @param id
     */
    Ring.prototype.getMovieQuote = function (id) {
        var url = "".concat(this.url_prefix, "movie/").concat(id, "/quote").concat(this.url_suffix);
        return this.fetchandReturn(url);
    };
    /**
     * List of characters including metadata like name, gender, realm, race and more
     */
    Ring.prototype.getCharacters = function () {
        var url = "".concat(this.url_prefix, "character").concat(this.url_suffix);
        return this.fetchandReturn(url);
    };
    /**
     * Request one specific character
     * @param id
     */
    Ring.prototype.getCharacter = function (id) {
        var url = "".concat(this.url_prefix, "character/").concat(id).concat(this.url_suffix);
        return this.fetchandReturn(url);
    };
    /**
     * Request all movie quotes of one specific character
     * @param id
     */
    Ring.prototype.getCharacterQuote = function (id) {
        var url = "".concat(this.url_prefix, "character/").concat(id, "/quote").concat(this.url_suffix);
        return this.fetchandReturn(url);
    };
    /**
     * List of all movie quotes
     */
    Ring.prototype.getQuotes = function () {
        var url = "".concat(this.url_prefix, "quote").concat(this.url_suffix);
        return this.fetchandReturn(url);
    };
    /**
     * Request one specific movie quote
     * @param id
     */
    Ring.prototype.getQuote = function (id) {
        var url = "".concat(this.url_prefix, "quote/").concat(id).concat(this.url_suffix);
        return this.fetchandReturn(url);
    };
    /**
     * List of all book chapters
     */
    Ring.prototype.getChapters = function () {
        var url = "".concat(this.url_prefix, "chapter").concat(this.url_suffix);
        return this.fetchandReturn(url);
    };
    /**
     * Request one specific book chapter
     * @param id
     */
    Ring.prototype.getChapter = function (id) {
        var url = "".concat(this.url_prefix, "chapter/").concat(id).concat(this.url_suffix);
        return this.fetchandReturn(url);
    };
    return Ring;
}());
var RingAPI = function () {
    return new Ring();
};
exports.default = RingAPI;
