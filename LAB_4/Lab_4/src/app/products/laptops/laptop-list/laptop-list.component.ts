import { Component } from '@angular/core';

import { Laptop} from '../laptop';

@Component({

    selector: 'app-product-list',
    templateUrl: './laptop-list.component.html',
    styleUrls: ['./laptop-list.component.css']

})

export class LaptopListComponent {

    products = [...Laptop];

    share() {

        window.alert('The product has been shared!');

    }

    onNotify() {

        window.alert('You will be notified when the product goes on sale');

    }

    goToURL() {

        window.location.href = 'https://t.me/yuckyballoon';

    }


}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

