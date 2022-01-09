# User account demo

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Demonstration](#demonstration)

## General info
Project made to learn more about user authentication by making a React app and using Userfront API to secure the App and API endpoint. In the future I wish to implement the authentication into a larger project as a way of identification; perhaps first to a frontend, and then a fullstack project.
Made with the help of Userfront's own React guide, and James Bubb's tutorial on Junior Developer Central (https://www.youtube.com/watch?v=La_feUAG6UA).
	
## Technologies
Project is created with:
* React
* Userfront API
	
## Setup
To run this project, install it locally using npm:

```
$ cd ../User account demo-project
$ npm install
$ npm start
```
Once the program is open, you can log in as a testUser with the username 'testi@kayttaja.com' and the password 'salainensalasana'

## Demonstration
* (1.) The program consists if 4 pages: Home (Sign up), Login, Password Reset & Dashboard. When the page is first opened, the user is prompted to sign up at the home screen. 
* (2.) The login screen for an existing user to Log in.
* (3.) A password reset screen, where a user can request their password to be reset.
* (4.) The dashboard, where a user's private data is stored. It can only be accessed by a user who has succesfully logged in. With the Log out button, the user is logged out of their account and is taken back to the Login screen.
* If a not-yet-logged-in user clicks the dashboard and tries to access the private data not yet visible to him, he is taken back to the Login screen.

![user-account-demo-pic2](https://user-images.githubusercontent.com/94180117/148685246-60564318-337e-4cdd-a872-8167b1e59bee.jpg)
