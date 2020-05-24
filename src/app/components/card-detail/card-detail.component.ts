import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  transition,
  query,
  style,
  stagger,
  animate,
} from '@angular/animations';

@Component({
  selector: 'corona-card',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query('mdc-card', style({ transform: 'translateX(-100%)' })),
        query(
          'mdc-card',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)' })),
          ])
        )
      ])
    ])
  ],
})
export class CardDetailComponent implements OnInit {
  @Input() cardData: any;

  constructor() {}

  ngOnInit(): void {}
}
