import { Component, OnInit } from '@angular/core';
import { Quote } from './quote';
import { QuoteServiceService } from '../quote-service.service';
@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  items=['First','Second','Last'];
  quoteArray:Quote[]=[];
  constructor(private quotesService:QuoteServiceService) { }

  ngOnInit(): void {
    this.getQuotes();
  }
  getQuotes(){

    this.quotesService.getQuotes().subscribe(quotes => this.quoteArray=quotes);

  }

}
