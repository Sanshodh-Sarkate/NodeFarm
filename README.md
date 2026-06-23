 🥑 Node Farm

A simple Node.js application built to understand the core concepts of backend development, server-side rendering, routing, file handling, and template-based page generation without using any external frameworks.

---

## 📌 Project Overview

Node Farm is a product catalog web application that reads product information from a JSON file and dynamically generates HTML pages using templates.

This project was developed as part of my Node.js learning journey to gain hands-on experience with Node.js core modules and understand how web servers work behind the scenes.

---

## ✨ Features

* ✅ HTTP Server built using Node.js
* ✅ Dynamic Routing
* ✅ Product Overview Page
* ✅ Individual Product Detail Pages
* ✅ JSON API Endpoint
* ✅ Template-Based HTML Rendering
* ✅ URL Parsing & Query Handling
* ✅ SEO-Friendly Slug Generation
* ✅ File System Operations using `fs`
* ✅ Modular Code Structure

---

## 🛠️ Technologies Used

| Technology       | Purpose                     |
| ---------------- | --------------------------- |
| Node.js          | Backend Runtime Environment |
| HTTP Module      | Server Creation             |
| File System (fs) | Reading Templates & Data    |
| URL Module       | Route & Query Parsing       |
| Slugify          | SEO-Friendly URLs           |
| HTML             | Frontend Templates          |

---

## 📂 Project Structure

```text
Node-Farm/
│
├── dev-data/
│   └── data.json
│
├── modules/
│   └── replaceTemplate.js
│
├── templates/
│   ├── template-overview.html
│   ├── template-card.html
│   └── template-product.html
│
├── txt/
├── final/
│
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

---

## ⚙️ Application Flow

### 1️⃣ Overview Page

Routes:

```bash
/
```

or

```bash
/overview
```

**Process:**

* Reads product data from `data.json`
* Generates product cards dynamically
* Injects cards into the overview template
* Sends the generated HTML page to the browser

---

### 2️⃣ Product Page

Route Example:

```bash
/product?id=0
```

**Process:**

* Extracts the product ID from the URL
* Retrieves the corresponding product
* Replaces placeholders inside the template
* Renders the product details page

---

### 3️⃣ API Endpoint

Route:

```bash
/api
```

Returns the complete JSON data used by the application.

---

## 📚 Node.js Concepts Practiced

### Core Modules

* HTTP Module
* File System Module (fs)
* URL Module

### Backend Concepts

* Server Creation
* Request & Response Handling
* Routing
* Query String Parsing
* Data Processing
* JSON Handling

### Rendering Concepts

* Server-Side Rendering (SSR)
* Dynamic HTML Generation
* Template Replacement

### Project Structure

* Code Modularization
* Reusable Functions
* Separation of Concerns

---

## 🚀 Installation & Setup

### Clone the Repository

```bash
git clone <your-repository-url>
```

### Navigate to Project Directory

```bash
cd Node-Farm
```

### Install Dependencies

```bash
npm install
```

### Start the Server

```bash
node index.js
```

### Open in Browser

```bash
http://127.0.0.1:8000
```

---

## 🎯 Learning Outcomes

Through this project, I learned:

* How Node.js creates and manages HTTP servers
* The difference between static and dynamic web pages
* How routing works without Express.js
* How Server-Side Rendering (SSR) works
* Reading and processing files using the File System module
* Working with JSON data
* Creating reusable templates
* Building dynamic web applications using Node.js core modules

---

## 📸 Project Preview

### Available Routes

| Route           | Description           |
| --------------- | --------------------- |
| `/`             | Product Overview Page |
| `/overview`     | Product Overview Page |
| `/product?id=0` | Product Details Page  |
| `/api`          | JSON Data API         |

---




**Node.js Learning Project**


