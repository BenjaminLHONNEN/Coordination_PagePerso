import {AfterContentChecked, AfterContentInit, AfterViewChecked, Component, OnInit} from '@angular/core';
import {options} from 'joi';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const event = new Event('OnCarouselLoad');
    document.dispatchEvent(event);
  }

}
