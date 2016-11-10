import { Component,OnInit } from '@angular/core';
import {MarkerService} from "./map.service";
declare var google: any;
declare var locations:any;


@Component({
    selector: 'map',
    templateUrl:'app/map.html',
})

export class MapComponent {
  //zoom level
  zoom: number = 12;
   //start position
  lat: number =12.963;
  lng: number =77.5951;

  //Values
  name: string;
  markerLat: string;
  markerLng: string;
  checked: boolean;

  // Markers
  markers: marker[] = [];


  
  constructor(private markerService: MarkerService){

    this.markers = this.markerService.getMarkers()


    
  }


  addMarker(){
  
console.log("added",this.checked);
    var newMarker = {
      name: this.name,

      lat: parseFloat(this.markerLat),
      lng: parseFloat(this.markerLng),
      checked: this.checked
      
    }

    this.markers.push(newMarker);

    this.markerService.addMarker(newMarker);

  }

  
    add() {
      if(this.getLocation)
      {
         this.close("locations");
      }
      this.open("myNav")
    }
  
  
   open(id:any){
 setTimeout(() => {
  document.getElementById(id).style.width = "60%";
      document.getElementById("main").style.opacity="0.2";
 },500);
}


close(id:any) {
    document.getElementById(id).style.width = "0%";
     document.getElementById("main").style.opacity="1";
   
}

 getLocation() {
if(this.add){
  this.close("myNav");
}  
  this.open("locations");
var markers:any[];
   
    
this.markerService.updateMarker(this.markers,this.checked);


   this.markers = this.markerService.getMarkers();
     
  
}


}

//Marker Type
interface marker {
  name: string;
  lat: number 
  lng: number;
  checked: boolean;
}




