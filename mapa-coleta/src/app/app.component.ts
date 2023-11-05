import { Component } from '@angular/core';
import { SenacRJ } from './constant';
import mapboxgl, { LngLatLike } from 'maplibre-gl';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  centerCoordinates: LngLatLike;
  nearbyPoints: LngLatLike[] = [];

  constructor() {
    this.centerCoordinates = [SenacRJ.longitude, SenacRJ.latitude] as LngLatLike;

    // Adiciona cinco pontos próximos ao ponto central
    for (let i = 0; i < 5; i++) {
      const newLat = SenacRJ.latitude + (Math.random() - 0.5) * SenacRJ.latitudeDelta * 0.5;
      const newLng = SenacRJ.longitude + (Math.random() - 0.5) * SenacRJ.longitudeDelta * 0.5;

      this.nearbyPoints.push([newLng, newLat]);
    }
  }
}


