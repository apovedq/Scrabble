import {Graphics, Ticker, Text} from 'pixi.js';
import Letra from "./Letra";

export default class Ficha extends Graphics {
  private lado: number = 90;
  protected clickeado: boolean = false;
  protected ticker: Ticker;
  protected text: Text;
  protected points: Text;
  public texto: string;
  public puntaje: number | undefined;
  public arregloDeLetras: Letra [];

  constructor(ticker: Ticker, x: number, y: number, texto: string, arregloDeLetras: Letra []) {
    super();
    this.x = x;
    this.y = y;
    this.texto = texto;
    this.arregloDeLetras = arregloDeLetras;
    this.puntaje = this.obtenerPuntaje(this.arregloDeLetras);


    // interactividad
    this.interactive = true;
    this.buttonMode = true;
    this.on('click', this.clickear);
    this.ticker = ticker;
    ticker.add(this.onTickerUpdate, this);

    //Texto de letra
    this.text = new Text(this.texto + '', {
      fontFamily: 'Arial',
      fontSize: 29,
      fill: 0xffd900,
      align: 'left'
    });

    //Texto de puntaje
    this.points = new Text(this.puntaje + '', {
      fontFamily: 'Arial',
      fontSize: 15,
      fill: 0xffd900,
      align: 'left'
    });

    //Coordenadas donde se pintan las letras
    this.text.x = this.x + (this.lado / 2) - 10;
    this.text.y = this.y + (this.lado / 2) - 20;
    this.addChild(this.text);

    //Coordenadas donde se pinta el puntaje
    this.points.x = this.x + 65;
    this.points.y = this.y + 60;
    this.addChild(this.points);
  }

  protected onTickerUpdate(): void {
    this.dibujar();
    this.obtenerPuntaje(this.arregloDeLetras);
  }

  // dibuja el rectangulo en base
  public dibujar(): void {
    this.clear();
    this.beginFill(0x800000);
    this.lineStyle(5, 0xFF0000, 2);
    this.drawRect(this.x, this.y, this.lado, this.lado);
    this.endFill();
  }


  public clickear() {
    if (this.clickeado === false) {
      this.clickeado = true;
    } else {
      this.clickeado = false;
    }
  }

  public obtenerPuntaje(arregloInicial: Letra []) {
    for (let i = 0; i < arregloInicial.length; i++) {
      if (this.texto === arregloInicial[i]._letra) {
        return arregloInicial[i]._puntaje;
      }
    }
  }


}
