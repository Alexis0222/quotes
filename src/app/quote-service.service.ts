import { Injectable } from '@angular/core';
import { Quote } from './quotes/quote';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Message } from './message';
import{tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
private quotesURL="https://ancient-refuge-95273.herokuapp.com/quotes"
constructor(
  private http: HttpClient,
  ) { }

getQuotes():Observable<Quote[]>{

  return this.http.get<Quote[]>(this.quotesURL);

}
addQutoes(quote: Quote): Observable<any> {
  const body=JSON.stringify(quote);
  console.log(body);
  return this.http.post<Message>(this.quotesURL, body, this.httpOptions)
  .pipe(tap((newMessage:Message)=>console.log(newMessage)));
}
}


