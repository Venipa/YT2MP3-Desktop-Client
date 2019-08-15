console.log("[Mokka App] Loading ./scripts/menu.js")
const {Menu} = require('electron')
const electron = require('electron')
const app = electron.app

var menu = Menu.buildFromTemplate([
    {
        label: app.getName(),
        submenu: [
            { role: 'about' },
           // { role: 'services' },
            { role: 'quit' }
        ]
    },
        {
        label: 'Edit',
        submenu: [
          { role: 'undo' },
          { role: 'redo' },
          { type: 'separator' },
          { role: 'cut' },
          { role: 'copy' },
          { role: 'paste' },
        ]
    },
    {
      label: 'Developer',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
        { role: 'services' },
      ]
  },
])
Menu.setApplicationMenu(menu); 

console.log("[Mokka App] Loaded ./scripts/menu.js")