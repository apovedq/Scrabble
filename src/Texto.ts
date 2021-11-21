import {Graphics, Ticker, Text} from 'pixi.js';

export default class Texto extends Graphics{

  protected textoRecibido: string | number;
  protected texto:Text;
  protected tamañoDeFuente: number;
  protected posX: number;
  protected posY: number;
  protected color: any;

  constructor(ticker:Ticker, x: number, y: number, textoRecibido: string | number, tamañoDeFuente: number, color: any){
    super();
    this.textoRecibido = textoRecibido;
    this.tamañoDeFuente = tamañoDeFuente;
    this.posX = x;
    this.posY = y;
    this.color = color;

    this.texto = new Text(this.textoRecibido + '', {
      fontFamily: 'Arial',
      fontSize: this.tamañoDeFuente,
      fill: this.color,
      align: 'left'
    });

    this.texto.x = this.posX;
    this.texto.y = this.posY;
    this.addChild(this.texto);
  }





}
