import {app, BrowserWindow} from 'electron'

function createWindow(){
    const win=new BrowserWindow({
        width:1000,
        height:1000,
        webPreferences:{
            nodeIntegration:true
        }
    })
    win.loadURL("http://localhost:5173/")
}
app.whenReady().then(createWindow)