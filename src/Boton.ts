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

  constructor(ticker: Ticker, x: number, y: number, ancho: number, largo: number, color: any, nombre: string, posText: number) {
    super();
    this.nombre = nombre;
    this.posText = posText;
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.largo = largo;
    this.color = color;
    this.text = new Text(this.nombre, {fontFamily: 'Arial', fontSize: 16, fill: 0x000000, align: 'center'});
    this.text.position.set(this.posText, 15);
    this.addChild(this.text);
    this._estado = false;
    this.interactive = true;
    this.buttonMode = true;
    this.on('click', this.fueClickleado);
    this.pivot.set(ancho / 2, largo / 2);


    ticker.add(() => {
      this.dibujar();
    });

  }

  public dibujar(): void {
    this.clear();
    this.beginFill(this.color);
    this.lineStyle(5, 0x000000, 2);
    this.drawRect(0, 0, this.largo, this.ancho);
    this.endFill();
  }

  public get estado(): boolean {
    return this._estado;
  }

  public fueClickleado(evento: FederatedPointerEvent): void {
    this._estado = !this._estado;
  }


}
