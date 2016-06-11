# Home Control Center

This is an app I developed to inform guests (and my wife) how to use all of the things plugged into my entertainment center.
It also keeps track of my video game library, gets information about the games, and states whether or not they are
appropriate for my son to play.

Future plans include:
  - home automation controls
  - server monitoring and maintenence
  - video game wishlists
  - shared Google calendar display and editing
  - "how to's" for additional things in my home

I also plan to migrate my key/value store to a MongoDB eventually and only did used JSON files for rapid prototyping.

### Version
0.9

### Installation
Global npm installs:

```sh
$ npm i -g grunt-cli bower bower-installer grunt-cli
```
Then:
```sh
$ npm install
```
### To Run (dev)
```sh
$ grunt dev
```

### To Build and Run in Production Mode
```sh
$ grunt build
```

### Tech

Home Control Center uses a number of open source projects to work properly:

* [AngularJS](https://github.com/angular/angular.js) - HTML enhanced for web apps!
* [node.js](https://github.com/nodejs/node) - evented I/O for the backend
* [Express](https://github.com/expressjs/express) - fast node.js network app framework [@tjholowaychuk]
* [GruntJs](https://github.com/gruntjs/grunt) - The JavaScript Task Runner http://gruntjs.com/
* [Angular Material](https://github.com/angular/material) - Material Design inspired framework

...and many more!
### Todos

 - write tests
 - migrate to MongoDB
 - add authentication for game library adds and deletes
 - add more confirmation dialogs

### Additional Info
>I host this on my home server with apache and I run the API server
>with NodeJs and PM2 to keep it alive and startup on boot.
>I even have a Raspberry Pi working as my internal DNS server
>and have my server aliased as "ghome.help" in the host file
>for simple navigation to the app.

Feel free to hack away for your own use, fork, whatever.

License
----

MIT
