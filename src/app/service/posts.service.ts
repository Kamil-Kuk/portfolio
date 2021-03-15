import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Post} from '../model/post.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const POST_ENDPOINT = '/repos';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }

  public getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(environment.API_BASE + POST_ENDPOINT);
  }
}
