# Belajar Prisma + NestJS

Prisma adalah Modern ORM based on Typescript.

- Saat pembuatan prisma, kita wajib membuat Skema
- Tidak ada Pembuatan Model di dalam Prisma

Tapi nanti Model nya itu generate otomatis dari pembuatan Skema.

Jadi ketika kita buat skema itu udah otomatis jadi model dan bisa langsung dipanggil.

---

## Setup Prisma

```
yarn add prisma --dev
```

setelah itu :

```
yarn prisma init
```


**Setelah menjalankan perintah diatas, akan terbentuk file baru :**

- .env = berisi configurasi koneksi database
- prisma/schema.prisma = file untuk membuat skema

Tapi default nya datasource nya adalah postgre, disini kita akan ganti memakai MySQL bisa coba pakai planetscale.com

Planetscale sendiri adalah MySQL versi Cloud Serverless dan juga Versi Gratisan.
Lalu tinggal daftar saja terus connect database -> prisma

Nanti ada tab pilih yang prisma

Terus nanti muncul kode untuk di .env sama untuk di prisma.schema nya.
Kita langsung copy paste saja .env

Terus gita ganti di schema.prisma di bagian provider nya menjadi mysql.
Nah, sekarang kita tinggal testing apakah database nya sudah tersambung dengan project kita atau belum.

Kita coba pakai Aplikasi **"DBeaver"**.


Nah disini nanti kita bisa cek di .env nya

* localhost yg setelah @ seperti :
aws.connect.psdb.cloud

* lalu di .env yang awal itu username (contoh):
lvpey866tso2u6f0p7az

* Password nya ada di : setelah nama username :
pscale_pw_tOmDETBGbprHzKr7wh1JXxnfnaurrltqIvJcRUMsOuC

atau bisa cek di prisma nya untuk username dan password
terus kita connect ke database pakai dbeaver.

Jika disuruh download driver, download saja, nanti baru ke connect dan double klik kita bisa cek database nya.


**Kalau berhasil connect ada pesan:**

Connected (1000ms)
Server : MySql
Driver : Mysql Connector

*Catatan:*
DBeaver nya jika bisa pakai yang terbaru agar tidak terjadi bug, saya pakai yang lama error mulu karena ada bug.
