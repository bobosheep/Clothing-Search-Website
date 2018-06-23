import { Component, OnInit, Query, ViewChild } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { SearchQuery , QueryBody} from '../query';
import { ClothesData } from '../clothes';
import { AdvanceSearchComponent } from './advance-search.component'

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  animations:[
    trigger('HaveAdvance',[
      state('No',  style({
        display:'none'
      })),
      state('Yes',  style({
        display:'block'
      })),
      transition('No => Yes', animate('100ms ease-in')),
      transition('Yes => No', animate('100ms ease-out'))
    ])
  ]
})


export class SearchResultComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }

  query : string = '';
  genderOption : string = 'ALL';
  genders = [
    { 'gender' : 'ALL' },
    { 'gender' : '男裝' },
    { 'gender' : '女裝' },
    { 'gender' : '童裝' }
  ];

  have_result : boolean = false;
  advance_search : string = 'No';

  queryBody : QueryBody = {
    query : {
      query_string:{
        query: 'name:' + this.query
      }
    },
    from : 0,
    size : 20
  }

  result: any = {
    took_time : 0,
    hits_total : 0
  }

  clothes : any[] ;
  response : any[];

  constructor(private http:HttpClient) {
   }

  clc = fromEvent(window, 'scroll')
  .subscribe(e => {
    let d = document.documentElement;
    if (window.scrollY + d.clientHeight == d.scrollHeight){
      console.log('bottom~');
    }
  });
  launchModal = (id:string)=>{
    //console.log(id);
    let ele = document.getElementById(id);
    ele.classList.add("is-active");
  }

  closeModal = (id:string)=>{
    let ele = document.getElementById(id);
    ele.classList.remove("is-active");
  }
  
  getSearch = () => {
    if(this.query.length >= 0){
      console.log(this.query);
      
      this.queryBody.query.query_string.query = 'name:' + this.query
      if( !(this.genderOption === 'ALL') )
        this.queryBody.query.query_string.query += ' AND ' + 'gender:' + this.genderOption[0];
      this.http.post(`http://localhost:5000/search`, this.queryBody, this.httpOptions)
      .subscribe(
        (datas:any) => {
          console.log(datas);
          this.response = datas.hits.hits; 
          this.result.took_time = datas.took;
          this.result.hits_total = datas.hits.total;
          this.clothes = [];
          console.log(this.response);
          if(this.response.length > 0){
            this.have_result = true;
            this.response.forEach((value : any, index:number) =>{
              //console.log(value);
              let data:any = value._source;
              //console.log(data.name);
              this.clothes.push(data);
              /*
              this.clothes.name = data.name;
              this.clothes.site = data.site;
              this.clothes.gender = data.gender;
              this.clothes.url = data.url;
              this.clothes.img_url = data.img_url;
              this.clothes.price = data.price;
              this.clothes.store_price = data.store_price;
              this.clothes.color = data.color;
              this.clothes.colors = data.colors;
              this.clothes.sizes = data.sizes;
              this.clothes.last_updated = data.last_updated;
              */
            })
          }
        }
      )
    }//end of if
  } // end of getSearch

  OnSelectGender(event: any){
    this.genderOption = event.target.value;
  }


  @ViewChild(AdvanceSearchComponent) advanceSearch;

  showAdvance(){
    console.log(this.advanceSearch.advanceChoose);
  }

  ngOnInit() {
    
  }


}
