import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

import { SearchQuery , QueryBody} from './query' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

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
}
