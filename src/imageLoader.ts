import {Loader, LoaderResource, TilingSprite} from 'pixi.js';
import {Dict} from "@pixi/utils";

type ImageLoaderParams = { nombre: string, archivo: string }
export type Sprites = Dict<TilingSprite>;
export type SpritesLoadedCallback = (sprites: Sprites) => void

export default class ImageLoader {
  protected loader: Loader

  constructor(imageDescriptors: ImageLoaderParams[]) {
    this.loader = new Loader();
    imageDescriptors.forEach(imageDescriptor => {
      this.loader.add(imageDescriptor.nombre, imageDescriptor.archivo);
    });
  }

  public load(onLoad: SpritesLoadedCallback) {
    this.loader.load();

    this.loader.onComplete.add((_: Loader, resources: Dict<LoaderResource>) => {
      const textures: [string, TilingSprite?][] = Object.entries(resources).map(([key, resource]: [key: string, resource: LoaderResource]) => {
        if(resource.error !== null) {
          console.warn(`Hubo un error cargando la imagen ${key}, revisa el nombre de imagen`);
          return [key, undefined];
        }
        if (resource.texture !== undefined) {
          const {texture} = resource;
          return [key, new TilingSprite(texture, texture.width, texture.height)]
        }
        return [key, undefined]
      });

      const filteredTextures = textures.filter(([_, sprite]: [string, TilingSprite?]) => {
        return sprite !== undefined;
      });

      let sprites: Sprites = Object.fromEntries(filteredTextures);
      onLoad(sprites);
    });
  }
}
