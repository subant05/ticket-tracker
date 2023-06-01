import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  constructor(private http: HttpClient) { }

  createRule(rule:any){
   return this.http.post<any>( 
      `${environment.enpoints.post.rules}`, rule
      )
  }
}
