---
title: Fungsi Anonymous pada Elixir
lang: id-ID
meta:
  - name: description
    content: Fungsi anonymous pada Elixir
  - name: keywords
    content: Elixir, Phoenix, Fungsi Anonymous
  - name: twitter:card
    content: summary
  - name: twitter:title
    content: Fungsi anonymous pada Elixir
  - name: twitter:description
    content: Fungsi anonymous pada Elixir
---

# Fungsi Anonymous pada Elixir

Fungsi pada Elixir adalah hal yang sangat penting dan paling diutamakan, salah satunya fungsi anonymous. Oleh karenanya mari kita bahas penggunaan salah fungsi yang paling banyak digandrungi oleh banyak banyak bahasa pemograman ini.

Penggunaan kode anonymous pada elixir dan bahasa functional lainnya tergolong sangat slim dan rapi (menurut saya). Oleh karenanya Membuat indah untuk dibaca, akan tetapi bila anda baru malah akan ribet untuk dibaca. :smile:

## Penggunaan
Oke langsung saja kita membuat contoh penggunaan `function anonymous`.

``` elixir
add = fn a, b -> a + b end
```

Penjelasan diatas adalah kita membuat sebuah fungsi anonymous yang kemudian menyimpannya di variabel `add`.
Selanjutnya `fn a, b` adalah 2 parameter untuk menampung data nantinya, kemudian `a + b end` parameter a dan b kita tambah, dengan `end` untuk mengakhiri eksekusi kode.

Nah untuk menjalankan fungsi yang telah kita buat tadinya kita cukup membuat `add.(10,10)`
``` elixir
add.(10,10)
```

Dimana `add` adalah variable yang menampung fungsi kita tadinya, selanjutnya dimasukkan `.` untuk mengeksekusi, bila tidak kita buat `.` makan tidak akan bekerja. Dan masukkan 2 nilai parameter yang kita inginkan. 

Begitulah cara sederhana menggunakan fungsi anonymous elixir, semoga berguna ya. :)

---
Sampai jumpa di artikel lainnya. bye :heart:
