"use strict";
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
var map_service_1 = require("./map.service");
var MapComponent = (function () {
    function MapComponent(markerService) {
        this.markerService = markerService;
        //zoom level
        this.zoom = 12;
        //start position
        this.lat = 12.963;
        this.lng = 77.5951;
        // Markers
        this.markers = [];
        this.markers = this.markerService.getMarkers();
    }
    MapComponent.prototype.addMarker = function () {
        console.log("added", this.checked);
        var newMarker = {
            name: this.name,
            lat: parseFloat(this.markerLat),
            lng: parseFloat(this.markerLng),
            checked: this.checked
        };
        this.markers.push(newMarker);
        this.markerService.addMarker(newMarker);
    };
    MapComponent.prototype.add = function () {
        if (this.getLocation) {
            this.close("locations");
        }
        this.open("myNav");
    };
    MapComponent.prototype.open = function (id) {
        setTimeout(function () {
            document.getElementById(id).style.width = "60%";
            document.getElementById("main").style.opacity = "0.2";
        }, 500);
    };
    MapComponent.prototype.close = function (id) {
        document.getElementById(id).style.width = "0%";
        document.getElementById("main").style.opacity = "1";
    };
    MapComponent.prototype.getLocation = function () {
        if (this.add) {
            this.close("myNav");
        }
        this.open("locations");
        var markers;
        this.markerService.updateMarker(this.markers, this.checked);
        this.markers = this.markerService.getMarkers();
    };
    MapComponent = __decorate([
        core_1.Component({
            selector: 'map',
            templateUrl: 'app/map.html',
        }), 
        __metadata('design:paramtypes', [map_service_1.MarkerService])
    ], MapComponent);
    return MapComponent;
}());
exports.MapComponent = MapComponent;
//# sourceMappingURL=map.component.js.map