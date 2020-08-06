import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <button (click)='show()' class="counter-button" >Click</button>
    <h2 class="counter">Clicked {{counter}} times!</h2>
    
  `,
  styles: [`
  .counter-button{
    font-size: 1rem;
    padding:5px 10px;
    color: #585858
  }
  `]
})
export class CounterComponent implements OnInit {
counter:number=42;
show(){
  this.counter+=1;
}

  constructor() { }

  ngOnInit(): void {
  }

}
