"use strict"

// Tools.
const {app, ipcMain, BrowserWindow, dialog, session} = require("electron")
const fs = require("fs")

// Quit when all windows are closed.
app.on("window-all-closed", () => app.quit())

// When the app is "ready".
app.on("ready", () => {
  let save_gpx_to
  let window = new BrowserWindow({
    show: true
  })

  window.loadURL("file://" + __dirname + "/index.html")
  window.openDevTools({ mode: "detach" })

  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => callback(permission === "geolocation"))

  dialog.showSaveDialog(window, {
    title: "Where to write the GPX to.",
    defaultPath: "~/pokecheat.gpx"
  }, write_to => {
    save_gpx_to = write_to
  })

  ipcMain.on("latlng", (event, latLng) => {
    console.log(latLng);
    const gpx = `<?xml version="1.0"?>
    <gpx creator="GPS Visualizer http://www.gpsvisualizer.com/" version="1.1" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd">
    <wpt lat="${latLng.lat}" lon="${latLng.lng}"></wpt>
    </gpx>`

    fs.writeFile(save_gpx_to, gpx, err => {
      if (err) console.error(err)
      else console.log("Wrote GPX %s", save_gpx_to)
    })
  })
})
