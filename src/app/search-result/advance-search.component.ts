import { Component, OnInit, Query} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
    selector: 'advance-search',
    templateUrl: 'advance-search.component.html',
    styles: [`label{
      margin-left: 5px;
      margin-right: 5px;
    }`]
  })
  
  export class AdvanceSearchComponent  implements OnInit {
    
    checkboxs:any
    priceSelect: any

    priceOption:string

    advanceChoose:any

    constructor(){}
    
    OnPriceSelected(event:any){
      this.priceOption = event.target.value
    }
    toggleWeb(name:string){
      let idx = this.advanceChoose.site.indexOf(name);
      if(idx > -1){
        this.advanceChoose.site.splice(idx, 1);
      }
      else{
        this.advanceChoose.site.push(name);
      }
    }
    toggleCategory(name:string){
      let idx = this.advanceChoose.category.indexOf(name);
      if(idx > -1){
        this.advanceChoose.category.splice(idx, 1);
      }
      else{
        this.advanceChoose.category.push(name);
      }
      console.log(this.advanceChoose);
    }
    toggleColors(color:string){
      let idx = this.advanceChoose.color.indexOf(color);
      if(idx > -1){
        this.advanceChoose.color.splice(idx, 1);
      }
      else{
        this.advanceChoose.color.push(color);
      }
    }
    toggleSizes(size:string){
      let idx = this.advanceChoose.sizes.indexOf(size);
      if(idx > -1){
        this.advanceChoose.sizes.splice(idx, 1);
      }
      else{
        this.advanceChoose.sizes.push(size);
      }
    }

    ngOnInit(){
      this.checkboxs = {
        websites: ['lativ', 'fiftypercent', 'Uniqlo'],
        categorys: ['衣服', '外套', '褲裙', '內衣', '內褲', '鞋', '配件'],
        colors: ['紅', '橘','黃', '綠', '青', '藍','粉','紫','灰','白', '黑'],
        sizes: ['XS', 'S', 'M', 'L', 'XL']
  
      }
      this.priceSelect = {
        prices:['Default','200以下','200~500','500以上']
      }
      this.advanceChoose = {
        site:[],
        category:[],
        color:[],
        sizes:[]
      }
    }
  }