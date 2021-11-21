import {Graphics, Ticker, Text} from 'pixi.js';
import Letra from "./Letra";

export default class Ficha extends Graphics {
  private lado: number = 70;
  protected clickeado: boolean = false;
  protected ticker: Ticker;
  protected text: Text;
  protected points: Text;
  public texto: string;
  public puntaje: number | undefined;
  public arregloDeLetras: Letra [];
  public mouseX: number;
  public mouseY: number;

  constructor(ticker: Ticker, x: number, y: number, texto: string, arregloDeLetras: Letra [], mouseX: number, mouseY: number) {
    super();
    this.x = x;
    this.y = y;
    this.texto = texto;
    this.arregloDeLetras = arregloDeLetras;
    this.puntaje = this.obtenerPuntaje(this.arregloDeLetras);
    this.mouseX = mouseX;
    this.mouseY = mouseY;





    // interactividad
    this.interactive = true;
    this.buttonMode = true;
    this.ticker = ticker;
    ticker.add(this.onTickerUpdate, this);

    //Texto de letra
    this.text = new Text(this.texto + '', {
      fontFamily: 'Arial',
      fontSize: 29,
      fill: 0x103203,
      align: 'left'
    });

    //Texto de puntaje
    this.points = new Text(this.puntaje + '', {
      fontFamily: 'Arial',
      fontSize: 15,
      fill: 0x103203,
      align: 'left'
    });

    //Coordenadas donde se pintan las letras
    this.text.x = this.x + (this.lado / 2) - 10;
    this.text.y = this.y + (this.lado / 2) - 20;
    this.addChild(this.text);

    //Coordenadas donde se pinta el puntaje
    this.points.x = this.x + 55;
    this.points.y = this.y + 50;
    this.addChild(this.points);
  }

  protected onTickerUpdate(): void {
    this.dibujar();
    this.obtenerPuntaje(this.arregloDeLetras);
    this.tomarPosiciones(this.mouseX, this.mouseY)
  }

  // dibuja el rectangulo en base
  public dibujar(): void {
    this.clear();
    this.beginFill(0xdedd92);
    this.lineStyle(5, 0x103203, 2);
    this.drawRoundedRect(this.x, this.y, this.lado, this.lado, 10);
    //this.drawRect(this.x, this.y, this.lado, this.lado);
    this.endFill();
  }


  public click() {
    this.clickeado = !this.clickeado;
    console.log('me han clickeado: ' + this.clickeado);
  }

  public setY (y: number) {
    this.y = y;
  }

  public get _click() {
    return this.clickeado;
  }

  private obtenerPuntaje(arregloInicial: Letra []) {
    for (let i = 0; i < arregloInicial.length; i++) {
      if (this.texto === arregloInicial[i]._letra) {
        return arregloInicial[i]._puntaje;
      }
    }
  }

  private tomarPosiciones(x: number, y: number) {
    if(this.clickeado === true) {
      this.x = x;
      this.y = y;
    }
  }




}
