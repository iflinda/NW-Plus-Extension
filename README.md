# reVision Extension

![Example](https://user-images.githubusercontent.com/68607795/149649645-b65144f7-5bbc-451b-9982-3562a750766f.png)

This is a Chrome extension that was built to work seamlessly with the reVision Socket Server by accepting a JSON object that has an ID (roomId) and text content (content). This extension sets the Id and text to local storage, and the extension will pull the data that already exists. If none is available, the user has the ability to generate their own ID to use.

## Important
Please note that this web extension starter repository was created via the starter code available at: https://github.com/BCIT-DDC/web-extension-ts-starter created by Jamie Samuel (https://github.com/jsam07). No existing logic was used to create this extension.

## Instructions

### 1. Clone the Repository.
```
git clone https://github.com/iflinda/nwPlusExtension.git
```

### 2. Open the folder from the terminal.
```
cd nwPlusExtension
```

### 3.  Install any dependences.
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
![Example](https://user-images.githubusercontent.com/68607795/149649645-b65144f7-5bbc-451b-9982-3562a750766f.png)
