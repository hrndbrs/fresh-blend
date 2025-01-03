# Fresh Blend

Hernando Borosi
<br>
Informatika
<br>
1003240009
<br>

**Fresh Blend** adalah aplikasi website full-stack yang dibangun menggunakan **Angular v19**, **Express v4**, dan **TailwindCSS v3.4.16** dengan bahasa pemrograman **TypeScript**. Website ini menyajikan landing page informatif dan halaman daftar produk dengan fitur pagination.

---

## Fitur Utama

1. **Landing Page**

   - Menyediakan informasi tentang Fresh Blend.
   - Menampilkan daftar produk populer beserta jumlah upvotenya.

2. **Product List Page**

   - Menampilkan daftar lengkap produk.
   - Pagination untuk navigasi antar halaman produk.

3. **Product Detail Page**

   - Menampilkan detail dari produk berdasarkan route param id.
   - Menampilkan tombol untuk meng-upvote produk

4. **Arsitektur MVC**

   - Aplikasi dibangun menggunakan arsitektur Model-View-Controller.

5. **Database**

   - MySQL dengan ORM Sequelize

---

## Teknologi yang Digunakan

- **Frontend**: Angular v19
- **Backend**: Express v4
- **Styling**: TailwindCSS v3.4.16
- **Bahasa**: TypeScript
- **Database**: MySQL, Sequelize

---

## Persyaratan

- **Node.js** versi 20 ke atas
- **NPM** versi 6 ke atas

---

## Instalasi dan Menjalankan Aplikasi

1. **Clone Repository**

   ```bash
   git clone https://github.com/hrndbrs/fresh-blend.git
   cd fresh-blend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Environment Variables**

- DB_DIALECT -> Database relasional yang digunakan (cth: mysql)
- DB_HOST -> IP Address dimana database dijalankan (cth: 127.0.0.1)
- DB_USERNAME -> Username database (cth: root)
- DB_PASSWORD -> Password database
- DB_PORT -> Port database (cth: 3306)
- DB_NAME -> Nama database

4. **Jalankan File Migration**

   ```bash
   npm run migrate:up
   ```

5. **Build dan Jalankan Aplikasi**

   ```bash
   npm start
   ```

6. **Akses Aplikasi**
   - Secara default, aplikasi dapat diakses melalui: `http://localhost:4000`

---

## Struktur Proyek

```
.
├── README.md
├── .env.example                          # List environment variable yang digunakan dan contoh valuenya
├── angular.json                          # Konfigurasi proyek Angular
│
├── db
│   ├── migrations/                       # Folder file migration
│   └── index.ts                          # File yang dijalankan untuk melakukan migrasi database
│
├── package.json                          # File konfigurasi npm
├── postcss.config.js                     # Konfigurasi PostCSS untuk TailwindCSS
│
├── src
│   ├── api                               # Folder yang menyimpan handler backend api
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── middlewares/
│   │   └── routes
│   │
│   ├── app                               # Folder utama aplikasi Angular
│   │   ├── app.component.html            # Root HTML untuk komponen Angular
│   │   ├── app.component.ts              # Root TypeScript untuk Angular
│   │   ├── app.config.server.ts          # Konfigurasi server Angular
│   │   ├── app.config.ts                 # Konfigurasi utama Angular
│   │   ├── app.routes.server.ts          # Routing server-side rendering
│   │   ├── app.routes.ts                 # Routing client-side
│   │   └── pages/                        # Folder yang menyimpan komponen halaman
│   │
│   ├── index.html                        # HTML utama
│   │
│   ├── lib
│   │   ├── components/                   # Folder komponen
│   │   ├── config/                       # Folder file konfigurasi (database dll.)
│   │   ├── constants/
│   │   ├── services/                     # Folder service
│   │   ├── types/                        # Definisi type untuk Typescript
│   │   └── utils/                        # Fungsi utilitas
│   │
│   ├── main.server.ts                    # Entry point server Express
│   ├── main.ts                           # Entry point Angular
│   ├── server.ts                         # Server rendering konfigurasi
│   └── styles.css                        # Styling utama
│
├── tailwind.config.ts                    # Konfigurasi TailwindCSS
├── tsconfig.app.json                     # Konfigurasi TypeScript untuk aplikasi
└── tsconfig.json                         # Konfigurasi utama TypeScript
```
