import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Watch } from '../watch';

@Component({
    selector: 'app-product-alerts',
    templateUrl: './watch-alerts.component.html',
    styleUrls: ['./watch-alerts.component.css'],
})
export class WatchAlertsComponent {
    @Input() product!: Watch;
    @Output() notify = new EventEmitter();
}
