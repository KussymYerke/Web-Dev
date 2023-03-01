import { Component } from '@angular/core';

import { Mouses } from '../mouses';

@Component({

    selector: 'app-product-list',
    templateUrl: './mouse-list.component.html',
    styleUrls: ['./mouse-list.component.css']

})

export class MouseListComponent {

    products = [...Mouses];

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

