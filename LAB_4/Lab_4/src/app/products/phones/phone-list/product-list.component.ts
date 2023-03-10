import { Component } from '@angular/core';

import { Product } from '../phones';

@Component({

  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})

export class ProductListComponent {

  products = [...Product];

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

