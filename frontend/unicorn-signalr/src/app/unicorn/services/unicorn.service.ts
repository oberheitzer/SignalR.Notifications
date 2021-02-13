import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnicornService {

  private headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
      this.headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });
   }

  createUnicorn(): Observable<void> {
    const headers = this.headers;
    return this.http.post<void>('https://localhost:44307/api/Unicorns', { headers });
  }
}
