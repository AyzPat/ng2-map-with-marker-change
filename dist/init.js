"use strict";
var Init = (function () {
    function Init() {
    }
    Init.prototype.load = function () {
        if (localStorage.getItem('markers') === null) {
            console.log("No markers found .... creating...");
            var markers = [
                {
                    name: 'Bangalore ',
                    lat: 12.96297693369,
                    lng: 77.597693656249,
                    checked: true
                },
                {
                    name: 'Bilekahalli ',
                    lat: 12.897021,
                    lng: 77.606559,
                    checked: true
                },
                {
                    name: 'Bommanahalli',
                    lat: 12.898448,
                    lng: 77.618477,
                    checked: true
                },
                {
                    name: 'Hongasandra',
                    lat: 12.894390,
                    lng: 77.627201,
                    checked: true
                },
                {
                    name: 'HSR Layout',
                    lat: 12.907412,
                    lng: 77.643256,
                    checked: true
                },
                {
                    name: 'ELECTRONIC CITY',
                    lat: 12.841000,
                    lng: 77.673560,
                    checked: true
                },
                {
                    name: 'Hosur',
                    lat: 12.745688,
                    lng: 77.828600,
                    checked: true
                },
                {
                    name: 'WhiteField',
                    lat: 12.969751,
                    lng: 77.749588,
                    checked: true
                },
                {
                    name: 'Yeshwanthpur',
                    lat: 13.028591,
                    lng: 77.532736,
                    checked: true
                },
                {
                    name: 'Vijaya Nagar',
                    lat: 12.971530,
                    lng: 77.528279,
                    checked: true
                }
            ];
            localStorage.setItem('markers', JSON.stringify(markers));
        }
        else {
            console.log('Loading markers...');
        }
    };
    return Init;
}());
exports.Init = Init;
//# sourceMappingURL=init.js.map