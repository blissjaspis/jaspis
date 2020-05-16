---
title: Mengambil Random Data Dari Database Menggunakan Eloquent
tags: elequent
category: Laravel
excerpt: Tarik data random menjadi lebih mudah
created: 2018-07-12
image: ./images/josh-spires-dronenr-sQalFlXIsLs-unsplash.jpg
image_caption: Mengambil Random Data Dari Database Menggunakan Eloquent
author: author1
---

## Pendahuluan
Pasti anda pernah menginginkan data yang anda tarik dari Database itu menghasilkan data secara random. Ya karena secara harafiah laravel mengambil data dari database dari `baru -> lama`.

Mungkin banyak cara untuk mengambil data random di Laravel, tetapi disini saya memberikan 2 cara yang saya tahu.

1. Mengunakan `Random()`
2. Menggunakan Eloquent Query Raw

## Menggunakan Random()
Memang cara termudah mengambil data secara random/acak adalah menggunakan fungsi method collection ini. Akan tetapi yang menjadi permasalahan nya ialah, bila data yang tarik tidak lebih besar sama dengan `>=` nilai random yang anda masukkan akan mengeluarkan `InvalidArgumentException`.


``` php
Laravel::where('name', $name)->get()->random(12);
```

Oleh karena itu bagi anda yang ingin menggunakan method tersebut, sebaiknya anda harus mengetahui dengan pasti nilai keluar dari data yang anda tarik.

## Menggunakan Laravel Query Raw

Cara ke-2 ini bisa dibilang yang paling saya sarankan, kenapa? karena tidak seperti `random()` bila tidak lebih besar `>=` dari nilai yang ditarik mengeluarkan error, maka cara ke-2 ini tidak akan mengeluarkan error tersebut.

``` php
Laravel::where('name', $name)->orderByRaw('RAND()')->take(12)->get();
```

Selesai  🎉 Ya mungkin segitu dulu ya. thanks 😃