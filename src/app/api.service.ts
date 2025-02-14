import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightsApiData } from './models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = '';
  private apiKey: string = '';
//5381652b51416c715b2eb2900eca0dfe
//https://api.aviationstack.com/v1

  public getFlights(): Observable<FlightsApiData> {
    return this.http.get<FlightsApiData>(
      this.baseUrl + '/flights?access_key=' + this.apiKey
    );

  }
}
