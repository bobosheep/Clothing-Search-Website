import { Component, OnInit, Query, ViewChild } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { fromEvent } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { SearchQuery , QueryBody} from '../query';
import { ClothesData } from '../clothes';
import { AdvanceSearchComponent } from './advance-search.component'
import { log } from 'util';
import { shouldCallLifecycleInitHook } from '@angular/core/src/view';
import { element } from 'protractor';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
  animations:[
    trigger('HaveAdvance',[
      state('No',  style({
        opacity: 0,
        display:'none'
      })),
      state('Yes',  style({
        opacity: 1,
        display : 'block'
      })),
      transition('No=> Yes', animate('1s ease')),
      transition('Yes => No', animate('1s ease'))
    ])
  ]
})


export class SearchResultComponent implements OnInit {

  @ViewChild(AdvanceSearchComponent) advanceSearch;

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*'
    })
  }

  query : string = '';
  genderOption : string = 'ALL';
  genders = [
    { 'gender' : 'ALL' },
    { 'gender' : '男' },
    { 'gender' : '女' },
    { 'gender' : '童' }
  ];

  querySize = 20;
  have_result : boolean = false;
  advance_search : string = 'No';
  iscurrentpage : string = '';
  nowpage: number = 1;
  pages: any[] = [
    {
      page: 1, 
      iscurrentpage: 'is-current'
    },{
      page: 2, 
      iscurrentpage: ''
    },{
      page: 3, 
      iscurrentpage: ''
    },{
      page: 4, 
      iscurrentpage: ''
    },{
      page: 5, 
      iscurrentpage: ''
    },
  ];
  sortIsActive = {
    default : 'is-active',
    priceAsc : '',
    priceDesc : ''
  }
  sortChoose = {
    default : true,
    price : {
      asc: false,
      desc : false
    }
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
    let d1 = document.documentElement;
    let d2 = document.body;
    
    let ele1 = document.getElementById('go-top-icon');
    let ele2 = document.getElementById('go-top-icon');

    if (window.scrollY + d1.clientHeight == d1.scrollHeight){
      console.log('bottom~');
    }
    if (window.scrollY > 30 ){
      ele1.style.display = 'inline';
      ele2.style.display = 'inline';
    }
    else{
      ele1.style.display = 'none';
      ele2.style.display = 'none';
    }
  });

  gotop = () =>{
    let d1 = document.documentElement;
    let d2 = document.body;
    
    d1.scrollTop = 0;
    d2.scrollTop = 0;
  }

  launchModal = (id:string)=>{
    //console.log(id);
    let ele = document.getElementById(id);
    ele.classList.add("is-active");
  }

  closeModal = (id:string)=>{
    let ele = document.getElementById(id);
    ele.classList.remove("is-active");
  }
  
  chooseSort = (v : string) =>{
    if(v === 'default'){
      this.sortIsActive.default = 'is-active';
      this.sortIsActive.priceAsc = '';
      this.sortIsActive.priceDesc = '';
      this.sortChoose.default = true;
      this.sortChoose.price.asc = false;
      this.sortChoose.price.desc = false;
    }
    else if(v === 'price asc'){
      this.sortIsActive.default = '';
      this.sortIsActive.priceAsc = 'is-active';
      this.sortIsActive.priceDesc = '';
      this.sortChoose.default = false;
      this.sortChoose.price.asc = true;
      this.sortChoose.price.desc = false;

    }
    else if(v === 'price desc'){
      this.sortIsActive.default = '';
      this.sortIsActive.priceAsc = '';
      this.sortIsActive.priceDesc = 'is-active';
      this.sortChoose.default = false;
      this.sortChoose.price.asc = false;
      this.sortChoose.price.desc = true;

    }
  }

  getSearch = () => {
    let matcharr:any[] = [];
    let shouldarr:any[] = [];
    let queryBody:any;
    let sortOption: any[] = [];

    if(this.query.length >= 0){
      console.log(this.query);
      
      let gender = {term:{gender:  this.genderOption}};

      if(this.advance_search === 'Yes'){
        //如果有進階搜尋的話
        for (let i in this.advanceSearch.advanceChoose){
          //建立must 裡的bool should
          let bool_should = new Object();
          bool_should["bool"] = { should : []};
          for(let j in this.advanceSearch.advanceChoose[i]){
            let idx = this.advanceSearch.advanceChoose[i];
            if(i === 'sizes'){
              let should = new Object();
              should["match"] = {};
              should["match"][i] = idx[j];
              shouldarr.push(should);
            }
            else{
              let match = new Object();
              match["term"] = {};
              match["term"][i] = idx[j];
              bool_should["bool"]["should"].push(match);

            }
          }
          if(bool_should["bool"]["should"].length > 0)
            // 塞進must array
            matcharr.push(bool_should);
        }
      }
      if(this.query.length > 0)
        matcharr.push({match : {name : this.query}});
      //this.queryBody.query.query_string.query = 'name:' + this.query
      if( !(this.genderOption === 'ALL') )
        matcharr.push(gender);
      //this.nowpage = this.nowpage > 1 ? this.nowpage : 1;
      //this.nowpage = this.nowpage * 20 < this.result.hits_total ? this.nowpage : parseInt(this.result.hits_total / 20) + 1;

      if(!this.sortChoose.default && this.sortChoose.price.asc)
        sortOption.push({price: {order : 'asc'}})
      else if(!this.sortChoose.default && this.sortChoose.price.desc)
        sortOption.push({price: {order : 'desc'}})
      
      sortOption.push({_score:{order : 'desc'}})
      sortOption.push({last_updated:{order : 'desc'}})

      if(window.innerWidth <= 768)
        this.querySize = 10;

      queryBody = {
        query : {
          bool: {
              must: matcharr,       //{ match: { name: "" }},{ match : { website:""}}...
              should: shouldarr     //{ match: { name: "" }}
          }
        },
        from : (this.nowpage - 1) * 20,
        size : this.querySize,
        sort : sortOption
      }
      console.log(queryBody);



      this.http.post(`http://localhost:5100/search`, queryBody, this.httpOptions)
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
          }//end of if this.response.length > 0
          else{
            this.have_result = false;
          }
        }
      )//end http.post
      if(this.nowpage > 3){
        let mid = this.pages[2].page;
        this.pages.forEach((element) =>{
          element.page += this.nowpage - mid;
        })
      }
      else{
        this.pages.forEach((element, i) =>{
          element.page = i + 1;
        })
      }
      this.pages.forEach((element) =>{
        if(element.page == this.nowpage)
          element.iscurrentpage = 'is-current'
        else
          element.iscurrentpage = ''
      })

    }//end of if query.length() >= 0
  } // end of getSearch

  OnSelectGender(event: any){
    this.genderOption = event.target.value;
  }



  showAdvance(){
    console.log(this.advanceSearch.advanceChoose);
  }

  ngOnInit() {
    this.have_result = true;
    this.getSearch();


  }


}
