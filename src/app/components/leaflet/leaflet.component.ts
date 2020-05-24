import {
  Component,
  OnInit,
  AfterViewInit,
  Input,
  OnChanges,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { API } from 'src/app/utils/api';
import * as L from 'leaflet';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'corona-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss'],
})
export class LeafletComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() countries: any;
  map: any;
  isNightMode: boolean;
  mapUrl: string;
  constructor(
    private themeService: ThemeService,
    private cdr: ChangeDetectorRef
  ) {
    this.isNightMode = false;
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.themeService.subject.subscribe((val) => {
      this.mapUrl = val === 'light' ? API.lightLeafletUrl : API.darkLeafletUrl;
      this.reInitializeMap();
    });

    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.setMarkers();
  }

  reInitializeMap(): void {
    if (this.map !== (null || undefined)) {
      this.map = null;
      const mapId = 'map';
      const mapFrameId = 'map-frame';
      document.getElementById(mapId).outerHTML = '';
      document.getElementById(mapFrameId).innerHTML += '<div id="map"></div>';
      document.getElementById(mapId).style.height = '100%';

      this.initMap();
      this.setMarkers();
    }
  }

  private initMap(): void {
    const type = 'map';
    this.map = L.map(type).setView([13, 122], 4);

    const tiles = L.tileLayer(this.mapUrl, {
      noWrap: true,
      bounds: [
        [-90, -180],
        [90, 180],
      ],
      maxZoom: 18,
      attribution: API.attributionUrl,
    });
    tiles.addTo(this.map);
  }

  private setMarkers(): void {
    for (const c of this.countries) {
      const lat = c.location.lat;
      const lng = c.location.lng;
      const popUpContent = `
          <b>Country:</b> ${c.countryregion}<br/>
          <b>Confirmed:</b> ${c.confirmed.toLocaleString('en') || 0}<br/>
          <b>Recovered:</b> ${c.recovered.toLocaleString('en') || 0}<br/>
          <b>Deaths:</b> ${c.deaths.toLocaleString('en') || 0}
          `;

      L.circleMarker([lat, lng], {
        radius: 6,
        color: 'red',
      })
        .bindPopup(popUpContent)
        .addTo(this.map);
    }
  }

  ngOnDestroy(): void {
    this.themeService.subject.unsubscribe();
  }
}
