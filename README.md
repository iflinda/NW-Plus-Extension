# reVision Extension

![Example](https://user-images.githubusercontent.com/68607795/149653723-3f5a2491-5632-4f67-bfe9-703c30de3b51.png)

This is a Chrome extension that was built to work seamlessly with the reVision Socket Server by accepting a JSON object that has an ID (roomId) and text content (content). This extension sets the Id and text to local storage, and the extension will pull the data that already exists. If none is available, the user can generate their ID to use.

## reVision Application
The reVision application has four major components that allow the application to work seamlessly together. 

- ### Front-end Application
    - https://github.com/jdhanju/nwhacks-2022-app
    - The Front-end Application allows the user to upload their photo where it is then sent to the Processing API to be converted to text.
    - _Technologies: React, Next.js, Tailwind CSS, ESLint, and Prettier_

- ### Processing API
    - https://github.com/jsam07/text-recognition-api
    - The Processing API is an OCR & HCR based API that transcribes an image to text using a combination of Microsoft Cognitive Services and Google's Cloud Vision API. The text is sent back to the front-end application after processing.
    - _Technologies: JavaScript (ES6), TypeScript, Docker, Microsoft Cognitive Services, Google's Cloud Vision API, ESLint, and Prettier_

- ### Socket Server
    - https://github.com/matteomiceli/nwHacksSocketServer
    - The Socket Server facilitates communication between the front-end application and the extension. It accepts an object from the front-end application that contains the ID (roomId) and text (content) and sends that information to the browser extension.
    - _Technologies: JavaScript (ES6), Socket.io, ESLint, Prettier_

- ### Browser Extension
    - https://github.com/iflinda/nwPlusExtension
    - The Browser Extension listens to the Socket Server and accepts an object that contains the ID (roomId) and text (content). After receiving an ID match, the content is shown as text in the extension; thus, allowing for users to copy and paste the text.
    - _Technologies: React, TypeScript, Webpack.js, Tailwind CSS, ESLint, and Prettier_

## Important Acknowledgements
Please note that this web extension was created via the starter template available at: https://github.com/BCIT-DDC/web-extension-ts-starter created by Jamie Samuel (https://github.com/jsam07). No existing logic was used to create this extension.

## Instructions

### 1. Clone the Repository.
```
git clone https://github.com/iflinda/nwPlusExtension.git
```

### 2. Open the folder from the terminal.
```
cd nwPlusExtension
```

### 3.  Install any dependencies.
```
npm install
```

### 4. Build the production environment.
```
npm run build
```

### 5. Open your Chrome browser and go to chrome://extensions
![Example2](https://user-images.githubusercontent.com/68607795/149648082-3e00fd97-b592-4f26-967b-bafa5d2a0bb8.png)

### 6. Click on Load unpacked
![Example3](https://user-images.githubusercontent.com/68607795/149648100-6a6e796f-c7e1-41c4-bb80-caf670f2f66f.png)

### 7. Open the dist folder inside of the project folder (nwPlusExtension).
![Example4](https://user-images.githubusercontent.com/68607795/149648316-c9624e63-3027-4d3d-93b4-ffe223b43d5e.png)

### 8. The reVision extension is now available for use! 
![Example5](https://user-images.githubusercontent.com/68607795/149653732-05ed072f-bda1-4d52-81fd-4928f220be14.png)

## Team
-   Jamie Samuel (https://github.com/jsam07/)
-   Jaiveer Dhanju (https://github.com/jdhanju)
-   Linda Ngoc Nguyen (https://github.com/iflinda)
-   Matteo Miceli (https://github.com/matteomiceli)

## Built With
-   ![React](https://img.shields.io/badge/-React-050B1E?&logo=React)
-   ![TypeScript](https://img.shields.io/badge/-TypeScript-050B1E?&logo=TypeScript)
-   ![Webpack](https://img.shields.io/badge/-Webpack.js-050B1E?&logo=webpack)
-   ![TailwindCSS](https://img.shields.io/badge/-Tailwind_CSS-050B1E?&logo=tailwind-css)
