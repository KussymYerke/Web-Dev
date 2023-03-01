import { Component } from '@angular/core';

import { Watch } from '../watch';

@Component({

    selector: 'app-product-list',
    templateUrl: './watch-list.component.html',
    styleUrls: ['./watch-list.component.css']

})

export class WatchListComponent {

    products = [...Watch];

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

