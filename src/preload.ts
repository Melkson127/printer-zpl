// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
import {exec} from 'child_process';
import {contextBridge} from 'electron';
function printFile(path:string, encoded:boolean):void{
    //encode directory if have whitespaces
    this.path = path.replace(/ /g, '\\ ')

    exec(`lpr -P L42PRO ${encoded?'-o raw ':''} ${this.path}`, (error, stdout, stderr) => { 
      if(error){
        alert('There was an error during print this file, please try again')
      }
    });
}
contextBridge.exposeInMainWorld('api', {
    printFile: printFile
})