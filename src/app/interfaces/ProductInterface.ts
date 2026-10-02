interface AdditionalPropertyInterface {
    "@type": string,
    "name": string,
    "value": string
}

interface ProductInterface  {
    "id": string;
    "name": string;
    "urlcanonica": string;
    "description": string;
    "category": string;
    "subcategory": string;
    "images": string[];
    "metaDescription": string;
    "jsonld"?: {
        "@context": string;
        "@type": string;
        "@id": string;
        "name": string;
        "alternateName": string;
        "url": string;
        "description": string;
        "category": string;
        "image": string[];
        "additionalProperty": AdditionalPropertyInterface[],
        "isPartOf": {
            "@type": string,
            "@id": string,
            "url": string,
            "name": string
        }
    }
}
export default ProductInterface;