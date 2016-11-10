import { Injectable } from '@angular/core';
import {Init} from "./init";

@Injectable()
export class MarkerService extends Init{
checked:any;
  constructor() {
    super();
    console.log("Marker Service Initialized ")
    this.load();
     
  }

  getMarkers(){
    var markers = JSON.parse(localStorage.getItem('markers'));
    return markers;
  }

  addMarker(newMarker){
    //fetch marker that are already there
    var markers = JSON.parse(localStorage.getItem('markers'));

    // Push to array
    markers.push(newMarker);

    //set markers again
    localStorage.setItem('markers',JSON.stringify(markers))
  }



  updateMarker(marker,checked){
    var markers = JSON.parse(localStorage.getItem('markers'));

    for(let i = 0; i < markers.length; i++){
       if(checked == marker[i].checked){
      markers[i].checked =marker.checked;
        
       }
      }
    //set markers again
   localStorage.setItem('markers',JSON.stringify(marker))

  }


 
}