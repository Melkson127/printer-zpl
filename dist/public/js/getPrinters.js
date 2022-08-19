function getPrinters() {
    var printers = document.querySelector('.containerPrint');
    window.api.getPrinters().then(function (res) {
        //search for printername to split
        var parsedPrinters = res.split(/\n(?=\w+(?=\:))/g);
        parsedPrinters.map(function (print, i) {
            var printer = document.createElement('label');
            var inp = document.createElement('input');
            if (print.trim().length > 0) {
                inp.type = 'checkbox';
                inp.id = "printer".concat(i);
                printer.appendChild(inp);
                printer.htmlFor = "printer".concat(i);
                printer.className = 'printer';
                print = print.replace(/\n/, '<br>');
                printer.innerHTML = print;
                printers.insertAdjacentElement('afterbegin', printer);
            }
        });
    });
}
window.onload = getPrinters;
//# sourceMappingURL=getPrinters.js.map