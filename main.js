// Importing necessary modules
const { app, BrowserWindow } = require('electron');
const path = require('path');

// Function to create the window
function createWindow() {
  // Create the browser window
  const win = new BrowserWindow({
    width: 800, // Width of the window
    height: 600, // Height of the window'
    removeMenu:true,
    autoHideMenuBar:true,
    icon: path.join(__dirname, 'manchat_favicon.ico'), // Path to your icon file
    webPreferences: {
        // Disable DevTools if the app is packaged (in production mode)
        devTools: !app.isPackaged
      }

  });

  // Load index.html of the app
  win.loadURL('http://hrm.manxel.com/manchat');

  // Open the DevTools.
  //win.webContents.openDevTools();
}

// This method will be called when Electron has finished initialization
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common for applications and their menu bar to stay active until the user quits explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// On macOS, re-create a window in the app when the dock icon is clicked and there are no other windows open.
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
