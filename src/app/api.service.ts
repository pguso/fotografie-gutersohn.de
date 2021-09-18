import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiUrl = 'http://api.fotografie-gutersohn.de';

  constructor(private httpClient: HttpClient) { }

  getImages(page: number): Observable<any> {
    return this.httpClient
      .get(`${this.apiUrl}/photos?_limit=21&_start=${page}&_sort=id:DESC`);
  }
}
