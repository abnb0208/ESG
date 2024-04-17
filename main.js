const { app, BrowserWindow, screen } = require('electron')
const path = require('path')

function createWindow (width, height) {
  const win = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true, 
      nativeWindowOpen: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('renderer/index.html')
}

app.whenReady().then(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  createWindow(width, height)

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})