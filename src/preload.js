const { contextBridge } = require('electron')
const Chart = require("chart.js");


contextBridge.exposeInMainWorld(
    'electron',
    {
        createChart: (ctx, params) => {
          let chart = new Chart(ctx, params);
        }
    }
)
