import { Component, OnInit, Query } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { fromEvent } from 'rxjs/observable/fromEvent';

import { SearchQuery , QueryBody} from '../query';
import { ClothesData } from '../clothes';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})


export class SearchResultComponent implements OnInit {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }

  query : string = '';

  have_result : boolean = false;

  queryBody : QueryBody = {
    query : {
      match : {
        name : this.query
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

  constructor(private http:HttpClient) { }

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
    if(this.query.length > 0){
      console.log(this.query);
      this.queryBody.query.match.name = this.query;
      this.http.post(`http://localhost:5000/search/lativ`, this.queryBody, this.httpOptions)
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

    }
  }

  ngOnInit() {
  }


}
