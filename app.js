const electron = require('electron');
let {app, BrowserWindow} = electron;
const path = require('path');

app.on('ready', ()=>{
  let mainWindow = new BrowserWindow({width:500, height:400});
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
});