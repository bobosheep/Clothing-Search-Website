import { Component, OnInit, Query} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
    selector: 'advance-search',
    templateUrl: 'advance-search.component.html',
    styles: [`label{
      margin-left: 5px;
      margin-right: 5px;
    }`],
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
        websites: ['Lativ', '50%', 'Uniqlo'],
        categorys: ['上衣', '外套', '褲裙', '內衣', '內褲', '鞋子', '配件'],
        colors: ['紅','黃', '綠', '藍','粉','紫','灰','白', '黑'],
        sizes: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
  
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