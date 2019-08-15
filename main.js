const electron = require('electron')

const { app, BrowserWindow, Menu } = require('electron')
const cMenu = require('./scripts/menu.js')


function createWindow () {
  // Erstelle das Browser-Fenster.
  let win = new BrowserWindow({
    width: 600,
    height: 750,
    resizable: false,
    center: true,
    title: 'YT2MP3',
    icon: __dirname + 'Icon/256.icns',
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.on('closed', () => {
    win = null
    console.log("[Mokka App] Window closed.")
  })

  // and load the index.html of the app.
  win.loadURL('https://yt2mp3.venipa.net').then(
    console.log("[Mokka App] Loaded YT2MP3")
  )

require('./scripts/menu.js')

}


app.on('ready', createWindow);