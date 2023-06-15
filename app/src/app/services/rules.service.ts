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
  updateRule(rule:any){
    return this.http.put<any>( 
       `${environment.enpoints.post.rules}`, rule
       )
   }
   deleteRule(id:number=0){
    return this.http.delete<any>( 
       `${environment.enpoints.post.rules}?id=${id}`,
       )
   }
}
