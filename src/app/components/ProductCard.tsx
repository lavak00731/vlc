import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";
import type ProductInterface from "../interfaces/ProductInterface";



export const ProductCard = ({product}:{product:ProductInterface}) => {
  const {images, name, description, category, subcategory, urlcanonica} = product;
  let badgeIcon: string;

  switch (category) {
    case "plantas":
      badgeIcon = "nest_eco_leaf";
      break;
    case "arboles-y-arbustos":
      badgeIcon = "nature";
      break;
    case "macetas":
      badgeIcon = "potted_plant";
      break;
    case "sustratos-y-fertilizantes":
      badgeIcon = "water_drop";
      break;
    case "herramientas":
      badgeIcon = "shovel";
      break;
    default:
      badgeIcon = "nest_eco_leaf";
  }

  return (
    <div className="group h-full rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-surface-container-lowest flex flex-col">
      <Image
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
        alt=""
        width="300"
        height="300"
        src={images[0]}
      />
      <div className="p-8 flex flex-col justify-between bg-surface-container-lowest sm:min-h-90 md:min-h-105 lg:min-h-90">
        <div className="flex flex-col items-center">
          <h2 className="font-headline-sm text-2xl font-bold text-on-surface group-hover:text-primary transition-colors mb-5">
            { name }
          </h2>
          <Badge icon={badgeIcon} text={ subcategory } />
          <p className="font-body-sm text-body-sm text-on-surface/75 mt-space-xs mb-5 line-clamp-3">
            { description }
          </p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <Link className="text-vivero-accent flex-1 text-center rounded-full font-label-md text-label-md hover:bg-surface-container transition-colors p-2 underline! underline-offset-4" href={ urlcanonica }>Ver detalle <span className="sr-only">{name}</span></Link>
          <button type="button" className="group inline-flex p-2 items-center gap-space-xs bg-primary btn-text-color hover:text-on-surface hover:bg-primary-container focus-within:bg-primary-container px-space-md py-space-xs rounded-full font-label-md text-label-md transition-al min-w-40 justify-center">
            <span aria-hidden="true" className="material-symbols-outlined text-[16px]">
              add_shopping_cart
            </span>
            Cotizar <span className="sr-only">{name}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
