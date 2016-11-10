"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var init_1 = require("./init");
var MarkerService = (function (_super) {
    __extends(MarkerService, _super);
    function MarkerService() {
        _super.call(this);
        console.log("Marker Service Initialized ");
        this.load();
    }
    MarkerService.prototype.getMarkers = function () {
        var markers = JSON.parse(localStorage.getItem('markers'));
        return markers;
    };
    MarkerService.prototype.addMarker = function (newMarker) {
        //fetch marker that are already there
        var markers = JSON.parse(localStorage.getItem('markers'));
        // Push to array
        markers.push(newMarker);
        //set markers again
        localStorage.setItem('markers', JSON.stringify(markers));
    };
    MarkerService.prototype.updateMarker = function (marker, checked) {
        var markers = JSON.parse(localStorage.getItem('markers'));
        for (var i = 0; i < markers.length; i++) {
            if (checked == marker[i].checked) {
                markers[i].checked = marker.checked;
            }
        }
        //set markers again
        localStorage.setItem('markers', JSON.stringify(marker));
    };
    MarkerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MarkerService);
    return MarkerService;
}(init_1.Init));
exports.MarkerService = MarkerService;
//# sourceMappingURL=map.service.js.map