import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Convert, ChildData} from './Model';


@Injectable({
  providedIn: 'root'
})
export class ModelService {

  urlBase: string = "https://www.reddit.com/r/aww/.json";


  constructor(private http:HttpClient) { }


GetPost(id:string) : Observable<any>{

 let fullURL: string = `${this.urlBase}`;

 let result : Observable<any> = this.http.get(fullURL);
 return result;


}

}









