import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from 'src/app/utils/api';

@Injectable({
  providedIn: 'root',
})
export class CoronaApiService {
  headers = new HttpHeaders();
  constructor(private http: HttpClient) {
    this.headers.set('Content-Type', 'application/json');
  }

  getCoronaBriefData(): Observable<any> {
    return this.http.get(`${API.baseUrl}brief`, {
      headers: this.headers,
    });
  }

  getCoronaLatestData(isoCode?: string): Observable<any> {
    const subUrl =
      isoCode !== undefined
        ? `latest?iso2=${isoCode}&onlyCountries=true`
        : 'latest?onlyCountries=true';

    return this.http.get<any>(`${API.baseUrl}${subUrl}`, {
      headers: this.headers,
    });
  }

  getCoronaTimeSeriesData(): Observable<any> {
    return this.http.get(`${API.baseUrl}timeseries`, {
      headers: this.headers,
    });
  }
}
