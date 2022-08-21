var inpFile = document.getElementById('inpFile');
var btnPrint = document.querySelector('#print');
btnPrint.addEventListener('click', printZpl);
function printZpl() {
    var file = inpFile.files[0];
    var printerName = window.localStorage.getItem('printerName');
    var encoded = false;
    if (printerName != undefined || !printerName) {
        if (file.type != 'text/plain') {
            encoded = false;
        }
        else {
            encoded = true;
        }
        window.api.printFile(file.path, encoded, printerName);
    }
    else {
        alert('Printer is not seted, run to settings and select your printer to print files');
    }
}
//# sourceMappingURL=printFile.js.map