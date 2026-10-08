# StayEase - Hotel Booking Website

StayEase is a responsive hotel booking website created using HTML, CSS and JavaScript.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts
- Unsplash Images

## Features

### 1. Home Page
The website contains a professional hotel booking landing page with:

- Navigation bar
- Hero section
- Hotel search
- Popular hotels
- Contact section
- Footer

### 2. Hotel Search

Users can enter:

- Destination
- Check-in date
- Check-out date
- Number of guests

The website validates the selected dates.

### 3. Hotel Cards

Each hotel card displays:

- Hotel image
- Hotel name
- Location
- Rating
- Description
- Price per night
- Book Now button

### 4. Booking System

When the user clicks Book Now, a booking form appears.

Users can enter:

- Full name
- Email
- Phone number
- Check-in date
- Check-out date
- Number of guests

### 5. Automatic Price Calculation

The JavaScript calculates:

Number of nights:

checkout date - check-in date

Total price:

number of nights × room price

### 6. Booking Confirmation

After submitting the booking form, the website generates a booking ID and displays:

- Booking ID
- Hotel name
- Guest name
- Email
- Phone
- Number of guests
- Number of nights
- Total amount

### 7. Login

A login popup is included for the user interface.

### 8. Contact Form

Users can submit their name, email and message.

### 9. Responsive Design

The website works on:

- Desktop
- Laptop
- Tablet
- Mobile

## Project Structure

hotel-booking/

├── index.html
├── style.css
├── script.js
└── README.md

## How to Run

1. Create a folder named `hotel-booking`.

2. Create these files:

   - index.html
   - style.css
   - script.js
   - README.md

3. Copy the corresponding code into each file.

4. Open `index.html` in Google Chrome.

## How to Upload to GitHub

Open Command Prompt inside the project folder.

```bash
git init

git add .

git commit -m "Created hotel booking website"

git branch -M main

git remote add origin YOUR_GITHUB_REPOSITORY_URL

git push -u origin main