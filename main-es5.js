(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <app-sidebar></app-sidebar>\r\n    <!-- Page Content  -->\r\n    <div id=\"content\" (swiperight)=\"sharedsvc.sliderOpen()\" (swipeleft)=\"location.back()\">\r\n        <app-header></app-header>\r\n        <router-outlet></router-outlet>        \r\n    </div>\r\n</div>\r\n\r\n<div class=\"overlay\" [slider]=\"sliderFlag\" (click)=\"sharedsvc.sliderToggle()\" (swipeleft)=\"sharedsvc.sliderClose()\"></div>\r\n<app-spinner></app-spinner>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <div class=\"container-fluid\">\r\n\r\n        <button type=\"button\" id=\"sidebarCollapse\" (click)=\"sharedsvc.sliderToggle()\" class=\"btn btn-info\">\r\n            <i class=\"fas fa-align-left\"></i>\r\n            <span>{{title}}</span>\r\n        </button>\r\n        <!-- <div class=\"col-xs-1 text-center\">\r\n            <h2>rst</h2>\r\n        </div> -->\r\n        <button class=\"btn btn-dark d-inline-block d-lg-none ml-auto\" type=\"button\" (click)=\"showFlag=!showFlag\">\r\n            <i class=\"fas fa-align-justify\"></i>\r\n        </button>\r\n\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [show]=\"showFlag\">\r\n            <ul class=\"nav navbar-nav ml-auto\">\r\n                <li *ngIf=\"!IsLogin\" class=\"nav-item active\">\r\n                    <a class=\"nav-link\" (click)=\"login()\" href=\"javascript:void(0)\">Login</a>\r\n                </li>\r\n                <li *ngIf=\"IsLogin\" class=\"nav-item active\">\r\n                    <a class=\"nav-link\" (click)=\"logOut()\" href=\"javascript:void(0)\">LogOut</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"text-center\">\r\n    <h1>WELCOME {{userName}}</h1>\r\n    <p>\r\n      Swipe right to slider open, swipe left to navigate back\r\n    </p>\r\n    <a (click)=\"addTopicType()\" href=\"javascript:void(0);\">Create Topic Type</a> |\r\n    <a (click)=\"logOut()\" href=\"javascript:void(0);\">signOut</a>\r\n  </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <div class=\"text-center\">\r\n        <h1>My Topics</h1>\r\n        <p>\r\n            feel free to add topis here, access simple way and user friendly site\r\n        </p>        \r\n        <a (click)=\"auth.googleLogin()()\" href=\"javascript:void(0);\">Login</a>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-mdl/popup-mdl.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-mdl/popup-mdl.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\r\n<div class=\"backdrop\" [ngStyle]=\"{'display':popDisplay}\"></div>\r\n<div class=\"modal\" tabindex=\"-1\" role=\"dialog\" [ngStyle]=\"{'display':'block'}\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{formEntity.title}}</h4>\r\n                <button type=\"button\" class=\"close\" (click)=\"onPopupCloseButton()\"><span aria-hidden=\"true\">&times;</span></button>\r\n            </div>\r\n            <div *ngIf=\"formEntity.formControls\">\r\n                <form class=\"form-horizontal\" [formGroup]='cform' (ngSubmit)=\"onFormSubmit()\">\r\n                    <div class=\"modal-body\">\r\n                        <div *ngFor=\"let control of formEntity.formControls\">\r\n                        <div [ngSwitch]=\"control.inputType\">\r\n                            <!--input text control -->\r\n                            <div *ngSwitchCase=0 class=\"form-group\">\r\n                                <label [attr.for]=\"control.name\" class=\"col-xs-2 small control-label\">{{control.lableName}} :</label>\r\n                                <div class=\"col-xs-10\">\r\n                                    <input type=\"text\" [formControlName]=\"control.name\" class=\"form-control\"  placeholder=\"Enter {{control.lableName}} here\">\r\n                                </div>\r\n                            </div>\r\n                            <!--input number control -->\r\n                            <div *ngSwitchCase=1 class=\"form-group\">\r\n                                <label [attr.for]=\"control.name\" class=\"col-xs-2 control-label\">{{control.lableName}} :</label>\r\n                                <div class=\"col-xs-10\">\r\n                                    <input type=\"number\" [formControlName]=\"control.name\" class=\"form-control\" placeholder=\"Enter {{control.lableName}} here\">\r\n                                </div>\r\n                            </div>\r\n                            <!--dropdown control -->\r\n                            <div *ngSwitchCase=2 class=\"form-group\">\r\n                                <label [attr.for]=\"control.name\" class=\"col-xs-2 control-label\">{{control.lableName}} :</label>\r\n                                <div class=\"col-xs-10\">\r\n                                    <select class=\"form-control\"  [formControlName]=\"control.name\">\r\n                                    <option *ngFor=\"let option of control.options\" [ngValue]=\"option\" >{{option}}</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <!--textarea control -->\r\n                            <div *ngSwitchCase=4 class=\"form-group\">\r\n                                <label [attr.for]=\"control.name\" class=\"col-xs-2 control-label\">{{control.lableName}} :</label>\r\n                                <div class=\"col-xs-10\">\r\n                                    <textarea class=\"form-control\" [formControlName]=\"control.name\" [rows]=\"control.rows||4\" placeholder=\"Enter {{control.lableName}} here\" ></textarea>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!--END input type switch  -->\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" *ngFor=\"let btn of formEntity.formActions\" class=\"btn btn-default\" (click)=\"onExternalBtnClick(btn.name)\">{{btn.displayName}}</button>\r\n                        <button type=\"submit\" *ngIf=\"formEntity.isSubmitBtn\"  [disabled]=\"!cform.valid\" class=\"btn btn-default\">Submit</button>\r\n                        <button type=\"button\" class=\"btn btn-default\" (click)=\"onPopupCloseButton()\">Close</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidebar  -->\r\n<nav (swipeleft)=\"sharedsvc.sliderClose()\" id=\"sidebar\" [slider]=\"sliderFlag\"> \r\n    <div (click)=\"sharedsvc.sliderToggle()\" id=\"dismiss\">\r\n        <i class=\"fas fa-arrow-left\"></i>\r\n    </div>\r\n\r\n    <div class=\"sidebar-header\">\r\n        <h3>Hi {{titile|descMin:7}}</h3>\r\n    </div>\r\n\r\n    <ul class=\"list-unstyled components\">\r\n        <!-- <p>Dummy Heading</p>         -->\r\n        <li>\r\n            <a (click)=\"addTopicType()\" href=\"javascript:void(0)\">Create Topic</a>\r\n        </li>\r\n        <li *ngFor=\"let topicType of topicTypes\" [ngClass]=\"{'active': topicType.Type===currentTT}\">\r\n            <a (click)=\"navigateTo(topicType)\" href=\"javascript:void(0)\">{{topicType.Type}}</a>\r\n        </li>        \r\n    </ul>\r\n</nav>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/spinner/spinner.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spinner/spinner.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader\" *ngIf=\"showLoader\">\n    <div class=\"lds-roller\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/topic/topic.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/topic/topic.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<a (click)=\"AddTopic()\" href=\"javascript:void(0);\">Add new topic</a>\r\n<br /><br />\r\n\r\n<p *ngIf=\"topics.length==0\">Create your new topic here..</p>\r\n<div>\r\n  <div *ngFor=\"let topic of topics\">\r\n\r\n    <h2>{{topic.Header}} :</h2>\r\n    <p [innerHTML]=\"topic.Description|str2obj\"></p>\r\n    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> -->\r\n    <div class=\"line\"></div>\r\n  </div>\r\n</div>\r\n\r\n<popup *ngIf=\"popupData.popupDisplay==='block'\" [dataContext]=\"popupData\" (popupDisplay)=\"popupDisplayEvent($event)\">\r\n</popup>\r\n<!--         \r\n        <a *ngFor=\"let topic of topics\" href=\"javascript:void(0);\" class=\"list-group-item list-group-item-action flex-column align-items-start\">\r\n          <div class=\"d-flex w-100 justify-content-between\" (click)=\"topic.ShowContent=!topic.ShowContent; openAll=false;\">\r\n            <h5 class=\"mb-1\">{{topic.Header}} :</h5>\r\n            <small class=\"text-muted\">\r\n              <a (click)=\"EditTopic(topic)\" href=\"javascript:void(0);\">Edit</a> |\r\n              <a (click)=\"DeleteTopic(topic)\" href=\"javascript:void(0);\">Delete</a> |\r\n              {{topic.ModifiedDate}}</small>\r\n          </div>\r\n          <p class=\"mb-1 collapse\" [ngClass]=\"{'show ':openAll || topic.ShowContent}\" [innerHTML]=\"topic.Description|str2obj\"></p>\r\n          <small *ngIf=\"!topic.ShowContent\" [innerHTML]=\"topic.Description|descMin:40\" class=\"text-muted\"></small>\r\n        </a> -->");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".textbox {\r\n    border: 1px solid #c4c4c4;\r\n    height: 25px;\r\n    width: 275px;\r\n    font-size: 13px;\r\n    padding: 4px 4px 4px 4px;\r\n    border-radius: 4px;\r\n    -moz-border-radius: 4px;\r\n    -webkit-border-radius: 4px;\r\n    box-shadow: 0px 0px 8px #d9d9d9;\r\n    -moz-box-shadow: 0px 0px 8px #d9d9d9;\r\n    -webkit-box-shadow: 0px 0px 8px #d9d9d9;\r\n}\r\n.textbox:focus {\r\n    outline: none;\r\n    border: 1px solid #7bc1f7;\r\n    box-shadow: 0px 0px 8px #7bc1f7;\r\n    -moz-box-shadow: 0px 0px 8px #7bc1f7;\r\n    -webkit-box-shadow: 0px 0px 8px #7bc1f7;\r\n}\r\ninputs:-webkit-input-placeholder {\r\n    color: #b5b5b5;\r\n}\r\ninputs-moz-placeholder {\r\n    color: #b5b5b5;\r\n}\r\n.inputs {\r\n    background: #f5f5f5;\r\n    font-size: 22px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    padding: 13px 10px;\r\n    width: 270px;\r\n    margin-bottom: 20px;\r\n    box-shadow: inset 0 2px 3px rgba( 0, 0, 0, 0.1 );\r\n    clear: both;\r\n}\r\n.inputs:focus {\r\n    background: #fff;\r\n    box-shadow: 0 0 0 3px #7bc1f7, inset 0 2px 3px rgba( 0, 0, 0, 0.2 ), 0px 5px 5px rgba( 0, 0, 0, 0.15 );\r\n    outline: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2Ysd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQixvQ0FBb0M7SUFDcEMsdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixvQ0FBb0M7SUFDcEMsdUNBQXVDO0FBQzNDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUdmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0RBQWdEO0lBQ2hELFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNHQUFzRztJQUN0RyxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dGJveCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI3NXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZzogNHB4IDRweCA0cHggNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4ICNkOWQ5ZDk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggOHB4ICNkOWQ5ZDk7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggOHB4ICNkOWQ5ZDk7XHJcbn1cclxuLnRleHRib3g6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3YmMxZjc7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCAjN2JjMWY3O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAjN2JjMWY3O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDhweCAjN2JjMWY3O1xyXG59XHJcbmlucHV0czotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjYjViNWI1O1xyXG59XHJcbmlucHV0cy1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNiNWI1YjU7XHJcbn1cclxuLmlucHV0cyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDEzcHggMTBweDtcclxuICAgIHdpZHRoOiAyNzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDJweCAzcHggcmdiYSggMCwgMCwgMCwgMC4xICk7XHJcbiAgICBjbGVhcjogYm90aDtcclxufVxyXG4uaW5wdXRzOmZvY3VzIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggIzdiYzFmNywgaW5zZXQgMCAycHggM3B4IHJnYmEoIDAsIDAsIDAsIDAuMiApLCAwcHggNXB4IDVweCByZ2JhKCAwLCAwLCAwLCAwLjE1ICk7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_fire_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/fire-auth.service */ "./src/app/service/fire-auth.service.ts");
            /* harmony import */ var _service_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/shared.service */ "./src/app/service/shared.service.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(auth, sharedsvc, location) {
                    this.auth = auth;
                    this.sharedsvc = sharedsvc;
                    this.location = location;
                    this.sliderFlag = false;
                }
                // tslint:disable-next-line:use-lifecycle-interface
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.auth.initialLoginCheck();
                    this.sharedsvc.slider.subscribe(function (p) { _this.sliderFlag = p; });
                    this.auth.loginStatus.subscribe(function (flag) {
                        if (!flag) {
                            // this.sliderFlag = false;
                        }
                    });
                };
                AppComponent.prototype.checkIsLogin = function () {
                    return this.auth.isAuthenticated();
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _service_fire_auth_service__WEBPACK_IMPORTED_MODULE_2__["FireAuthService"] },
                { type: _service_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _pipes_str2obj_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/str2obj.pipe */ "./src/app/pipes/str2obj.pipe.ts");
            /* harmony import */ var _pipes_desc_min_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pipes/desc-min.pipe */ "./src/app/pipes/desc-min.pipe.ts");
            /* harmony import */ var _components_topic_topic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/topic/topic.component */ "./src/app/components/topic/topic.component.ts");
            /* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/app-routing.module */ "./src/app/routes/app-routing.module.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _components_popup_mdl_popup_mdl_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/popup-mdl/popup-mdl.component */ "./src/app/components/popup-mdl/popup-mdl.component.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _components_error_connection_error_connection_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/error-connection/error-connection.component */ "./src/app/components/error-connection/error-connection.component.ts");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
            /* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
            /* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
            /* harmony import */ var _directive_slider_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./directive/slider.directive */ "./src/app/directive/slider.directive.ts");
            /* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/components/spinner/spinner.component.ts");
            /* harmony import */ var _directive_show_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directive/show.directive */ "./src/app/directive/show.directive.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                        _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__["PageNotFoundComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                        _pipes_str2obj_pipe__WEBPACK_IMPORTED_MODULE_7__["Str2objPipe"],
                        _pipes_desc_min_pipe__WEBPACK_IMPORTED_MODULE_8__["DescMinPipe"],
                        _components_topic_topic_component__WEBPACK_IMPORTED_MODULE_9__["TopicComponent"],
                        _components_popup_mdl_popup_mdl_component__WEBPACK_IMPORTED_MODULE_14__["PopupModelComponent"],
                        _components_error_connection_error_connection_component__WEBPACK_IMPORTED_MODULE_16__["ErrorConnectionComponent"],
                        _components_login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_23__["SidebarComponent"],
                        _components_header_header_component__WEBPACK_IMPORTED_MODULE_24__["HeaderComponent"],
                        _directive_slider_directive__WEBPACK_IMPORTED_MODULE_25__["SliderDirective"],
                        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_26__["SpinnerComponent"],
                        _directive_show_directive__WEBPACK_IMPORTED_MODULE_27__["ShowDirective"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                        _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                        _angular_fire__WEBPACK_IMPORTED_MODULE_17__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebase),
                        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
                        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_20__["AngularFirestoreModule"],
                        _angular_fire_database__WEBPACK_IMPORTED_MODULE_21__["AngularFireDatabaseModule"],
                        ngx_toastr__WEBPACK_IMPORTED_MODULE_15__["ToastrModule"].forRoot({
                            timeOut: 1100,
                            positionClass: 'toast-top-right',
                            preventDuplicates: true,
                        })
                    ],
                    providers: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/error-connection/error-connection.component.ts": 
        /*!***************************************************************************!*\
          !*** ./src/app/components/error-connection/error-connection.component.ts ***!
          \***************************************************************************/
        /*! exports provided: ErrorConnectionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorConnectionComponent", function () { return ErrorConnectionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ErrorConnectionComponent = /** @class */ (function () {
                function ErrorConnectionComponent() {
                }
                ErrorConnectionComponent.prototype.ngOnInit = function () {
                    this.errorInfo = 'Error with api connections.!';
                };
                return ErrorConnectionComponent;
            }());
            ErrorConnectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'error-connection',
                    template: "\n    <p>\n      {{errorInfo|lowercase}}\n    </p>\n  "
                })
            ], ErrorConnectionComponent);
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/header/header.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/header/header.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/header/header.component.ts ***!
          \*******************************************************/
        /*! exports provided: HeaderComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () { return HeaderComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_fire_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/fire-auth.service */ "./src/app/service/fire-auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/shared.service */ "./src/app/service/shared.service.ts");
            var HeaderComponent = /** @class */ (function () {
                function HeaderComponent(route, router, auth, sharedsvc) {
                    this.route = route;
                    this.router = router;
                    this.auth = auth;
                    this.sharedsvc = sharedsvc;
                    this.IsLogin = false;
                    this.title = 'My Topics';
                    this.showFlag = false;
                }
                HeaderComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sharedsvc.titleText.subscribe(function (p) { return _this.title = p; });
                    this.auth.loginStatus.subscribe(function (p) {
                        _this.IsLogin = p;
                        if (!_this.IsLogin) {
                            _this.title = "My Topics";
                        }
                    });
                };
                HeaderComponent.prototype.login = function () {
                    this.auth.googleLogin();
                };
                HeaderComponent.prototype.logOut = function () {
                    this.auth.signOut();
                };
                return HeaderComponent;
            }());
            HeaderComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: src_app_service_fire_auth_service__WEBPACK_IMPORTED_MODULE_2__["FireAuthService"] },
                { type: src_app_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
            ]; };
            HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-header',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")).default]
                })
            ], HeaderComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _models_entities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/entities */ "./src/app/models/entities.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_service_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/firebase.service */ "./src/app/service/firebase.service.ts");
            /* harmony import */ var src_app_service_fire_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/fire-auth.service */ "./src/app/service/fire-auth.service.ts");
            /* harmony import */ var src_app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/shared.service */ "./src/app/service/shared.service.ts");
            var HomeComponent = /** @class */ (function () {
                // tslint:disable-next-line:max-line-length
                function HomeComponent(firebaseService, route, router, auth, sharedsvc) {
                    this.firebaseService = firebaseService;
                    this.route = route;
                    this.router = router;
                    this.auth = auth;
                    this.sharedsvc = sharedsvc;
                    this.topicTypes = [];
                    this.uid = 0;
                    this.userName = 'Guest';
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.popupData = { popupDisplay: 'none', formEntity: null };
                    this.uid = this.auth.getCurrentUserId();
                    if (this.uid != null) {
                        this.loadTopicTypes();
                        this.userName = this.auth.currentUser.displayName;
                    }
                };
                HomeComponent.prototype.loadTopicTypes = function () {
                    var _this = this;
                    this.firebaseService.getTopicTypes(this.uid).subscribe(function (data) {
                        _this.topicTypes = [];
                        if (data != null && data.length > 0) {
                            data.forEach(function (item) {
                                // tslint:disable-next-line:prefer-const
                                var a = item.payload.toJSON();
                                // tslint:disable-next-line:no-string-literal
                                a['$key'] = item.key;
                                _this.topicTypes.push(a);
                            });
                            _this.topicTypes = _this.topicTypes.slice();
                        }
                    }, function (er) {
                        console.log('topictypes error', er);
                    });
                };
                HomeComponent.prototype.logIn = function () {
                    this.auth.googleLogin();
                };
                HomeComponent.prototype.logOut = function () {
                    this.auth.signOut();
                };
                HomeComponent.prototype.navigate = function (topicType) {
                    this.router.navigate(['topic/', topicType.Type]);
                };
                HomeComponent.prototype.addTopicType = function () {
                    var newTopicType = prompt('Enter new cource name:', '');
                    if (newTopicType === null || newTopicType === '') {
                        return;
                    }
                    var topicTypeObj = new _models_entities__WEBPACK_IMPORTED_MODULE_2__["TopicType"]();
                    topicTypeObj.Type = newTopicType;
                    topicTypeObj.UId = this.uid;
                    this.firebaseService.addTopicType(topicTypeObj);
                    this.navigate(topicTypeObj);
                };
                HomeComponent.prototype.addTopicTypePopup = function () {
                    var _this = this;
                    var topicType = new _models_entities__WEBPACK_IMPORTED_MODULE_2__["TopicType"]();
                    topicType.Type = '';
                    topicType.UId = this.uid;
                    this.popupData.formEntity = this.getFormEntityForTopicType(topicType, 'Add');
                    this.popupData.formEntity.submitCallBack = function (formEntity) {
                        topicType.Type = formEntity.formControls[0].val;
                        console.log('submit add topic type event');
                        _this.firebaseService.addTopicType(topicType);
                    };
                    this.popupData.popupDisplay = 'block';
                };
                HomeComponent.prototype.getFormEntityForTopicType = function (topicType, action) {
                    var formEntity = new _models_entities__WEBPACK_IMPORTED_MODULE_2__["FormEntity"]();
                    formEntity.title = action + ' topic type';
                    formEntity.isSubmitBtn = true;
                    formEntity.formControls = this.getFormControlsForTopicType(topicType);
                    return formEntity;
                };
                HomeComponent.prototype.getFormControlsForTopicType = function (data) {
                    return [
                        { name: 'Type', lableName: 'Type', val: data.Type, inputType: _models_entities__WEBPACK_IMPORTED_MODULE_2__["InputTypesEnum"].text, order: 1, required: true }
                    ];
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: src_app_service_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FireBaseService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: src_app_service_fire_auth_service__WEBPACK_IMPORTED_MODULE_5__["FireAuthService"] },
                { type: src_app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line:component-selector
                    selector: 'home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/login/login.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/login/login.component.ts ***!
          \*****************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_fire_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/fire-auth.service */ "./src/app/service/fire-auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spinner/spinner.service */ "./src/app/components/spinner/spinner.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(auth, route, router, loader) {
                    this.auth = auth;
                    this.route = route;
                    this.router = router;
                    this.loader = loader;
                    this.IsLogin = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.auth.loginStatus.subscribe(function (p) {
                        _this.IsLogin = p;
                    });
                    if (this.auth.isAuthenticated()) {
                        this.router.navigate(['/home']);
                    }
                };
                LoginComponent.prototype.login = function () {
                    this.loader.show();
                    this.auth.googleLogin();
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: src_app_service_fire_auth_service__WEBPACK_IMPORTED_MODULE_2__["FireAuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_4__["SpinnerService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line:component-selector
                    selector: 'login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/page-not-found/page-not-found.component.ts": 
        /*!***********************************************************************!*\
          !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
          \***********************************************************************/
        /*! exports provided: PageNotFoundComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () { return PageNotFoundComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var PageNotFoundComponent = /** @class */ (function () {
                function PageNotFoundComponent() {
                }
                PageNotFoundComponent.prototype.ngOnInit = function () {
                };
                return PageNotFoundComponent;
            }());
            PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page-not-found',
                    template: "\n    <p>\n      page-not-found works!\n    </p>\n  "
                })
            ], PageNotFoundComponent);
            /***/ 
        }),
        /***/ "./src/app/components/popup-mdl/popup-mdl.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/popup-mdl/popup-mdl.component.ts ***!
          \*************************************************************/
        /*! exports provided: PopupModelComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupModelComponent", function () { return PopupModelComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var PopupModelComponent = /** @class */ (function () {
                function PopupModelComponent() {
                    this.popupDisplay = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.popDisplay = 'none';
                }
                //endregion
                PopupModelComponent.prototype.ngOnInit = function () {
                    this.popDisplay = this.dataContext.popupDisplay;
                    this.formEntity = this.dataContext.formEntity;
                    var fcGroup = {};
                    this.formEntity.formControls.forEach(function (p) {
                        fcGroup[p.name] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](p.val, p.required ? _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required : null);
                    });
                    this.cform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](fcGroup);
                };
                PopupModelComponent.prototype.onFormSubmit = function () {
                    var _this = this;
                    this.dataContext.formEntity.formControls.forEach(function (cntrl) {
                        cntrl.val = _this.cform.get(cntrl.name).value;
                    });
                    this.formEntity.submitCallBack(this.dataContext.formEntity);
                    this.popupDisplay.emit("none");
                };
                PopupModelComponent.prototype.onExternalBtnClick = function (btnName) {
                    var btnProperty = this.formEntity.formActions.find(function (p) { return p.name == btnName; });
                    btnProperty.callBackFunction(this.cform);
                };
                PopupModelComponent.prototype.onPopupCloseButton = function () {
                    this.popupDisplay.emit("none");
                };
                return PopupModelComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PopupModelComponent.prototype, "dataContext", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], PopupModelComponent.prototype, "popupDisplay", void 0);
            PopupModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    // tslint:disable-next-line:component-selector
                    selector: 'popup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./popup-mdl.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popup-mdl/popup-mdl.component.html")).default
                })
            ], PopupModelComponent);
            /***/ 
        }),
        /***/ "./src/app/components/sidebar/sidebar.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/sidebar/sidebar.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/sidebar/sidebar.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/sidebar/sidebar.component.ts ***!
          \*********************************************************/
        /*! exports provided: SidebarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () { return SidebarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_service_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/firebase.service */ "./src/app/service/firebase.service.ts");
            /* harmony import */ var _models_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/entities */ "./src/app/models/entities.ts");
            /* harmony import */ var src_app_service_fire_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/fire-auth.service */ "./src/app/service/fire-auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var src_app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/shared.service */ "./src/app/service/shared.service.ts");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            var SidebarComponent = /** @class */ (function () {
                function SidebarComponent(router, firebaseService, auth, sharedsvc, toastr) {
                    this.router = router;
                    this.firebaseService = firebaseService;
                    this.auth = auth;
                    this.sharedsvc = sharedsvc;
                    this.toastr = toastr;
                    // @Output() sliderEmit = new EventEmitter<boolean>();
                    this.topicTypes = [];
                    this.uid = 0;
                    this.currentTT = '';
                    this.titile = '';
                    this.sliderFlag = false;
                }
                SidebarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.popupData = { popupDisplay: 'none', formEntity: null };
                    this.sharedsvc.slider.subscribe(function (p) { _this.sliderFlag = p; });
                    this.sharedsvc.titleText.subscribe(function (p) { return _this.currentTT == p; });
                    this.auth.loginStatus.subscribe(function (p) {
                        if (!p) {
                            _this.topicTypes = null;
                            _this.titile = '';
                        }
                        else if (p) {
                            _this.uid = _this.auth.getCurrentUserId();
                            _this.loadTopicTypes();
                            _this.titile = _this.auth.currentUser.displayName;
                        }
                    });
                };
                SidebarComponent.prototype.navigateTo = function (topicType) {
                    this.sharedsvc.sliderClose();
                    this.router.navigate(['topic/', topicType.Type]);
                };
                SidebarComponent.prototype.addTopicType = function () {
                    if (!this.auth.isAuthenticated()) {
                        this.toastr.info('Please login..!');
                        this.sharedsvc.sliderClose();
                    }
                    else {
                        var newTopicType = prompt('Enter new cource name:', '');
                        if (newTopicType === null || newTopicType === '') {
                            return;
                        }
                        var topicTypeObj = new _models_entities__WEBPACK_IMPORTED_MODULE_3__["TopicType"]();
                        topicTypeObj.Type = newTopicType;
                        topicTypeObj.UId = this.uid;
                        this.firebaseService.addTopicType(topicTypeObj);
                        this.toastr.success('Successfully created');
                        this.navigateTo(topicTypeObj);
                    }
                };
                SidebarComponent.prototype.loadTopicTypes = function () {
                    var _this = this;
                    this.firebaseService.getTopicTypes(this.uid).subscribe(function (data) {
                        _this.topicTypes = [];
                        if (data != null && data.length > 0) {
                            data.forEach(function (item) {
                                // tslint:disable-next-line:prefer-const
                                var a = item.payload.toJSON();
                                // tslint:disable-next-line:no-string-literal
                                a['$key'] = item.key;
                                _this.topicTypes.push(a);
                            });
                            // this.topicTypes = this.topicTypes.slice();
                        }
                    }, function (er) {
                        console.log('topictypes error', er);
                    });
                };
                return SidebarComponent;
            }());
            SidebarComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: src_app_service_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FireBaseService"] },
                { type: src_app_service_fire_auth_service__WEBPACK_IMPORTED_MODULE_4__["FireAuthService"] },
                { type: src_app_service_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }
            ]; };
            SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-sidebar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")).default]
                })
            ], SidebarComponent);
            /***/ 
        }),
        /***/ "./src/app/components/spinner/spinner.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/spinner/spinner.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".loader{\r\n    width:100%;\r\n    height:100%;\r\n    position:fixed;\r\n    top:0;\r\n    left:0;\r\n    background: rgba(0, 0, 0, 0.8);\r\n    z-index:9999;\r\n}\r\n.lds-roller {\r\ndisplay: inline-block;\r\nposition: relative;\r\nwidth: 80px;\r\nheight: 80px;\r\n  position: absolute;\r\n  left:50%;\r\n  top: 50%;\r\n  margin-top:-40px;\r\n  margin-left:-40px\r\n}\r\n.lds-roller div {\r\n-webkit-animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n        animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\ntransform-origin: 40px 40px;\r\n}\r\n.lds-roller div:after {\r\ncontent: \" \";\r\ndisplay: block;\r\nposition: absolute;\r\nwidth: 7px;\r\nheight: 7px;\r\nborder-radius: 50%;\r\nbackground: #0070d2;\r\nmargin: -4px 0 0 -4px;\r\n}\r\n.lds-roller div:nth-child(1) {\r\n-webkit-animation-delay: -0.036s;\r\n        animation-delay: -0.036s;\r\n}\r\n.lds-roller div:nth-child(1):after {\r\ntop: 63px;\r\nleft: 63px;\r\n}\r\n.lds-roller div:nth-child(2) {\r\n-webkit-animation-delay: -0.072s;\r\n        animation-delay: -0.072s;\r\n}\r\n.lds-roller div:nth-child(2):after {\r\ntop: 68px;\r\nleft: 56px;\r\n}\r\n.lds-roller div:nth-child(3) {\r\n-webkit-animation-delay: -0.108s;\r\n        animation-delay: -0.108s;\r\n}\r\n.lds-roller div:nth-child(3):after {\r\ntop: 71px;\r\nleft: 48px;\r\n}\r\n.lds-roller div:nth-child(4) {\r\n-webkit-animation-delay: -0.144s;\r\n        animation-delay: -0.144s;\r\n}\r\n.lds-roller div:nth-child(4):after {\r\ntop: 72px;\r\nleft: 40px;\r\n}\r\n.lds-roller div:nth-child(5) {\r\n-webkit-animation-delay: -0.18s;\r\n        animation-delay: -0.18s;\r\n}\r\n.lds-roller div:nth-child(5):after {\r\ntop: 71px;\r\nleft: 32px;\r\n}\r\n.lds-roller div:nth-child(6) {\r\n-webkit-animation-delay: -0.216s;\r\n        animation-delay: -0.216s;\r\n}\r\n.lds-roller div:nth-child(6):after {\r\ntop: 68px;\r\nleft: 24px;\r\n}\r\n.lds-roller div:nth-child(7) {\r\n-webkit-animation-delay: -0.252s;\r\n        animation-delay: -0.252s;\r\n}\r\n.lds-roller div:nth-child(7):after {\r\ntop: 63px;\r\nleft: 17px;\r\n}\r\n.lds-roller div:nth-child(8) {\r\n-webkit-animation-delay: -0.288s;\r\n        animation-delay: -0.288s;\r\n}\r\n.lds-roller div:nth-child(8):after {\r\ntop: 56px;\r\nleft: 12px;\r\n}\r\n@-webkit-keyframes lds-roller {\r\n0% {\r\ntransform: rotate(0deg);\r\n}\r\n100% {\r\ntransform: rotate(360deg);\r\n}\r\n}\r\n@keyframes lds-roller {\r\n0% {\r\ntransform: rotate(0deg);\r\n}\r\n100% {\r\ntransform: rotate(360deg);\r\n}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsY0FBYztJQUNkLEtBQUs7SUFDTCxNQUFNO0lBQ04sOEJBQThCO0lBQzlCLFlBQVk7QUFDaEI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixrQkFBa0I7QUFDbEIsV0FBVztBQUNYLFlBQVk7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7RUFDUixnQkFBZ0I7RUFDaEI7QUFDRjtBQUNBO0FBQ0Esd0VBQWdFO1FBQWhFLGdFQUFnRTtBQUNoRSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLFlBQVk7QUFDWixjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLFVBQVU7QUFDVixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQixxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGdDQUF3QjtRQUF4Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGdDQUF3QjtRQUF4Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGdDQUF3QjtRQUF4Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGdDQUF3QjtRQUF4Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLCtCQUF1QjtRQUF2Qix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGdDQUF3QjtRQUF4Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGdDQUF3QjtRQUF4Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGdDQUF3QjtRQUF4Qix3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQVBBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkZXJ7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgei1pbmRleDo5OTk5O1xyXG59XHJcbi5sZHMtcm9sbGVyIHtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbndpZHRoOiA4MHB4O1xyXG5oZWlnaHQ6IDgwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6NTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi10b3A6LTQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6LTQwcHhcclxufVxyXG4ubGRzLXJvbGxlciBkaXYge1xyXG5hbmltYXRpb246IGxkcy1yb2xsZXIgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xyXG50cmFuc2Zvcm0tb3JpZ2luOiA0MHB4IDQwcHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2OmFmdGVyIHtcclxuY29udGVudDogXCIgXCI7XHJcbmRpc3BsYXk6IGJsb2NrO1xyXG5wb3NpdGlvbjogYWJzb2x1dGU7XHJcbndpZHRoOiA3cHg7XHJcbmhlaWdodDogN3B4O1xyXG5ib3JkZXItcmFkaXVzOiA1MCU7XHJcbmJhY2tncm91bmQ6ICMwMDcwZDI7XHJcbm1hcmdpbjogLTRweCAwIDAgLTRweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDEpIHtcclxuYW5pbWF0aW9uLWRlbGF5OiAtMC4wMzZzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMSk6YWZ0ZXIge1xyXG50b3A6IDYzcHg7XHJcbmxlZnQ6IDYzcHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgyKSB7XHJcbmFuaW1hdGlvbi1kZWxheTogLTAuMDcycztcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDIpOmFmdGVyIHtcclxudG9wOiA2OHB4O1xyXG5sZWZ0OiA1NnB4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoMykge1xyXG5hbmltYXRpb24tZGVsYXk6IC0wLjEwOHM7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCgzKTphZnRlciB7XHJcbnRvcDogNzFweDtcclxubGVmdDogNDhweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDQpIHtcclxuYW5pbWF0aW9uLWRlbGF5OiAtMC4xNDRzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNCk6YWZ0ZXIge1xyXG50b3A6IDcycHg7XHJcbmxlZnQ6IDQwcHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg1KSB7XHJcbmFuaW1hdGlvbi1kZWxheTogLTAuMThzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNSk6YWZ0ZXIge1xyXG50b3A6IDcxcHg7XHJcbmxlZnQ6IDMycHg7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg2KSB7XHJcbmFuaW1hdGlvbi1kZWxheTogLTAuMjE2cztcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDYpOmFmdGVyIHtcclxudG9wOiA2OHB4O1xyXG5sZWZ0OiAyNHB4O1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoNykge1xyXG5hbmltYXRpb24tZGVsYXk6IC0wLjI1MnM7XHJcbn1cclxuLmxkcy1yb2xsZXIgZGl2Om50aC1jaGlsZCg3KTphZnRlciB7XHJcbnRvcDogNjNweDtcclxubGVmdDogMTdweDtcclxufVxyXG4ubGRzLXJvbGxlciBkaXY6bnRoLWNoaWxkKDgpIHtcclxuYW5pbWF0aW9uLWRlbGF5OiAtMC4yODhzO1xyXG59XHJcbi5sZHMtcm9sbGVyIGRpdjpudGgtY2hpbGQoOCk6YWZ0ZXIge1xyXG50b3A6IDU2cHg7XHJcbmxlZnQ6IDEycHg7XHJcbn1cclxuQGtleWZyYW1lcyBsZHMtcm9sbGVyIHtcclxuMCUge1xyXG50cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxufVxyXG4xMDAlIHtcclxudHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxufVxyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/spinner/spinner.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/spinner/spinner.component.ts ***!
          \*********************************************************/
        /*! exports provided: SpinnerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () { return SpinnerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _spinner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner.service */ "./src/app/components/spinner/spinner.service.ts");
            var SpinnerComponent = /** @class */ (function () {
                function SpinnerComponent(loaderService) {
                    this.loaderService = loaderService;
                    this.showLoader = false;
                }
                SpinnerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loaderService.isLoading.subscribe(function (value) {
                        _this.showLoader = value;
                    });
                };
                return SpinnerComponent;
            }());
            SpinnerComponent.ctorParameters = function () { return [
                { type: _spinner_service__WEBPACK_IMPORTED_MODULE_2__["SpinnerService"] }
            ]; };
            SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-spinner',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/spinner/spinner.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.css */ "./src/app/components/spinner/spinner.component.css")).default]
                })
            ], SpinnerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/spinner/spinner.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/spinner/spinner.service.ts ***!
          \*******************************************************/
        /*! exports provided: SpinnerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerService", function () { return SpinnerService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var SpinnerService = /** @class */ (function () {
                function SpinnerService() {
                    this.loadCount = 0;
                    this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
                }
                SpinnerService.prototype.show = function () {
                    if (this.loadCount == 0) {
                        this.isLoading.next(true);
                    }
                    this.loadCount++;
                };
                SpinnerService.prototype.hide = function () {
                    if (this.loadCount > 0) {
                        this.loadCount--;
                    }
                    else {
                        this.loadCount = 0;
                    }
                    if (this.loadCount == 0) {
                        this.isLoading.next(false);
                    }
                };
                SpinnerService.prototype.hideAll = function () {
                    this.loadCount = 0;
                    this.isLoading.next(false);
                };
                return SpinnerService;
            }());
            SpinnerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SpinnerService);
            /***/ 
        }),
        /***/ "./src/app/components/topic/topic.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/topic/topic.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdG9waWMvdG9waWMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/topic/topic.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/topic/topic.component.ts ***!
          \*****************************************************/
        /*! exports provided: TopicComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function () { return TopicComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
            /* harmony import */ var _models_entities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/entities */ "./src/app/models/entities.ts");
            /* harmony import */ var src_app_service_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/firebase.service */ "./src/app/service/firebase.service.ts");
            /* harmony import */ var src_app_service_fire_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/fire-auth.service */ "./src/app/service/fire-auth.service.ts");
            /* harmony import */ var src_app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/shared.service */ "./src/app/service/shared.service.ts");
            /* harmony import */ var _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../spinner/spinner.service */ "./src/app/components/spinner/spinner.service.ts");
            var TopicComponent = /** @class */ (function () {
                // tslint:disable-next-line:max-line-length
                function TopicComponent(route, router, datepipe, firebaseService, auth, toastr, sharedsvc, loader) {
                    this.route = route;
                    this.router = router;
                    this.datepipe = datepipe;
                    this.firebaseService = firebaseService;
                    this.auth = auth;
                    this.toastr = toastr;
                    this.sharedsvc = sharedsvc;
                    this.loader = loader;
                    this.topics = [];
                    this.openAll = false;
                }
                TopicComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.popupData = { popupDisplay: 'none', formEntity: null };
                    this.route.paramMap.subscribe(function (params) {
                        _this.currentTT = params.get('type');
                        _this.sharedsvc.changeTitleBS(_this.currentTT);
                        _this.topics = [];
                        // tslint:disable-next-line:curly
                        if (_this.currentTT !== undefined && _this.currentTT !== null)
                            _this.GetTopicTypeKey();
                    });
                };
                TopicComponent.prototype.GetTopicTypeKey = function () {
                    var _this = this;
                    this.loader.show();
                    this.firebaseService.getTopicTypeKey(this.auth.getCurrentUserId()).subscribe(function (p) {
                        // tslint:disable-next-line:prefer-const
                        if (p != null && p.length > 0) {
                            p.forEach(function (item) {
                                // tslint:disable-next-line:prefer-const
                                var a = item.payload.toJSON();
                                // tslint:disable-next-line:no-string-literal
                                a['$key'] = item.key;
                                if (a.Type === _this.currentTT) {
                                    _this.currentTTKey = item.key;
                                }
                            });
                            _this.LoadTopics();
                            // this.topics = this.topics.slice();
                        }
                        _this.loader.hide();
                    });
                };
                TopicComponent.prototype.LoadTopics = function () {
                    var _this = this;
                    this.firebaseService.getTopicsByType(this.currentTTKey).subscribe(function (data) {
                        if (data !== undefined && data !== null && data.length > 0) {
                            _this.topics = [];
                            data.forEach(function (item) {
                                // tslint:disable-next-line:prefer-const
                                var a = item.payload.toJSON();
                                // tslint:disable-next-line:no-string-literal
                                a['$key'] = item.key;
                                _this.topics.push(a);
                            });
                        }
                    }, function (er) {
                        if (er.error) {
                            _this.router.navigate(['/home']);
                        }
                    });
                };
                TopicComponent.prototype.AddTopic = function () {
                    var _this = this;
                    this.loader.show();
                    var topic = new _models_entities__WEBPACK_IMPORTED_MODULE_5__["Topic"]();
                    topic.Header = '';
                    topic.Description = '';
                    this.popupData.formEntity = this.getFormEntityForTopic(topic, 'Add');
                    this.popupData.formEntity.submitCallBack = function (formEntity) {
                        topic.Header = formEntity.formControls[0].val;
                        topic.Description = formEntity.formControls[1].val;
                        topic.TopicType = _this.currentTTKey;
                        console.log('add submit event');
                        _this.firebaseService.addTopic(topic);
                        _this.toastr.success('successfully added');
                    };
                    this.popupData.popupDisplay = 'block';
                    this.loader.hide();
                };
                TopicComponent.prototype.EditTopic = function (topic) {
                    var _this = this;
                    this.popupData.formEntity = this.getFormEntityForTopic(topic, 'Edit');
                    this.popupData.formEntity.submitCallBack = function (formEntity) {
                        topic.Header = formEntity.formControls[0].val;
                        topic.Description = formEntity.formControls[1].val;
                        console.log('edit submit event');
                        _this.firebaseService.updateTopic(topic).then(function (p) {
                        });
                    };
                    this.popupData.popupDisplay = 'block';
                };
                TopicComponent.prototype.DeleteTopic = function (topic) {
                    var confirmValue = confirm('Are you sure..?');
                    if (confirmValue) {
                        this.firebaseService.deleteTopic(topic.$key);
                    }
                };
                TopicComponent.prototype.getFormEntityForTopic = function (topic, title) {
                    var formEntity = new _models_entities__WEBPACK_IMPORTED_MODULE_5__["FormEntity"]();
                    formEntity.title = title + ' topic';
                    formEntity.isSubmitBtn = true;
                    formEntity.formControls = this.getFormControlsForTopic(topic);
                    return formEntity;
                };
                TopicComponent.prototype.getFormControlsForTopic = function (data) {
                    return [
                        { name: 'Header', lableName: 'Header', val: data.Header, inputType: _models_entities__WEBPACK_IMPORTED_MODULE_5__["InputTypesEnum"].text, order: 1, required: true },
                        { name: 'Description', lableName: 'Description', val: data.Description, inputType: _models_entities__WEBPACK_IMPORTED_MODULE_5__["InputTypesEnum"].textarea, rows: 8, required: true }
                    ];
                };
                TopicComponent.prototype.popupDisplayEvent = function (event) {
                    this.popupData.popupDisplay = event;
                };
                return TopicComponent;
            }());
            TopicComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] },
                { type: src_app_service_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FireBaseService"] },
                { type: src_app_service_fire_auth_service__WEBPACK_IMPORTED_MODULE_7__["FireAuthService"] },
                { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
                { type: src_app_service_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
                { type: _spinner_spinner_service__WEBPACK_IMPORTED_MODULE_9__["SpinnerService"] }
            ]; };
            TopicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-topic',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./topic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/topic/topic.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./topic.component.css */ "./src/app/components/topic/topic.component.css")).default]
                })
            ], TopicComponent);
            /***/ 
        }),
        /***/ "./src/app/directive/show.directive.ts": 
        /*!*********************************************!*\
          !*** ./src/app/directive/show.directive.ts ***!
          \*********************************************/
        /*! exports provided: ShowDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDirective", function () { return ShowDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ShowDirective = /** @class */ (function () {
                function ShowDirective(elRef, renderer) {
                    this.elRef = elRef;
                    this.renderer = renderer;
                }
                Object.defineProperty(ShowDirective.prototype, "show", {
                    set: function (val) {
                        if (val === true) {
                            this.renderer.addClass(this.elRef.nativeElement, 'show');
                        }
                        else {
                            this.renderer.removeClass(this.elRef.nativeElement, 'show');
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return ShowDirective;
            }());
            ShowDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ShowDirective.prototype, "show", null);
            ShowDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    // tslint:disable-next-line:directive-selector
                    selector: '[show]'
                })
            ], ShowDirective);
            /***/ 
        }),
        /***/ "./src/app/directive/slider.directive.ts": 
        /*!***********************************************!*\
          !*** ./src/app/directive/slider.directive.ts ***!
          \***********************************************/
        /*! exports provided: SliderDirective */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderDirective", function () { return SliderDirective; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var SliderDirective = /** @class */ (function () {
                function SliderDirective(elRef, renderer) {
                    this.elRef = elRef;
                    this.renderer = renderer;
                }
                Object.defineProperty(SliderDirective.prototype, "slider", {
                    set: function (val) {
                        if (val === true) {
                            this.renderer.addClass(this.elRef.nativeElement, 'active');
                        }
                        else {
                            this.renderer.removeClass(this.elRef.nativeElement, 'active');
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                return SliderDirective;
            }());
            SliderDirective.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SliderDirective.prototype, "slider", null);
            SliderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
                    // tslint:disable-next-line:directive-selector
                    selector: '[slider]'
                })
            ], SliderDirective);
            /***/ 
        }),
        /***/ "./src/app/models/entities.ts": 
        /*!************************************!*\
          !*** ./src/app/models/entities.ts ***!
          \************************************/
        /*! exports provided: Topic, TopicType, FormEntity, FormButtonEvent, ControlEntity, ButtonEntity, InputTypesEnum */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topic", function () { return Topic; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicType", function () { return TopicType; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormEntity", function () { return FormEntity; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormButtonEvent", function () { return FormButtonEvent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlEntity", function () { return ControlEntity; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonEntity", function () { return ButtonEntity; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTypesEnum", function () { return InputTypesEnum; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Topic = /** @class */ (function () {
                function Topic() {
                    // tslint:disable-next-line:no-inferrable-types
                    this.ShowContent = false;
                }
                return Topic;
            }());
            var TopicType = /** @class */ (function () {
                function TopicType() {
                }
                return TopicType;
            }());
            var FormEntity = /** @class */ (function () {
                function FormEntity() {
                }
                return FormEntity;
            }());
            var FormButtonEvent = /** @class */ (function () {
                function FormButtonEvent() {
                }
                return FormButtonEvent;
            }());
            var ControlEntity = /** @class */ (function () {
                function ControlEntity() {
                }
                return ControlEntity;
            }());
            var ButtonEntity = /** @class */ (function () {
                function ButtonEntity() {
                }
                return ButtonEntity;
            }());
            var InputTypesEnum;
            (function (InputTypesEnum) {
                InputTypesEnum[InputTypesEnum["text"] = 0] = "text";
                InputTypesEnum[InputTypesEnum["number"] = 1] = "number";
                InputTypesEnum[InputTypesEnum["dropdown"] = 2] = "dropdown";
                InputTypesEnum[InputTypesEnum["radio"] = 3] = "radio";
                InputTypesEnum[InputTypesEnum["textarea"] = 4] = "textarea";
            })(InputTypesEnum || (InputTypesEnum = {}));
            /***/ 
        }),
        /***/ "./src/app/pipes/desc-min.pipe.ts": 
        /*!****************************************!*\
          !*** ./src/app/pipes/desc-min.pipe.ts ***!
          \****************************************/
        /*! exports provided: DescMinPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescMinPipe", function () { return DescMinPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DescMinPipe = /** @class */ (function () {
                function DescMinPipe() {
                }
                DescMinPipe.prototype.transform = function (value, args) {
                    var num = 15;
                    if (args)
                        num = args;
                    var str = value.substr(0, num).replace(/\r?\n/g, '').replace('<br />', '') + '...';
                    return str.replace('<br />', '');
                };
                return DescMinPipe;
            }());
            DescMinPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'descMin'
                })
            ], DescMinPipe);
            /***/ 
        }),
        /***/ "./src/app/pipes/str2obj.pipe.ts": 
        /*!***************************************!*\
          !*** ./src/app/pipes/str2obj.pipe.ts ***!
          \***************************************/
        /*! exports provided: Str2objPipe */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Str2objPipe", function () { return Str2objPipe; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var Str2objPipe = /** @class */ (function () {
                function Str2objPipe() {
                }
                Str2objPipe.prototype.transform = function (value, args) {
                    value = value.replace(/\r?\n/g, '<br />').trim();
                    return this.urlify(value);
                };
                Str2objPipe.prototype.urlify = function (text) {
                    // or alternatively
                    // return text.replace(urlRegex, '<a href="$1">$1</a>')
                    //https://stackoverflow.com/questions/1500260/detect-urls-in-text-with-javascript
                    var urlRegex = /(https?:\/\/[^\s]+)/g;
                    return text.replace(urlRegex, function (url) {
                        var pngBool = new RegExp('.png' + "$").test(url);
                        var jpgBool = new RegExp('.jpg' + "$").test(url);
                        if (pngBool || jpgBool) {
                            return '<img src="' + url + '" class = "media-object" />';
                        }
                        else
                            return '<a href="' + url + '" target="_blank">' + url + '</a>';
                    });
                };
                return Str2objPipe;
            }());
            Str2objPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
                    name: 'str2obj'
                })
            ], Str2objPipe);
            /***/ 
        }),
        /***/ "./src/app/routes/app-routing.module.ts": 
        /*!**********************************************!*\
          !*** ./src/app/routes/app-routing.module.ts ***!
          \**********************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_topic_topic_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/topic/topic.component */ "./src/app/components/topic/topic.component.ts");
            /* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");
            /* harmony import */ var _components_error_connection_error_connection_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/error-connection/error-connection.component */ "./src/app/components/error-connection/error-connection.component.ts");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
            /* harmony import */ var _auth_guards_routing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-guards.routing.service */ "./src/app/routes/auth-guards.routing.service.ts");
            /* harmony import */ var _components_popup_mdl_popup_mdl_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/popup-mdl/popup-mdl.component */ "./src/app/components/popup-mdl/popup-mdl.component.ts");
            var routes = [
                {
                    path: 'home',
                    component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    canActivate: [_auth_guards_routing_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
                },
                {
                    path: 'topic/addnew',
                    component: _components_popup_mdl_popup_mdl_component__WEBPACK_IMPORTED_MODULE_9__["PopupModelComponent"],
                    canActivate: [_auth_guards_routing_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
                },
                {
                    path: 'topic/edit/:type',
                    component: _components_popup_mdl_popup_mdl_component__WEBPACK_IMPORTED_MODULE_9__["PopupModelComponent"],
                    canActivate: [_auth_guards_routing_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
                },
                {
                    path: 'topic/:type',
                    component: _components_topic_topic_component__WEBPACK_IMPORTED_MODULE_4__["TopicComponent"],
                    canActivate: [_auth_guards_routing_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                },
                {
                    path: 'login',
                    component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
                },
                {
                    path: 'error',
                    component: _components_error_connection_error_connection_component__WEBPACK_IMPORTED_MODULE_6__["ErrorConnectionComponent"]
                },
                {
                    path: '',
                    redirectTo: '/login',
                    pathMatch: 'full'
                },
                {
                    path: '**',
                    component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/routes/auth-guards.routing.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/routes/auth-guards.routing.service.ts ***!
          \*******************************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_fire_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/fire-auth.service */ "./src/app/service/fire-auth.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(auth, router) {
                    this.auth = auth;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function () {
                    if (!this.auth.isAuthenticated()) {
                        this.router.navigate(['/login']);
                        return false;
                    }
                    return true;
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _service_fire_auth_service__WEBPACK_IMPORTED_MODULE_3__["FireAuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/service/fire-auth.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/service/fire-auth.service.ts ***!
          \**********************************************/
        /*! exports provided: FireAuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireAuthService", function () { return FireAuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _components_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/spinner/spinner.service */ "./src/app/components/spinner/spinner.service.ts");
            // https://angularfirebase.com/lessons/google-user-auth-with-firestore-custom-data/
            var FireAuthService = /** @class */ (function () {
                function FireAuthService(afAuth, afs, router, loader) {
                    this.afAuth = afAuth;
                    this.afs = afs;
                    this.router = router;
                    this.loader = loader;
                    this.currentUser = null;
                    this.loginBS = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](false);
                    this.loginStatus = this.loginBS.asObservable();
                    //// Get auth data, then get firestore user document || null
                    // this.user = this.afAuth.authState.pipe(
                    //   switchMap(user => {
                    //     if (user) {
                    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                    //     } else {
                    //       return of(null);
                    //     }
                    //   })
                    // );
                }
                FireAuthService.prototype.googleLogin = function () {
                    var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
                    return this.oAuthLogin(provider);
                };
                FireAuthService.prototype.oAuthLogin = function (provider) {
                    var _this = this;
                    return this.afAuth.auth.signInWithPopup(provider)
                        .then(function (credential) {
                        _this.updateUserData(credential);
                    });
                };
                FireAuthService.prototype.updateUserData = function (user) {
                    // Sets user data to firestore on login
                    // const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.additionalUserInfo.profile.id}`);
                    this.currentUser = {
                        uid: user.additionalUserInfo.profile.id,
                        email: user.additionalUserInfo.profile.email,
                        displayName: user.additionalUserInfo.profile.name,
                        photoURL: user.additionalUserInfo.profile.picture
                    };
                    localStorage.setItem('userData', JSON.stringify(this.currentUser));
                    this.loginBS.next(true);
                    this.loader.hide();
                    this.router.navigate(['home']);
                    // return userRef.set(data, { merge: true });
                };
                FireAuthService.prototype.isAuthenticated = function () {
                    this.currentUser = JSON.parse(localStorage.getItem('userData'));
                    if (this.currentUser !== null && this.currentUser.uid) {
                        return true;
                    }
                    return false;
                };
                FireAuthService.prototype.initialLoginCheck = function () {
                    if (this.isAuthenticated()) {
                        this.loginBS.next(true);
                    }
                };
                FireAuthService.prototype.getCurrentUserId = function () {
                    this.currentUser = JSON.parse(localStorage.getItem('userData'));
                    if (this.currentUser !== null && this.currentUser.uid) {
                        return this.currentUser.uid;
                    }
                    return 0;
                };
                FireAuthService.prototype.signOut = function () {
                    localStorage.clear();
                    this.currentUser = null;
                    this.loginBS.next(false);
                    this.router.navigate(['/login']);
                    this.afAuth.auth.signOut().then(function () { });
                };
                return FireAuthService;
            }());
            FireAuthService.ctorParameters = function () { return [
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _components_spinner_spinner_service__WEBPACK_IMPORTED_MODULE_7__["SpinnerService"] }
            ]; };
            FireAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], FireAuthService);
            /***/ 
        }),
        /***/ "./src/app/service/firebase.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/service/firebase.service.ts ***!
          \*********************************************/
        /*! exports provided: FireBaseService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireBaseService", function () { return FireBaseService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            var FireBaseService = /** @class */ (function () {
                function FireBaseService(db, datepipe) {
                    this.db = db;
                    this.datepipe = datepipe;
                    this.topictypesRef = this.db.list('posttypes');
                    this.topicsRef = this.db.list('posts');
                }
                /* topictypes firebase serivce call */
                FireBaseService.prototype.addTopicType = function (topicType) {
                    topicType.ModifiedDate = this.getCurrentDate();
                    this.topictypesRef.push(topicType);
                };
                FireBaseService.prototype.getTopicTypes = function (uid) {
                    // this.topictypesRef = this.db.list('posttypes');
                    this.topictypesRef = this.db.list('/posttypes', function (ref) { return ref.orderByChild('UId').equalTo(uid); });
                    return this.topictypesRef.snapshotChanges();
                };
                FireBaseService.prototype.getTopicType = function (key) {
                    this.topictypeRef = this.db.object('posttypes/' + key);
                    return this.topictypeRef;
                };
                FireBaseService.prototype.updateTopicType = function (topicType) {
                    this.topictypeRef.update({
                        Type: topicType.Type,
                        ModifiedDate: this.getCurrentDate()
                    });
                };
                FireBaseService.prototype.deleteTopicType = function (key) {
                    this.topictypeRef = this.db.object('posttypes/' + key);
                    return this.topictypeRef.remove();
                };
                FireBaseService.prototype.getTopicTypeKey = function (uid) {
                    this.topictypesRef = this.db.list('/posttypes', function (ref) { return ref.orderByChild('UId').equalTo(uid); });
                    return this.topictypesRef.snapshotChanges();
                };
                /* topics firebase serivce call */
                FireBaseService.prototype.getTopicsByType = function (key) {
                    this.topicsRef = this.db.list('/posts', function (ref) { return ref.orderByChild('TopicType').equalTo(key); });
                    return this.topicsRef.snapshotChanges();
                };
                // tslint:disable-next-line:adjacent-overload-signatures
                FireBaseService.prototype.getTopic = function (key) {
                    this.topicRef = this.db.object('posts/' + key);
                    return this.topicRef.snapshotChanges();
                };
                FireBaseService.prototype.addTopic = function (topic) {
                    topic.ModifiedDate = this.getCurrentDate();
                    this.topicsRef.push(topic);
                };
                FireBaseService.prototype.updateTopic = function (topic) {
                    this.topicRef = this.db.object('posts/' + topic.$key);
                    return this.topicRef.update({
                        Header: topic.Header,
                        Description: topic.Description,
                        ModifiedDate: this.getCurrentDate()
                    });
                };
                FireBaseService.prototype.deleteTopic = function (key) {
                    this.topicRef = this.db.object('posts/' + key);
                    return this.topicRef.remove();
                };
                /*Common Functions  */
                FireBaseService.prototype.getCurrentDate = function () {
                    var date = new Date();
                    return this.datepipe.transform(date, 'dd/MM/yyyy');
                };
                return FireBaseService;
            }());
            FireBaseService.ctorParameters = function () { return [
                { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] },
                { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
            ]; };
            FireBaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], FireBaseService);
            /***/ 
        }),
        /***/ "./src/app/service/shared.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/service/shared.service.ts ***!
          \*******************************************/
        /*! exports provided: SharedService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function () { return SharedService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var SharedService = /** @class */ (function () {
                function SharedService() {
                    this.titleBS = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('My title');
                    this.titleText = this.titleBS.asObservable();
                    this.sliderBS = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
                    this.sliderStatus = false;
                    this.slider = this.sliderBS.asObservable();
                }
                SharedService.prototype.changeTitleBS = function (title) {
                    this.titleBS.next(title);
                };
                SharedService.prototype.sliderClose = function () {
                    this.sliderStatus = false;
                    this.sliderBS.next(false);
                };
                SharedService.prototype.sliderOpen = function () {
                    this.sliderStatus = true;
                    this.sliderBS.next(true);
                };
                SharedService.prototype.sliderToggle = function () {
                    if (this.sliderStatus) {
                        this.sliderClose();
                    }
                    else {
                        this.sliderOpen();
                    }
                };
                return SharedService;
            }());
            SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], SharedService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: true,
                firebase: {
                    apiKey: "AIzaSyBuPhK9QW44jD8f8HJuoa2TUM411zSodXY",
                    authDomain: "myposts-rst007.firebaseapp.com",
                    databaseURL: "https://myposts-rst007.firebaseio.com",
                    projectId: "myposts-rst007",
                    storageBucket: "myposts-rst007.appspot.com",
                    messagingSenderId: "390114702304",
                    appId: "1:390114702304:web:d09070eb8e199aa03b3185",
                    measurementId: "G-201ZEXC4LQ"
                }
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! E:\rst\rstCode\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map