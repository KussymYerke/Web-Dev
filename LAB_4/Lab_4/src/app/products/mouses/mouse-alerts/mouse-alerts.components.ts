import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Mouses } from '../mouses';

@Component({
    selector: 'app-product-alerts',
    templateUrl: './mouse-alerts.component.html',
    styleUrls: ['./mouse-alerts.component.css'],
})
export class MouseAlertsComponents {
    @Input() product!: Mouses;
    @Output() notify = new EventEmitter();
}
