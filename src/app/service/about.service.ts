import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Post} from '../model/post.model';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee.model';

const POST_ENDPOINT = '/repos';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor(
    private http: HttpClient
  ) { }

  public getAboutInfo(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.API_BASE + POST_ENDPOINT);
  }
}
