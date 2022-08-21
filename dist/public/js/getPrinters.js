function getPrinters() {
    var printers = document.querySelector('.containerPrint');
    var printerSelected = window.localStorage.getItem('printerName');
    function save(ev) {
        if (ev != undefined) {
            window.localStorage.removeItem('printerName');
            var printerN = ev.path[0].value;
            window.localStorage.setItem('printerName', printerN);
        }
    }
    window.api.getPrinters().then(function (res) {
        //search for printername to split
        var parsedPrinters = res.split(/\n(?=\w+(?=\:))/g);
        var printerName = res.match(/\w+(?=\:)/g);
        parsedPrinters.map(function (print, i) {
            var printer = document.createElement('label');
            var inp = document.createElement('input');
            inp.type = 'radio';
            inp.id = "printer".concat(i);
            inp.name = 'printer';
            printer.addEventListener('click', save);
            inp.value = printerName[i];
            if (printerSelected != undefined && printerName[i] == printerSelected) {
                inp.checked = true;
                console.log('sla');
            }
            printer.appendChild(inp);
            printer.htmlFor = "printer".concat(i);
            printer.className = 'printer';
            print = print.replace(/\n/, '<br>');
            printer.innerHTML += print;
            printers.insertAdjacentElement('afterbegin', printer);
        });
    });
}
window.onload = getPrinters;
//# sourceMappingURL=getPrinters.js.map