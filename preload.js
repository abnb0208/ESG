// preload.js
const { contextBridge, ipcRenderer, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');

contextBridge.exposeInMainWorld('file', {
  fs: fs,
});

contextBridge.exposeInMainWorld('path', {
  app_root: ()=> __dirname, 
  join: (...args) => path.join(...args) 
});
