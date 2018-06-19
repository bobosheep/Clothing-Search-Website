import { Component, OnInit, Query} from '@angular/core';
import { NgModule } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
    selector: 'advance-search',
    templateUrl: 'advance-search.component.html',
    styles: [''],
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


    constructor(){}
    
    ngOnInit(){
      this.checkboxs = {
        websites: ['Lativ', '50%', 'Uniqlo'],
        categorys: ['上衣', '外套', '褲裙', '內衣', '內褲', '鞋子', '配件'],
        colors: ['紅','黃', '綠', '藍','粉','紫','灰','白', '黑'],
        size: ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']
  
      }
    }
  }