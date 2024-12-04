import { AfterViewInit, Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl'; 

@Component({
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap?: ElementRef;

  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-100.99858792105704, 22.151313492980307);
  
  ngAfterViewInit(): void {
    if ( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13,
    });

    const markerHtml = document.createElement('div');
    markerHtml.innerHTML = 'Gabriela A';

    const marker = new Marker({
      //color: 'red',
      element: markerHtml
    })
      .setLngLat( this.currentLngLat )
      .addTo( this.map );
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

}
