export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  img: string;
  link: string;
  rating: number;
  visible: boolean;
}

export const Product = [
  {
    id: 1,
    name: 'IPhone X',
    price: 799,
    description:
      'New Iphone for people who prefer comfort. This phone is best suitable for the people whol love HD quality images, and cinematic videos',
    img: 'https://cdn1.it4profit.com/brd2/q:68/g:sm/plain/s3://app/public/models/MH7L3/large/j/210104170048825947.jpg',
    link: 'https://kaspi.kz/shop/p/apple-iphone-xr-64gb-slim-box-chernyi-100691239/?c=750000000#!/item',
    rating: 10,
    visible: true
  },
  {
    id: 2,
    name: 'IPhone 13 Mini',
    price: 699,
    description:
      'A big bro of Iphone XL, everything in this phone is better than lil phones, and plus you can take picture at night by ease',
    img: 'data:image/jpeg;base64,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',
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-mini-128gb-chernyi-102298500/?c=750000000#!/item',
    rating: 4,
    visible: true
  },
  {
    id: 3,
    name: 'IPhone 11',
    price: 299,
    description:
      "a legendary phone with suitable price for people who doesn't like big phones, and wants to experience nostalgia",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQisa8Qqde5wpwhl3WPZcm1jo2Emk2sucRr7w&usqp=CAU',
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-64gb-slim-box-chernyi-100692387/?c=750000000#!/item',
    rating: 6,
    visible: true
  },
  {
    id: 4,
    name: 'Galaxy A23 6GB',
    price: 299,
    description: 'цвет черный тип экрана сенсорный и диагональ 6 и 6 дюйм',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb5/ha6/49792685244446/smartfon-samsung-galaxy-a23-sm-a235fzkkskz-128gb-black-104348541-1.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a23-6-gb-128-gb-chernyi-104348541/?c=750000000#!/item',
    rating: 9,
    visible: true
  },
  {
    id: 5,
    name: 'Смартфон Samsung Galaxy A03 Core 2 ГБ/32 ГБ черный',
    price: 299,
    description: 'Размер ОЗУ 2 гб 8 ядерный процессор',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha4/hce/47719147929630/samsung-galaxy-a03-core-2-32gb-cernyj-103153817-1.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a03-core-2-gb-32-gb-chernyi-103153817/?c=750000000#!/item',
    rating: 8,
    visible: true
  },
  {
    id: 6,
    name: 'Смартфон Samsung Galaxy A13 4 ГБ/128 ГБ черный',
    price: 299,
    description: 'C технологией NFC и с мультитач 128Гб памяти',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h90/h49/49613711966238/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279-1.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
    rating: 8,
    visible: true
  },
  {
    id: 7,
    name: 'Смартфон Samsung Galaxy A53 5G 6 ГБ/128 ГБ черный',
    price: 299,
    description: 'SUPER AMOLED экран акумулятор 5000 мАч',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/he7/49613532528670/smartfon-samsung-galaxy-a53-5g-128gb-sm-a536ezkdskz-black-104253225-1.jpg',
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-6-gb-128-gb-chernyi-104253225/?c=750000000#!/item',
    rating: 4,
    visible: true
  },
  {
    id: 8,
    name: 'Смартфон Xiaomi Redmi Note 10 Pro 8 ГБ/256 ГБ серый',
    price: 299,
    description: 'SnapDragon 732G серый цвет',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/h27/64487158087710/xiaomi-redmi-note-10-pro-8-gb-128-gb-seryi-107221005-1.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-10-pro-8-gb-256-gb-seryi-107221005/?c=750000000#!/item',
    rating: 5,
    visible: true
  },
  {
    id: 9,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ серый',
    price: 299,
    description: 'сенсорный IPS экран 8-ядерный Qualcomm',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbc/h0a/49939925205022/xiaomi-redmi-10c-4-gb-128-gb-seryj-104417231-1.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item',
    rating: 7,
    visible: true
  },
  {
    id: 10,
    name: 'Смартфон Xiaomi Redmi Note 11 Pro 8 ГБ/128 ГБ серый',
    price: 299,
    description: 'MediaTek Helio G96 128Gb store',
    img: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/h23/51166990368798/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386-1.jpg',
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item',
    rating: 8,
    visible: true
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
