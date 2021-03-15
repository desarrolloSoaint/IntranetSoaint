import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataConverterService {

  constructor() { }

  capitalizeFirtLetter(text:string):string {
    let string = text;
    let mayus = text.substring(0, 1).toUpperCase();
    let resto = text.substring(1, text.length).toLowerCase();
    return mayus.concat(resto.toString());
  };

  getCurrentTime():string{
    let time = new Date();
    let hour = String(time.getHours());
    let separator = ":"
    let min = String(time.getMinutes());
    let cadena = hour.concat(separator.toString(),min.toString());
    return cadena;
  }

}
