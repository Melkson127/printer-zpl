function getPrinters(){
    const printers = document.querySelector('.containerPrint');
    const printerSelected = window.localStorage.getItem('printerName');
    function save(ev){
        if(ev != undefined){
            window.localStorage.removeItem('printerName')
            const printerN = ev.path[0].value
            window.localStorage.setItem('printerName', printerN)
        }
    }
    window.api.getPrinters().then(res=>{
        //search for printername to split
        const parsedPrinters = res.split(/\n(?=\w+(?=\:))/g)
        const printerName = res.match(/\w+(?=\:)/g)
        parsedPrinters.map((print,i)=>{
            const printer = document.createElement('label')
            const inp = document.createElement('input')
            inp.type = 'radio'
            inp.id=`printer${i}`
            inp.name = 'printer'
            printer.addEventListener('click',save)
            inp.value = printerName[i]
            if(printerSelected != undefined && printerName[i]== printerSelected){
                inp.checked = true
                console.log('sla')
            }
            printer.appendChild(inp)
            printer.htmlFor = `printer${i}`
            printer.className = 'printer'
            print = print.replace(/\n/,'<br>')
            printer.innerHTML += print
            printers.insertAdjacentElement('afterbegin',printer)
            
        
        })
    })
    
}
window.onload = getPrinters