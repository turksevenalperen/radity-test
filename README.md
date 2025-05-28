 ReqRes API Automated Tests with Playwright

This repository contains automated API tests for the [ReqRes](https://reqres.in/) mock API using Playwright in a Node.js environment.

 Overview

The tests cover the following API endpoints and functionalities:
- User login (POST /api/login)
- Fetching list of users (GET /api/users)
- Creating a new user (POST /api/users)
- Deleting a user (DELETE /api/users/:id)

All tests run in headless mode without any UI interaction, focusing on API response validations.

 Technologies Used

- Playwright (TypeScript)
- Node.js
- ReqRes.in mock API

 Getting Started

 Prerequisites

- Node.js (v14 or above)
- npm or yarn package manager

 Installation

1. Clone the repository:
   git clone <your-repo-url>
   cd <your-repo-folder>
Install dependencies:


npm install
Running Tests
Run all tests with:



npx playwright test
Tests will run in headless mode and show results in the terminal.



