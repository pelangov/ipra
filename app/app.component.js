"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular 2';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "app",
        templateUrl: "<div class=\"container\">\n        <div class=\"divFixedLeft\"><span id=\"j_id0:j_id2\">\n\n    <table cellpadding=\"0\" cellspacing=\"0\" class=\"tblMenuMain\">\n        <tr>\n            <td style=\"vertical-align: middle; padding-top: 20px; height: 12%\">\n                Testing table \n            </td>\n        </tr>\n    </table>\n    </span>\n        </div>\n </div>"
    })
], AppComponent);
exports.AppComponent = AppComponent;
