# FinShark

<img width="1138" alt="homepage" src="https://github.com/user-attachments/assets/268b7ccf-45cb-4579-b145-3695ae1c4a5e">

## Table of Contents
1. [**General Info**](#general-info)
2. [**Technologies Used**](#technology-used)
3. [**Setup**](#setup)
4. [**Features**](#features) 
5. [**Code & Snippets**](#codesnippets)

## General Info
FinShark is a web application designed to assist investors in locating relevant financial documents without the distractions of short-term data. Built with modern web technologies, FinShark provides an intuitive user interface and seamless functionality for efficient document retrieval.

## Technologies Used:

# ASP.NET Core
ASP.NET Core is a cross-platform, high-performance framework for building modern, cloud-based web applications. It serves as the backbone of FinShark, handling server-side logic and API endpoints.

# SQL Server Management Studio (SSMS)
SSMS is used for managing the SQL Server databases, allowing for efficient data querying and manipulation to support the application’s backend.

# Tailwind CSS
Tailwind CSS is a utility-first CSS framework that allows for rapid design and styling of the application. It helps create a responsive and visually appealing user interface with minimal custom CSS.

# Tailwind Prettier Plugin
This plugin ensures consistent formatting by integrating Prettier with Tailwind CSS, enforcing best practices when writing utility classes.

# Tailwind Sorting
Tailwind Sorting enforces consistent class ordering within the code, improving readability and maintainability.

#Swagger
Swagger is utilized for API documentation and testing, allowing developers to visualize and interact with the API endpoints seamlessly.

# Google Fonts
Google Fonts are used to improve the aesthetics of the site with well-chosen typography that enhances readability and brand feel.

# Reacticons
Reacticons is a set of free MIT-licensed high-quality SVG icons used for UI elements in the project.

# Framer Motion
Framer Motion is a library for creating smooth animations and transitions. It is used throughout EVOGYM for an enhanced user experience.

# FormSubmit
FormSubmit allows the website to handle form submissions via email without requiring a backend, enabling a smooth user experience for contact forms.

# React Anchor Link
React Anchor Link Smooth Scroll is used to handle smooth scrolling behavior between sections, providing a seamless navigation experience.

# React Hook Form
React Hook Form is used for managing form state in React applications, providing a simple way to handle user inputs in forms, such as search fields or filters.

# Yup
Yup is a schema builder for runtime value parsing and validation.

# Setup
## Frontend Setup
Clone the repository:
git clone https://github.com/your-username/finshark.git

Navigate to the project directory:
cd finshark

Install dependencies using Vite:
npm install

Start the development server:
npm start

Open the website in your browser by navigating to the local server URL displayed (typically http://localhost:3000).

## Backend Setup:
Navigate to the backend project directory:
cd api

Install necessary packages for the ASP.NET Core backend. If you are using Visual Studio, you can open the solution file. If you prefer the command line, run the following command to restore packages:
Microsoft.AspNetCore.Mvc
Microsoft.EntityFrameworkCore
Microsoft.EntityFrameworkCore.SqlServer
Microsoft.AspNetCore.Authentication.JwtBearer
Swashbuckle.AspNetCore (for Swagger documentation)

Run the backend application:
dotnet restore

NOTE: Insure the backend API is running on the specified port (default is usually http://localhost:5000).

If you are using Visual Studio Code, install the following extensions from the Extensions Marketplace:
NuGet Package Gallery: For managing NuGet packages.
C#: Essential for C# development.
C# Dev Kit: Provides enhanced C# support and productivity features

Install necessary ASP.NET Core packages: Ensure you have the following packages in your project:

Microsoft.AspNetCore.Mvc
Microsoft.AspNetCore.Mvc.NewtonsoftJson
Microsoft.EntityFrameworkCore
Microsoft.EntityFrameworkCore.SqlServer
Microsoft.AspNetCore.Authentication.JwtBearer
Swashbuckle.AspNetCore (for Swagger documentation)
Microsoft.AspNetCore.OpenApi
Microsoft.EntityFrameworkCore.Design
Microsoft.EntityFrameworkCore.Tools

You can install these packages using the command line:
dotnet add package Microsoft.AspNetCore.Mvc
dotnet add package Microsoft.EntityFrameworkCore
dotnet add package Microsoft.EntityFrameworkCore.SqlServer
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
dotnet add package Swashbuckle.AspNetCore
dotnet add package Microsoft.AspNetCore.OpenApi
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Microsoft.EntityFrameworkCore.Tools

Run the backend application:
dotnet watch run

NOTE: Insure the backend API is running on the specified port (default is usually http://localhost:5000).

## Features

Responsive Design:
The website adapts to different screen sizes, providing a seamless experience on both mobile and desktop devices.

Smooth Animations:
Using Framer Motion, the site features smooth animations that enhance user interactions, such as fade-ins, transitions, and hover effects.

Document Retrieval: Users can easily search for and access relevant financial documents.

Responsive Design: The application is optimized for various devices, providing a seamless experience on both mobile and desktop.

Form Management: Integrated forms using React Hook Form facilitate user input without hassle.

API Documentation: Swagger provides clear documentation and interactive testing capabilities for the API.

Tailwind CSS Styling: The application employs Tailwind CSS for quick and consistent styling, enhancing the user interface.

Smooth Scrolling:
The React Anchor Link Smooth Scroll ensures a smooth scroll behavior when navigating between different sections of the page.

# Code & Snippets: 
