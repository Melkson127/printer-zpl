// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import {exec} from 'child_process';
import {contextBridge} from 'electron';
import {once} from 'events'
class preload{
  printer:string = '';
  path:string = '';
  constructor(){
    this.exposeOnFront();
  }
  async getPrinters(){
    const status  = exec('lpc status', (error, stdout, stderr)=>{
      console.log(error, stderr, stdout)
      this.printer = stdout
    })
    await once(status, 'close');
    return this.printer;
  }
  printFile(path:string, encoded:boolean, printerName:string):void{
      //encode directory if have whitespaces
      this.path = path.replace(/ /g, '\\ ')
  
      exec(`lpr -P ${printerName} ${encoded?'-o raw ':''} ${this.path}`, (error, stdout, stderr) => { 
        if(error){
          console.log(error)
          alert('There was an error during print this file, please try again')
        }
      });
  }
  exposeOnFront(){
    contextBridge.exposeInMainWorld('api', {
      printFile: this.printFile,
      getPrinters: this.getPrinters,
   })
  }
}
const Preload = new preload();
