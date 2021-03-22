---
layout: post
author: Rahmat Agung Julians
image: Serverless
comments: false
title: Serverless pada Cloud Computing
description: Overview tentang penggunaan Serverless
---

### Arsitektur Serverless
Pada serverless ini akan mengurangi beban developer saat mendeploy aplikasi, hal ini dikarenakan beberapa aspek yang dibutuhkan oleh aplikasi akan langsung ditangani oleh penyedia server (provider).

Untuk mendukung arsitektur serverless, cloud providers umumnya menyediakan layanan serverless untuk komputasi, basis data, penyimpanan objek/file, api gateway, autentikasi, layanan email, notifikasi, logging, monitoring dan sebagainya. 

### Kemampuan Komputasi
Cloud provider akan banyak berperan sebagai pengeksekusi kode aplikasi saat ada kejadian tertentu (event-driven) dan yang lainnya seperti http/api gateway, basis data, penyimpan object/file, queue, dan sebagainya.

Model pada komputasi :
1. Backend-as-a-Service(BaaS)
2. Function-as-a-Service(FaaS)

##### Daftar Layanan 

###### 1. AWS Lambda 
AWS merupakan provider pioner yang sudah sangat banyak digunakan, layanan ini diberikan pada publik tepat pada tahun 2014.

Beberapa bahasa pemrograman atau runtime yang didukung :
1. NodeJS 12 dan 10
2. Python 2.7, 3.6, 3.7 dan 3.8
3. Ruby 2.5 dan 2.7
4. Java 8 dan 11
5. Go 1.x
6. NET Core 2.1 dan 3.1
7. Custom Runtime


###### 2. Google Cloud Functions
Layanan ini diluncurkan oleh Google Cloud Platform tepat pada tahun 2016.

Beberapa bahasa pemrograman atau runtime yang didukung :
1. NodeJS 10
2. Python 3.7
3. Go 1.11 dan 1.13
4. Java 11

###### 3. Microsoft Azure Functions
Sesuai dengan namanya, Microsoft meluncurkan ini pada tahun 2016 yang dimana menjadi penantang kuat dari AWS Lambda dan sudah cukup lama dirilis secara resmi ke publik yaitu Januari 2017.

Beberapa bahasa pemrograman atau runtime yang didukung :
1. NodeJS 6, 8, 10 dan 12
2. .NET Framework 4.7, .NET Core 2.2 dan 3.1
3. Java 8
4. PowerShell Core 6
5. Python 3.6, 3.7 dan 3.8

### Basis Data
Tentu saja ini menjadi bagian paling penting sebagai penyedia layanan server.

#### 1. SQL
1. Amazon Aurora Serverless (kompatibel dengan MySQL dan PostgreSQL)
2. Azure SQL Database Serverless (Microsoft SQL Server)

#### 2. NoSQL
1. Amazon DynamoDB
2. MongoDB Atlas
3. FaunaDB
4. Google Cloud Firestore

### Penyimpanan 
Untuk menyimpan data seperti gambar, video dan lainnya. 
1. Amazon Simple Storage Service (S3)
2. Google Cloud Storage
3. Azure Blob Storage

### Keuntungan
1. Proses deploy aplikasi yang mudah dan cepat
2. Mengurani pengeluaran biaya
3. Developer lebih fokus pada pengembangan aplikasi / program

### Kekurangan
1. Monitoring dan Debugging menjadi lebih rumit
2. Resource Limit 
3. Performa dan Latency menjadi lebih besar

<h4><b class="title-referensi">Referensi</b></h4> 
--- 
<ol>
    <li>
        <a href="https://serverless.jagoreact.com/read/mengenal-serverless">https://serverless.jagoreact.com/read/mengenal-serverless</a>
    </li>
    <li>
        <a href="https://www.simform.com/serverless-architecture-guide/">https://www.simform.com/serverless-architecture-guide/</a>
    </li>
</ol>