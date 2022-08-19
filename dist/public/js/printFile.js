var inpFile = document.getElementById('inpFile');
var btnPrint = document.querySelector('#print');
btnPrint.addEventListener('click', printZpl);
function printZpl() {
    var file = inpFile.files[0];
    var encoded = false;
    if (file.type != 'text/plain') {
        encoded = false;
    }
    else {
        encoded = true;
    }
    window.api.printFile(file.path, encoded);
}
//# sourceMappingURL=printFile.js.map