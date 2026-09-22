Astera Stay 🏨

A full-stack hotel and stay listing platform built with Node.js, Express.js, MongoDB, EJS, Passport.js, Cloudinary, and MapTiler. Astera Stay allows authenticated users to create and manage property listings, upload images, explore stays, view location data on a map, and add reviews.

🌐 Live Demo

Live Application: https://major-project-4-k0ls.onrender.com

The application is deployed on Render. The live service may take a few moments to wake up after inactivity.

✨ Features

🔐 User Authentication

User registration and login

Secure password authentication using Passport Local / Passport-Local-Mongoose

Session-based authentication

Logout functionality

Protected routes for authenticated users

🏠 Property Listings

Browse all available listings

View detailed information for individual listings

Create new listings

Edit existing listings

Delete listings

Listing ownership authorization

🖼️ Image Uploads

Upload property images through Multer

Cloudinary integration for cloud-based image storage

Image preview/compression support through Cloudinary transformations

🗺️ Location & Maps

Convert a property location into geographic coordinates using MapTiler Geocoding API

Store listing coordinates as GeoJSON Point data

Display location information using the frontend map integration

⭐ Reviews & Ratings

Authenticated users can add reviews

Ratings from 1 to 5

Review validation using Joi

Review deletion for authenticated users

Reviews are linked to their corresponding listings

🛡️ Validation & Security

Joi request validation

Authentication and authorization middleware

Listing-owner authorization

Protected CRUD operations

Environment variables for credentials and API keys

Centralized Express error handling

💬 User Feedback

Flash messages for success and error notifications

Login redirect handling for protected routes

☁️ Deployment Ready

MongoDB Atlas database

Cloudinary image storage

Render deployment support

Environment-based configuration

🧰 Tech Stack

Backend

Node.js

Express.js

MongoDB

Mongoose

Frontend

EJS

EJS-Mate

HTML / CSS / JavaScript

Bootstrap-based styling

Authentication & Sessions

Passport.js

Passport-Local

Passport-Local-Mongoose

Express Session

Connect-Mongo

APIs & Cloud Services

Cloudinary — image storage

MapTiler — geocoding and map functionality

Validation & Utilities

Joi — request validation

Multer — multipart/form-data and image uploads

Axios — API requests

Method-Override — PUT/DELETE form support

Connect-Flash — flash messages

Deployment

Render — application hosting

MongoDB Atlas — database hosting

🏗️ Application Architecture

Astera Stay follows a modular MVC-style architecture:

                    ┌──────────────────────┐
                    │       Browser        │
                    └──────────┬───────────┘
                               │ HTTP Request
                               ▼
                    ┌──────────────────────┐
                    │   Express.js Server  │
                    └──────────┬───────────┘
                               │
                ┌──────────────┼──────────────┐
                ▼              ▼              ▼
          ┌──────────┐   ┌───────────┐  ┌────────────┐
          │  Routes  │   │Middleware │  │Controllers │
          └────┬─────┘   └───────────┘  └─────┬──────┘
               │                              │
               └──────────────────────────────┘
                                              │
                                              ▼
                                      ┌──────────────┐
                                      │   Mongoose   │
                                      │    Models    │
                                      └──────┬───────┘
                                             │
                                             ▼
                                      ┌──────────────┐
                                      │ MongoDB Atlas│
                                      └──────────────┘

       External Services:
       ├── Cloudinary → Property image storage
       └── MapTiler   → Location geocoding / map data

🔄 Core Workflow

User Authentication

Sign Up
   ↓
Create User
   ↓
Passport Authentication
   ↓
Session Created
   ↓
Authenticated User

Create Listing

User opens /listings/new
          ↓
     Submit Listing
          ↓
 Authentication Check
          ↓
      Joi Validation
          ↓
      Image Upload
          ↓
       Cloudinary
          ↓
 MapTiler Geocoding API
          ↓
  Coordinates Generated
          ↓
   MongoDB Listing Saved
          ↓
      Listing Created

Review Workflow

Authenticated User
       ↓
Open Listing
       ↓
Submit Rating + Comment
       ↓
Joi Validation
       ↓
Review Saved in MongoDB
       ↓
Review Reference Added to Listing

📁 Project Structure

Astera Stay/
│
├── controller/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── Listings/
│   ├── users/
│   ├── includes/
│   └── layouts/
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│   ├── ExpressError.js
│   ├── schema.js
│   └── wrapAsync.js
│
├── inits/
│   ├── data.js
│   └── initData.js
│
├── cloudConfig.js
├── middleware.js
├── index.js
├── package.json
├── .env.example
└── README.md

🚀 Getting Started

1. Clone the repository

git clone <your-github-repository-url>
cd "Astera Stay"

2. Install dependencies

npm install

3. Configure environment variables

Create a .env file from .env.example:

cp .env.example .env

Then configure:

ATLAS_URL=your_mongodb_atlas_connection_string
SECRET=your_session_secret
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_maptiler_api_key
PORT=8080

Never commit the real .env file or expose API credentials in source code.

4. Start the application

For development:

npm run dev

For production:

npm start

The application runs on the port specified by PORT or defaults to 8080.

🔑 Main Routes

Method

Route

Purpose

Authentication

GET

/

Home page

Public

GET

/listings

View all listings

Public

GET

/listings/:id

View listing details

Public

GET

/listings/new

Listing creation form

Required

POST

/listings

Create listing

Required

GET

/listings/:id/edit

Edit listing form

Owner only

PUT

/listings/:id

Update listing

Owner only

DELETE

/listings/:id

Delete listing

Owner only

POST

/listings/:id/reviews

Add review

Required

DELETE

/listings/:id/reviews/:reviewId

Delete review

Required

GET

/signup

Registration page

Public

GET

/login

Login page

Public

GET

/logout

Logout

Authenticated

🗄️ Data Models

User

Stores authenticated user information using Passport-Local-Mongoose, including username, password authentication data, and email.

Listing

Stores:

Title

Description

Price

Location

Country

Cloudinary image information

GeoJSON coordinates

Owner reference

Review references

Review

Stores:

Comment

Rating

Creation date

Listings and reviews are connected using MongoDB ObjectId references.

☁️ External Services

MongoDB Atlas

Used as the cloud database for users, listings, reviews, and session storage.

Cloudinary

Used to store and serve uploaded property images instead of keeping them directly on the application server.

MapTiler

Used for geocoding listing locations into geographic coordinates used by the application's map functionality.

🛡️ Error Handling

Astera Stay includes centralized error handling using a custom ExpressError class and an Express error-handling middleware. Asynchronous route handlers are wrapped using wrapAsync to forward rejected promises to the centralized handler.

The application also includes a custom 404 handler for routes that do not exist.

🔒 Security Practices

Credentials are loaded through environment variables.

.env is excluded from Git using .gitignore.

Protected routes require authentication.

Listing modifications require ownership authorization.

Request bodies are validated using Joi.

Sessions are stored using MongoDB through Connect-Mongo.

A dedicated session secret is used for signing/encrypting session data.

If an API key or credential has ever been committed to Git history, rotate it even after removing it from the current source code.

📌 Future Enhancements

Possible improvements for the next version include:

Real booking and reservation management

Payment gateway integration

Booking history and cancellation

Availability management

Role-based admin dashboard

Advanced listing search and filtering

Better review authorization by review author

Automated testing

Rate limiting and additional production security controls

Email notifications for account and booking events

👨‍💻 Project

Astera Stay is a full-stack web development project demonstrating backend development, database design, authentication, authorization, RESTful routing, cloud storage, third-party API integration, validation, and deployment.

Live Application

https://major-project-4-k0ls.onrender.com

📄 License

This project is intended for educational and portfolio purposes.
