import { Injectable} from "@angular/core";
import { Http,Response,Headers} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs";
 @Injectable()

export class QuoteService{
    constructor(private http:Http){

    }
    addQuote(content:string){
        const body=JSON.stringify({content:content});
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.post('http://localhost/ng2-server/public/api/quote',body,{headers:headers})
    }
    getQuotes():Observable<any>{
        return this.http.get('http://localhost/ng2-server/public/api/quotes')
        .map(
            (response:Response) => {
                return response.json().quotes;
            }
        );
    }
    updateQuote(id: number, newContent:string){
        const body = JSON.stringify({content:newContent});
        const headers = new Headers({'Content-Type':'application/json'});
        return this.http.put('http://localhost/ng2-server/public/api/quote/' + id,body,{headers:headers})
        .map(
            (response:Response) => response.json()
        );
    }
     deleteQuote(id:number){
         return this.http.delete('http://localhost/ng2-server/public/api/quote/' + id);
     }
}