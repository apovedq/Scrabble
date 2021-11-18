import {Graphics, Text, Ticker} from 'pixi.js'
import {FederatedPointerEvent} from '@pixi/events';


export default class Letra {
 public letra: string;
 public puntaje: number;
  public cantidad: number;

  constructor(letra: string, puntaje: number, cantidad: number) {
    this.letra = letra;
    this.puntaje = puntaje;
    this.cantidad = cantidad;
  }

  public get _letra() : string {
    return this.letra
  }

  public get _puntaje() : number {
    return this.puntaje
  }



}
