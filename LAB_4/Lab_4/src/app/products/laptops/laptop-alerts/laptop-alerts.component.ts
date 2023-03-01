import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Laptop } from '../laptop';

@Component({
    selector: 'app-product-alerts',
    templateUrl: './laptop-alerts.component.html',
    styleUrls: ['./laptop-alerts.component.css'],
})
export class LaptopAlertsComponent{
    @Input() product!: Laptop;
    @Output() notify = new EventEmitter();
}
