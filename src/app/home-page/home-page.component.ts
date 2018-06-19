import { Component, OnInit, Input } from '@angular/core';
import { Query } from '@angular/compiler/src/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { AppComponent } from '../app.component';
import { SearchQuery , QueryBody } from '../query' ;
import { parse } from 'querystring';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],

  animations:[
       
  ]
})
export class HomePageComponent implements OnInit {
  


  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }

  gender: boolean = true;

  queryClothes : QueryBody = {
    query : {
      query_string:{
        query: "category:衣服 AND gender:" + (this.gender ? "男" : "女")
      }
    },
    from : Math.floor( Math.random() * 10),
    size : 1
  }
  queryPants : QueryBody = {
    query : {
      query_string:{
        query: "category:(褲 OR 裙) AND gender:" + (this.gender ? "男" : "女")
      }
    },
    from : Math.floor(Math.random() * 10 ),
    size : 1
  }
  queryShoes : QueryBody = {
    query : {
      query_string:{
        query: "category:鞋 AND gender:" + (this.gender ? "男" : "女")
      }
    },
    from : Math.floor(Math.random() * 10),
    size : 1
  }

  

  resClothes : any;
  resPants : any;
  resShoes : any;
  package_price : number = 0;

  constructor(private http:HttpClient) { }

  getRandomMatch = () =>{
    this.queryClothes.from = Math.floor(Math.random() * 500);
    this.queryPants.from = Math.floor(Math.random() * 500);
    this.queryShoes.from = Math.floor(Math.random() * 20);
    this.package_price = 0;
    console.log('click');
    this.http.post(`http://localhost:5000/search`, this.queryClothes, this.httpOptions)
    .subscribe(
      (datas:any) =>{
        let data = datas.hits.hits;
        //console.log(data);
        if(data.length > 0){
          this.resClothes = data[0]._source;
          this.resClothes.price = parseInt(this.resClothes.price)
          this.package_price += this.resClothes.price;
          //console.log(this.resClothes);
        }
      }
    )

    this.http.post(`http://localhost:5000/search`, this.queryPants, this.httpOptions)
    .subscribe(
      (datas:any) =>{
        let data = datas.hits.hits;
        //console.log(data);
        if(data.length > 0){
          this.resPants = data[0]._source;
          this.resPants.price = parseInt(this.resPants.price)
          this.package_price += this.resPants.price;
          //console.log(this.resClothes);
        }
      }
    )

    this.http.post(`http://localhost:5000/search`, this.queryShoes, this.httpOptions)
    .subscribe(
      (datas:any) =>{
        let data = datas.hits.hits;
        //console.log(data);
        if(data.length > 0){
          this.resShoes = data[0]._source;
          this.resShoes.price = parseInt(this.resShoes.price)
          this.package_price += this.resShoes.price;
          //console.log(this.resClothes);
        }
      }
    )

    this.gender = !this.gender;
  }


  ngOnInit() {
    this.getRandomMatch();
  }

}
