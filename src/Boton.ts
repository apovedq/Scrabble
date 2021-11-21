import {Graphics, Text, Ticker} from 'pixi.js'
import {FederatedPointerEvent} from '@pixi/events';

export default class Boton extends Graphics {
  protected ancho: number;
  protected largo: number;
  protected _estado: boolean;
  public color: any;
  protected text: Text;
  protected nombre: string;
  protected posText: number;
  public visibilidad: number;
  public codigo: string;
  public arregloDeLetras: string [];
  public arregloDeLetrasDisponibles: string [],


  constructor(ticker: Ticker,
              x: number,
              y: number,
              ancho: number,
              largo: number,
              color: any,
              nombre: string,
              posText: number,
              visibilidad: boolean,
              codigo: string,
              arregloDeLetras: string [],
              arregloDeLetrasDisponibles: string [],

  ) {
    super();
    this.arregloDeLetras = arregloDeLetras;
    this.arregloDeLetrasDisponibles = arregloDeLetrasDisponibles;
    this.nombre = nombre;
    this.posText = posText;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.largo = largo;
    this.color = color;
    this.codigo = codigo
    if(visibilidad === true) {
      this.visibilidad = 1;
    } else {
      this.visibilidad = 0.1;
    }
    this.text = new Text(this.nombre, {fontFamily: 'Arial', fontSize: 16, fill: 0x000000, align: 'center'});
    this.text.position.set(this.posText, 15);
    this.addChild(this.text);
    this._estado = false;
    this.interactive = true;
    this.buttonMode = true;
    this.on('click', this.fueClickleado);

    /*
    //Probando
    if(this.codigo === "rellenar") {
      this.on('click', this.botonRellenar(this, this.arregloDeLetrasDisponibles, this.arregloDeLetras);
    }
    //Probando */

    this.pivot.set(ancho / 2, largo / 2);


    ticker.add(() => {
      this.dibujar();
    });

  }

  public dibujar(): void {
    this.clear();
    this.beginFill(this.color, this.visibilidad);
    this.lineStyle(5, 0x000000, 2);
    this.drawRect(0, 0, this.largo, this.ancho);
    this.endFill();
  }

  public get estado(): boolean {
    return this._estado;
  }

  public fueClickleado(evento: FederatedPointerEvent): void {
    this._estado = !this._estado;
    console.log('me han clickeado: ' + this._estado);
  }

  //this.arregloDeLetrasDisponibles: string = arre
  public botonRellenar(evento: FederatedPointerEvent, arregloDeLetrasDisponibles: string [], arregloDeLetras: string []) {
    for (let i = 0; i < arregloDeLetrasDisponibles.length; i++) {

      let numerosDisponibles = (Math.random() * (arregloDeLetras.length - 0) + 0);

      if (arregloDeLetrasDisponibles[i] === undefined) {
        if (arregloDeLetras[Math.ceil(numerosDisponibles)] != undefined) {
          arregloDeLetrasDisponibles[i] = arregloDeLetras[Math.ceil(numerosDisponibles)];
         arregloDeLetras.splice(numerosDisponibles, 1);
        }
      }

    }
  }


}
