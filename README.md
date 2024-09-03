# Zimmet Yönetim Sistemi

Bu proje, bir zimmet yönetim sistemi uygulamasıdır. Bu sistemde kullanıcılar, birimlere bağlı ürünlerin zimmetlenmesi, kategorilere göre ürünlerin yönetimi gibi işlemleri gerçekleştirebilirler. Proje, Node.js ve PostgreSQL kullanılarak geliştirilmiştir.

## İçindekiler

- [Kurulum](#kurulum)
- [Proje Yapısı](#proje-yapısı)
- [API Endpointleri](#api-endpointleri)
- [Veritabanı Tablolaru](#veritabanı-tabloları)

## Kurulum

1. Bu projeyi klonlayın:

   ```bash
   git clone https://github.com/kahramankaradavut/zimmet-projesi.git

2. Gerekli bağımlılıkları yükleyin:

   ```bash
   npm install
   npm init -y
   npm install express pg body-parser
3. Veritabanı bağlantısını yapılandırmak için config/database.js dosyasını kullanın.

4. PostgreSQL üzerinde zimmet adında bir veritabanı oluşturun.

5. Sunucuyu başlatın:

   ```bash
   npm index.js

6. Sunucu, http://localhost:3000 adresinde çalışacaktır.

## Proje Yapısı
   ```lua
   zimmet-projesi/
    ├── config/
    │   └── database.js
    ├── models/
    │   ├── Units.js
    │   ├── Users.js
    │   ├── Items.js
    │   ├── Assignments.js
    │   └── Categories.js
    ├── routes/
    │   ├── units.js
    │   ├── users.js
    │   ├── items.js
    │   ├── assignments.js
    │   └── categories.js
    ├── controllers/
    │   ├── unitsController.js
    │   ├── usersController.js
    │   ├── itemsController.js
    │   ├── assignmentsController.js
    │   └── categoriesController.js
    ├── index.js
    └── package.json
   ```

## API Endpointleri

### Units (Birimler)

- `POST /units`: Yeni bir birim oluşturur.
- `GET /units`: Tüm birimleri getirir.
- `GET /units/:id`: Belirtilen ID'ye sahip birimi getirir.
- `PUT /units/:id`: Belirtilen ID'ye sahip birimi günceller.
- `DELETE /units/:id`: Belirtilen ID'ye sahip birimi siler.

- `GET /units/:unit_id/items/count`: Belirtilen birimdeki ürün sayısını döner.
- `GET /units/:unit_id/users/count`: Belirtilen birimdeki kullanıcı sayısını döner.


### Users (Kişiler)

- `POST /users`: Yeni bir kullanıcı oluşturur.
- `GET /users`: Tüm kullanıcıları getirir.
- `GET /users/:id`: Belirtilen ID'ye sahip kullanıcıyı getirir.
- `PUT /users/:id`: Belirtilen ID'ye sahip kullanıcıyı günceller.
- `DELETE /users/:id`: Belirtilen ID'ye sahip kullanıcıyı siler.

- `GET /users/:user_id/assignments/details`: Belirtilen kullanıcıya ait zimmet detaylarını döner.
- `GET /users/unit/:unit_id`: Belirtilen birimdeki kullanıcıları döner.


### Items (Ürünler)

- `POST /items`: Yeni bir ürün oluşturur.
- `GET /items`: Tüm ürünleri getirir.
- `GET /items/:id`: Belirtilen ID'ye sahip ürünü getirir.
- `PUT /items/:id`: Belirtilen ID'ye sahip ürünü günceller.
- `DELETE /items/:id`: Belirtilen ID'ye sahip ürünü siler.
- `GET /items/category/:category_id`: Belirtilen kategoriye ait ürünleri döner.
- `GET /items/unit/:unit_id`: Belirtilen birime ait ürünleri döner.
- `GET /items/:item_id/status`: Belirtilen ürünün zimmet durumunu döner.


### Assignments (Zimmetler)


- `POST /assignments`: Yeni bir zimmet oluşturur.
- `GET /assignments`: Tüm zimmetleri getirir.
- `GET /assignments/:id`: Belirtilen ID'ye sahip zimmeti getirir.
- `PUT /assignments/:id`: Belirtilen ID'ye sahip zimmeti günceller.
- `DELETE /assignments/:id`: Belirtilen ID'ye sahip zimmeti siler.
- `GET /assignments/user/:user_id/count`: Belirtilen kullanıcıya zimmetli ürün sayısını döner.
- `GET /assignments/user/:user_id/unit`: Belirtilen kullanıcının çalıştığı birimi döner.
- `GET /assignments/user/:user_id/categories`: Belirtilen kullanıcının zimmetli ürün kategorilerini döner.
- `GET /assignments/user/:user_id/distinct-items`: Belirtilen kullanıcıya zimmetli farklı ürün sayısını döner.
- `GET /assignments/user/:user_id/items`: Belirtilen kullanıcıya zimmetli ürünlerin listesini döner.
- `GET /assignments/level/:assignment_level/items`: Belirtilen zimmet seviyesindeki ürünleri döner.


### Categories (Kategoriler)


- `POST /categories`: Yeni bir kategori oluşturur.
- `GET /categories`: Tüm kategorileri getirir.
- `GET /categories/:id`: Belirtilen ID'ye sahip kategoriyi getirir.
- `PUT /categories/:id`: Belirtilen ID'ye sahip kategoriyi günceller.
- `DELETE /categories/:id`: Belirtilen ID'ye sahip kategoriyi siler.
- `GET /categories/:category_id/assigned-items/count`: Belirtilen kategoriye ait zimmetli ürün sayısını döner.
- `GET /categories/:category_id/items`: Belirtilen kategoriye ait ürünleri döner.




## Veritabanı Tabloları

### 1. Units Tablosu

| Kolon Adı  | Veri Tipi | Açıklama              |
|------------|-----------|-----------------------|
| id         | INT       | Birincil anahtar (PK) |
| name       | VARCHAR   | Birim ismi         |
| description      | VARCHAR   | Birimin açıklaması |


### 2. Users Tablosu

| Kolon Adı  | Veri Tipi | Açıklama              |
|------------|-----------|-----------------------|
| id         | INT       | Birincil anahtar (PK) |
| name    | VARCHAR       | Kişi ismi |
| email      | VARCHAR   | Kişinin email'i      |

### 3. Items Tablosu

| Kolon Adı  | Veri Tipi | Açıklama              |
|------------|-----------|-----------------------|
| id         | INT       | Birincil anahtar (PK) |
| name    | VARCHAR       | Ürün ismi |
| description    | TEXT       | Ürün açıklaması|
| unit_id    | INT      | Birim ID (FK)        |
| caretgory_id | INT | Kategori ID (FK)  |
| barcode | VARCHAR(50) | Ürün barkodu (UNIQUE)   |
| brand | VARCHAR(100) |Ürünün markası    |
| model | VARCHAR(100) | Ürünün modeli |
| specification | JSONB | Ürünün spesifik özellikleri   |

### 4. Assignments Tablosu

| Kolon Adı  | Veri Tipi | Açıklama              |
|------------|-----------|-----------------------|
| id         | INT       | Birincil anahtar (PK) |
| item_id    | INT       | Ürün ID (FK) |
| user_id    | INT       | Kişi ID (FK)|
| assignment_level    | INT      | Zimmetlenme derecesi       |
| status | Boolean | Zimmet durumu (aktif/pasif)  |
| assigned_date | timestamp |Zimmetlenme tarihi   |

### 5. Categories Tablosu

| Kolon Adı  | Veri Tipi | Açıklama              |
|------------|-----------|-----------------------|
| id         | INT       | Birincil anahtar (PK) |
| name    | VARCHAR       | Kategori ismi |
| description    | TEXT       | Kategori açıklaması|









