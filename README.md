# reVision Extension

![Example](https://user-images.githubusercontent.com/68607795/149649675-2640d16f-48b9-4459-9e86-9c4d09dd246d.png)

This is a Chrome extension that was built to work seamlessly with the reVision Socket Server by accepting a JSON object that has an ID (roomId) and text content (content). This extension sets the Id and text to local storage, and the extension will pull the data that already exists. If none is available, the user can generate their ID to use.

## reVision Application
-   Front-end Application: https://github.com/jdhanju/nwhacks-2022-app
-   Processing API: https://github.com/jsam07/text-recognition-api
-   Socket Server: https://github.com/matteomiceli/nwHacksSocketServer
-   Extension: https://github.com/iflinda/nwPlusExtension

## Important Acknowledgements
Please note that this web extension starter repository was created via the starter template available at: https://github.com/BCIT-DDC/web-extension-ts-starter created by Jamie Samuel (https://github.com/jsam07). No existing logic was used to create this extension.

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
![Example 5](https://user-images.githubusercontent.com/68607795/149649705-39e2b70f-b118-4fd0-babe-bdffd3aadf31.png)

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
