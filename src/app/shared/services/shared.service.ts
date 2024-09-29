import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  spinner: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }
  
  url = 'https://staging-api.example.com/test';
  lang = sessionStorage.getItem('lang') ?? 'en';
  // lang = sessionStorage.getItem('Accept-Language') ?? 'en';
  // lang = sessionStorage.getItem('X-Localization') ?? 'en';

  headers = new HttpHeaders()
    .set('X-localization', sessionStorage.getItem('lang') ?? 'en')
    // .set('X-localization', sessionStorage.getItem('X-Localization') ?? 'en')
    // .set('X-localization', sessionStorage.getItem('Accept-Language') ?? 'en')
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');


  getIsLoading(): Observable<boolean> {
    return this.spinner
  }

  setIsLoading(loading: boolean | any) {
    this.spinner.next(loading);
  }


    // homepage(): Observable<any> {
  //   this.setIsLoading(true);
  //   return this.http.get(`${environment.apiUrl}memberships`, { headers: this.headers }).pipe(
  //     tap(() => {
  //       this.setIsLoading(false);
  //     })
  //   );
  // }

  // geUserByID(param?: any): Observable<any> {
  //   this.setIsLoading(true);
  //   return this.http.get(`${this.url}/${param}`, { headers: this.headers }).pipe(
  //     tap(() => {
  //       this.setIsLoading(false);
  //     })
  //   );
  // }
}
