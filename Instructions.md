# Angular Sample Application

This project will walk you though creating a simple shopping cart application that includes

- A product list with product names, descriptions, and pricing
- Product detail pages
- The ability to add a product to your cart
- A cart view
- A shipping price view
- A form to get customer data from the user (Name and Address)
- The ability to "submit" the form to complete the order

Many of the aspects of using Angular will be touched upon in the project. Even though it is simple, it isn't easy. The detailed instructions more or less tell you exactly what to do. However, I would not be surprised if you got stuck a couple of times during the project, especially if you're trying to really understand it. Getting stuck is good; most learning happens by solving problems.

This guide presents an overview of the project, because it's easy to lose the "big picture" while you're dealing with the details. I would recommend working though the detailed guide once and then doing the entire project again using the instructions as little as possible. You'll be surprised at how much more you learn doing it more-or-less on your own without the step-by-step instructions! You will need some starter resources to do this project; the instructor will supply those to you.

Other than the starter resources, I would highly recommend typing all code in the project and not using cut-and-paste. You're supposed to be learning Angular, not how to cut-and-paste. My personal experience is even though it may be tedious, you will learn much more by typing the code.

# Detailed step-by-step instructions

This project is the "official" Angular starter project. It can be found at the following link:

<blockquote style="font-size:2rem;margin:1rem 0rem"><a href="https://angular.io/start">Angular.io/start</a> </blockquote>

Angular.io is recommending that you do this project using _StackBlitz_. While that is OK for your very first day using Angular, I would highly recommend you use a real, local development environment. Here are the [instructions to set up your own Angular development environment](https://angular.io/guide/setup-local).

# Lab 1 - Creating a starter project and using Components

Features:

- Create a component to display a product list
- Implement a button to "Share"
- Implement a conditional button to "Notify"
-

## Create the sample project

To develop this project locally, you will require [node.js](https://nodejs.org/en/), npm, and the [Angular CLI](https://nodejs.org/en/). Aternatively, the project can be done on [StackBlitz](https://angular.io/generated/live-examples/getting-started-v0/stackblitz.html)

Skills:

- Creating a project

## Create the product list

Skills:

- Creating a component
- Using [Structural Directives](https://angular.io/guide/structural-directives) [(ngFor)](https://angular.io/api/common/NgForOf)
- [Text interpolation](https://angular.io/guide/interpolation)
- Property binding
- Event binding

## Pass data to a child component

Skills:

- Component decorator
- Input decorator

## Pass data to a parent component

Skills:

- Output decorator
- EventEmitter class
- ngIf directive
- Event handling

# Lab 2 - Adding navigation

Features:

- Type a URL in the address bar to navigate to a corresponding product page
- Click links on the page to navigate within your single-page application
- Click the browser's back and forward buttons to navigate the browser history intuitively

## Associate a URL path with a component

Skills:

- [Routing concetps](https://angular.io/guide/router)
- Basic routing using the [Angular Router](https://angular.io/api/router/Router)
- Adding routes
- Using the [routerLink](https://angular.io/api/router/RouterLink) directive

## Add product details view

Skills:

- Using the [ActivatedRoute](https://angular.io/api/router/ActivatedRoute) and [ActivatedRouteSnapshot](https://angular.io/api/router/ActivatedRouteSnapshot) classes
- Defining properties
- Using constructors
- Access modifiers: public and private
- Brief introduction to interfaces
- Brief introduction to lifecycle (ngOnInit)
- Using the predefined [currency pipe](https://angular.io/api/common/CurrencyPipe)

# Lab 3 - Managing data

Features:

- Create a shopping cart service
- Update the product details view to include a Buy button, which adds the current product to a list of products that a cart service manages
- Add a cart component, which displays the items in the cart
- Add a shipping component, which retrieves shipping prices for the items in the cart by using Angular's HttpClient to retrieve shipping data from a .json file

## Create the shopping cart service

Skills:

- Introduction to [dependency injection](https://angular.io/guide/glossary#dependency-injection-di)
- Generating a service
- Creation of an API (addToCart, getItems, clearCart)

## Use the cart service

Skills:

- Typescript constructor properties
- Typescript access modifiers
- Using a service

## Create the cart view

Skills:

- Creating a view

## Display the cart items

Skills:

- Injecting a service

## Retrieve shipping prices

- Using the [HttpClient class](https://angular.io/api/common/http/HttpClient)
- Reading a json file
- Registering a service

## Create a shipping component

Skills:

- Using an injected service
- Displaying properties of a retrieved object
- A very, very brief intoduction to the [Async pipe](https://angular.io/api/common/AsyncPipe)

# Lab 4 - Using forms for user input

Features:

- Add a checkout form to the project

## Define the checkout form model

Skills:

- Using the [FormBuilder](https://angular.io/api/forms/FormBuilder) service
- Creating a model to represent a form
- Form submission

## Create the checkout form

Skills:

- Tying a form model to an HTML form
- Using the formControlName attribute
- Using the ngSubmit directive

# Lab 5: Deployment

Features:

- Running your application locally
- Building and hosting your application

## Running your application locally

Skills:

- Nothing new if you did this lab locally
- If you used StackBlitz, then local setup and execution will be new to you

## Building and hosting your application

Skills:

- Using the `ng build` command
- Deploying the project
