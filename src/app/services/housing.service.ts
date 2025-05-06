import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  constructor() {}

  api = inject(HttpClient);
  url = 'http://localhost:3000/houses';

  getAllHousingLocations(): Observable<House[]> {
    return this.api.get<House[]>(this.url);
  }

  getHousingLocationById(id: number): Observable<House> {
    return this.api.get<House>(`${this.url}/${id}`);
  }
}
