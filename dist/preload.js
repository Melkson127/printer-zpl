"use strict";
exports.__esModule = true;
// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
var child_process_1 = require("child_process");
var electron_1 = require("electron");
function printFile(path, encoded) {
    //encode directory if have whitespaces
    this.path = path.replace(/ /g, '\\ ');
    (0, child_process_1.exec)("lpr -P L42PRO ".concat(encoded ? '-o raw ' : '', " ").concat(this.path), function (error, stdout, stderr) {
        if (error) {
            alert('There was an error during print this file, please try again');
        }
    });
}
electron_1.contextBridge.exposeInMainWorld('api', {
    printFile: printFile
});
//# sourceMappingURL=preload.js.map