import { Component, OnInit, Input } from '@angular/core';
import { Query } from '@angular/compiler/src/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { AppComponent } from '../app.component';
import { SearchQuery , QueryBody } from '../query' ;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  


  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }

  queryClothes : QueryBody = {
    query : {
      query_string:{
        query: "category:衣服 AND gender:(男 OR 女)"
      }
    },
    from : Math.floor( Math.random() * 10),
    size : 1
  }
  queryPants : QueryBody = {
    query : {
      query_string:{
        query: "category:褲裙 AND gender:(男 OR 女)"
      }
    },
    from : Math.floor(Math.random() * 10 ),
    size : 1
  }
  queryShoes : QueryBody = {
    query : {
      query_string:{
        query: "category:鞋 AND gender:(男 OR 女)"
      }
    },
    from : Math.floor(Math.random() * 10),
    size : 1
  }

  

  resClothes : any;
  resPants : any;
  resShoes : any;

  constructor(private http:HttpClient) { }

  getRandomMatch = () =>{
    this.queryClothes.from = Math.floor(Math.random() * 2000);
    this.queryPants.from = Math.floor(Math.random() * 2000);
    this.queryShoes.from = Math.floor(Math.random() * 200);

    console.log('click');
    this.http.post(`http://localhost:5000/search`, this.queryClothes, this.httpOptions)
    .subscribe(
      (datas:any) =>{
        let data = datas.hits.hits;
        //console.log(data);
        if(data.length > 0){
          this.resClothes = data[0]._source;
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
          //console.log(this.resClothes);
        }
      }
    )
  }


  ngOnInit() {
    this.getRandomMatch();
  }

}
