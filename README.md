# Fresh Blend

Hernando Informatika 1003240009
<br>
<br>
**Fresh Blend** adalah aplikasi website full-stack yang dibangun menggunakan **Angular v19**, **Express v4**, dan **TailwindCSS v3.4.16** dengan bahasa pemrograman **TypeScript**. Website ini menyajikan landing page informatif dan halaman daftar produk dengan fitur pagination.

---

## Fitur Utama

1. **Landing Page**

   - Menyediakan informasi tentang Fresh Blend.
   - Menampilkan daftar produk populer.

2. **Halaman List Product**

   - Menampilkan daftar lengkap produk.
   - Pagination untuk navigasi antar halaman produk.

3. **Arsitektur MVC**

   - Aplikasi dibangun menggunakan arsitektur Model-View-Controller.

4. **Data Produk**

   - Disimpan dalam format JSON.

---

## Teknologi yang Digunakan

- **Frontend**: Angular v19
- **Backend**: Express v4
- **Styling**: TailwindCSS v3.4.16
- **Bahasa**: TypeScript
- **Data Storage**: JSON

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

3. **Build dan Jalankan Aplikasi**

   ```bash
   npm start
   ```

4. **Akses Aplikasi**
   - Secara default, aplikasi dapat diakses melalui: `http://localhost:4000`

---

## Struktur Proyek

```
.
├── README.md
├── angular.json            # Konfigurasi proyek Angular
├── db
│   └── products.json       # Data produk disimpan dalam format JSON
├── package.json            # File konfigurasi npm
├── postcss.config.js       # Konfigurasi PostCSS untuk TailwindCSS
├── src
│   ├── app                 # Folder utama aplikasi Angular
│   │   ├── api             # API backend yang digunakan di frontend
│   │   │   ├── controllers
│   │   │   │   └── product.controller.ts  # Controller produk
│   │   │   ├── middlewares
│   │   │   │   └── error-handler.middleware.ts # Middleware error handler
│   │   │   └── routes
│   │   │       ├── index.ts              # Entrypoint untuk /api
│   │   │       └── product.route.ts      # Routing untuk /products
│   │   ├── app.component.html            # Root HTML untuk komponen Angular
│   │   ├── app.component.ts              # Root TypeScript untuk Angular
│   │   ├── app.config.server.ts          # Konfigurasi server Angular
│   │   ├── app.config.ts                 # Konfigurasi utama Angular
│   │   ├── app.routes.server.ts          # Routing server-side rendering
│   │   ├── app.routes.ts                 # Routing client-side
│   │   └── pages
│   │       ├── landing                   # Halaman landing page
│   │       │   ├── landing.component.html
│   │       │   └── landing.component.ts
│   │       └── products                  # Halaman daftar produk
│   │           ├── product-list.component.html
│   │           └── product-list.component.ts
│   ├── index.html                        # HTML utama
│   ├── lib                               # Library komponen
│   │   ├── components
│   │   │   ├── banner                    # Komponen banner
│   │   │   │   ├── banner.component.html
│   │   │   │   └── banner.component.ts
│   │   │   ├── card                      # Komponen card
│   │   │   │   ├── card.component.html
│   │   │   │   └── card.component.ts
│   │   │   ├── footer                    # Komponen footer
│   │   │   │   ├── footer.component.html
│   │   │   │   └── footer.component.ts
│   │   │   ├── navbar                    # Komponen navbar
│   │   │   │   ├── navbar.component.html
│   │   │   │   └── navbar.component.ts
│   │   │   ├── pagination                # Komponen pagination
│   │   │   │   ├── pagination.component.css
│   │   │   │   ├── pagination.component.html
│   │   │   │   └── pagination.component.ts
│   │   │   └── sections
│   │   │       └── landing
│   │   │           └── about             # Section about untuk landing page
│   │   │               ├── about.component.html
│   │   │               └── about.component.ts
│   │   ├── services
│   │   │   └── product.service.ts        # Service untuk merequest produk
│   │   ├── types/                        # Definisi type untuk Typescript
│   │   └── utils/                        # Fungsi utilitas
│   ├── main.server.ts                    # Entry point server Express
│   ├── main.ts                           # Entry point Angular
│   ├── server.ts                         # Server rendering konfigurasi
│   └── styles.css                        # Styling utama
├── tailwind.config.ts                    # Konfigurasi TailwindCSS
├── tsconfig.app.json                     # Konfigurasi TypeScript untuk aplikasi
└── tsconfig.json                         # Konfigurasi utama TypeScript
```
