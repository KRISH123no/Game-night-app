const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

let win

function createWindow() {
  win = new BrowserWindow({
    width: 1440,
    height: 900,
    minWidth: 1280,
    minHeight: 800,
    fullscreenable: true,
    fullscreen: false,
    frame: false,
    titleBarStyle: 'hidden',
    backgroundColor: '#080808',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    icon: path.join(__dirname, 'icon.png')
  })

  win.loadFile('index.html')

  win.setMenuBarVisibility(false)
  
  win.on('maximize', () => win.setFullScreen(true))

  win.webContents.on('did-finish-load', () => {
    win.webContents.insertCSS(`
      body { -webkit-app-region: no-drag; }
      .titlebar { -webkit-app-region: drag; }
    `)
  })
}

ipcMain.on('minimize', () => win.minimize())
ipcMain.on('maximize', () => {
  if (win.isFullScreen()) {
    win.setFullScreen(false)
  } else {
    win.setFullScreen(true)
  }
})
ipcMain.on('close', () => win.close())

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
