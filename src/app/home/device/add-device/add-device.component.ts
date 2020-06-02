import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.scss']
})
export class AddDeviceComponent implements OnInit {
  public location: any = {
    x: 105.780128,
    y: 21.029356,
    label: '15 Phạm Hùng, Mỹ Đình 2, Nam Từ Liêm, Hà Nội'
  };
public deviceName: any;
public locationName: any;
  ngOnInit() {
    this.initMap();

  }


  public initMap(): void {

    document.getElementById(
      "contain-map"
    ).innerHTML = `<div id='map' style='width: 100%; height: 100%;'></div>`;

    const map =  L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });


    L.icon({
      iconUrl: "http://icons.iconarchive.com/icons/icons-land/vista-map-markers/24/Map-Marker-Marker-Outside-Chartreuse-icon.png",
      // shadowUrl: 'assets/images/icons/Blank.png',
      iconSize: [25, 41], // size of the icon
      // shadowSize:   [50, 64], // size of the shadow
      iconAnchor: [9, 40], // point of the icon which will correspond to marker's location
      // shadowAnchor: [4, 62],  // the same for the shadow
      popupAnchor: [0, -40] // point from which the popup should open relative to the iconAnchor
    });
    L.control.scale().addTo(map);
    // Create a Tile Layer and add it to the map
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="http://osm.org/copyright"></a> contributors'
    }).addTo(map);

    // add search control https://github.com/smeijer/leaflet-geosearch
    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider: provider,
      autoClose: true
    });
    map.addControl(searchControl);

    // popover
    let marker = L.marker([ 39.8282, -98.5795 ])
      .addTo(map)
      .bindPopup(this.location.label)
      .openPopup();

    // handler
    map.on("geosearch/showlocation", yourEventHandler => {
      if (marker) {
        // check

        map.removeLayer(marker); // remove
      }
      marker = new L.Marker([yourEventHandler["location"].y, yourEventHandler["location"].x])
        .addTo(map)
        .bindPopup(yourEventHandler["location"].label)
        .openPopup();
    });
  }

}

