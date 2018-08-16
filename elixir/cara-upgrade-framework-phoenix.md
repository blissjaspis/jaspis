---
title: Cara Upgrade Framework Phoenix
lang: id-ID
meta:
  - name: description
    content: Cara upgrade framework phoenix elixir
  - name: keywords
    content: Elixir, Phoenix, Upgrade
---

# Cara Upgrade Framework Phoenix

Pada kesempatan pertama tutorial elixir ini saya akan memberikan, artikel singkat cara upgrade *framework* Elixir yaitu Phoenix. Ya memang bisa dibilang dokumentasi tentang Phoenix itu sendiri belum cukup 'memadai' untuk memenuhi pendatang yang baru masuk ke dunia Phoenix.

Saya juga kerap kesulitan untuk menelusuri lebih cepat daripada dokumentasi Phoenix tersebut. oleh karena itu saya ingin memberikan artikel ini sebagai pengingat juga dikala saya nantinya bisa lupa. heheh

1. Masukkan kode dibawah pada `Terminal/Command Line` anda.
``` elixir
mix archive.install https://github.com/phoenixframework/archives/raw/master/phx_new.ez
```
2. Lalu ketik Y untuk replace dari yang sudah ada sebelumnya.
![Mix Terminal](/images/mix-upgrade-terminal.png)
3. Kemudian `mix local.phx` dan ketik `y` lagi untuk *override* kembali.
``` elixir
mix local.phx
```

## Untuk project yang sudah ada

1. Update file `mix.exs` ke versi phoenix terbaru. saat artikel ini dibuat versi terbaru `1.3.4`
``` elixir
def deps do
  [{:phoenix, "~> 1.3.4"},
   ...]
end
```
2. Masukkan pada Terminal perintah dibawah.
``` elixir
mix deps.update --all
```
3. Selesai.

---
Ya mungkin itu aja ya? :) Sampai jumpa di artikel lainnya. bye :heart:

Bila ada kekurangan anda bisa membantu meningkatkan artikel ini, dengan link dibawah.
