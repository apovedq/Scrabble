import Canvas from './canvas';
import ImageLoader, {Sprites} from "./ImageLoader";

window.onload = function () {
  new ImageLoader([
    {
      nombre: 'plantilla',
      archivo: 'img/Plantilla.png',
    }
  ]).load((sprites: Sprites) => {
    new Canvas(1280, 720, 0x000000, sprites);
  });
}
