const inpFile = document.getElementById('inpFile')
const btnPrint = document.querySelector('#print')
btnPrint.addEventListener('click', printZpl)
function printZpl() {
  const file = inpFile.files[0]
  const printerName = window.localStorage.getItem('printerName')
  let encoded = false
  if(printerName != undefined || !printerName){
    if(file.type != 'text/plain'){
      encoded = false
    }else{
      encoded = true
    }
    window.api.printFile(file.path, encoded, printerName)
  }else{
    alert('Printer is not seted, run to settings and select your printer to print files')
  }
  
 
}