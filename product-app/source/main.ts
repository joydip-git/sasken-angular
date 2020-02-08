import { TV } from './tv.model';
import { Mobile } from './mobile.model';
import { ProductType } from './productType.enum';
import { Product } from './product.model';


function createProduct(productType: ProductType, 
    id: number, name: string, make: string, price: number,
    ...extraArgs: any[]): Product {

    let productObj: Product = null;

    switch (productType) {

        case ProductType.TV:

            const lgTV = new TV(id, name, make, price, extraArgs[0], extraArgs[1], extraArgs[2]);

            productObj = lgTV;
            break;

        case ProductType.Mobile:

            const motoMobile = new Mobile(id, name, make, price, extraArgs[0]);

            productObj = motoMobile;
            break;
            
        default:
            break;
    }
    return productObj;
}

let product: Product = createProduct(ProductType.TV, 1, 'LG UHD', 'LG', 50000, true, 50, 6);
console.log(product.printInfo());

// function splitSentence(sentence: string,...splitters:any[]) {
//     //code
// }
// splitSentence('I am a angular trainer. I am at Sasken',
// ' ', '.');