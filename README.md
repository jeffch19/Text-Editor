# Progressive Web Application (PWA): Text Editor

## Description

This Text-Editor is a single-page application that meets the PWA criteria. Additionally, it will feature a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application will also function offline.

The Text Editor also stores data to an IndexedDB database using a package called idb, which is a lightweight wrapper around the IndexedDB API. It features a number of methods that are useful for storing and retrieving data.

## Installation

Deployed Link: https://text-editor-5u8z.onrender.com 

* in the terminal run npm install in the root 

* then run npm run start 


## Usage



The following animations demonstrate the application functionality:

![Demonstration of the finished app being used in the browser and then installed.](./assets/00-demo.gif)

The following image shows the application's `manifest.json` file:

![Demonstration of the finished app with a manifest file in the browser.](./assets/01-manifest.png)

The following image shows the application's registered service worker:

![Demonstration of the finished app with a registered service worker in the browser.](./assets/02-service-worker.png)

The following image shows the application's IndexedDB storage:

![Demonstration of the finished app with a IndexedDB storage named 'jate' in the browser.](./assets/03-idb-storage.png)

## License
Please refer to the license in the repository
