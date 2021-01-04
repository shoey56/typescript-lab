//////TALLEST MOUNTAIN////////

interface Mountain{
    name : string;
    height: number;
}

const mountains: Mountain[] = [
    {
        name: "Kilimanjaro",
        height: 19341  
    },{
        name: "Everest",
        height: 29029  
    },{
        name: "Denali",
        height: 20310  
    }
];

function findNameOfTallestMountain(mtns: Mountain[]) : string {
    let nameOfTallestMtn: string = "";
    let heightOfTallestMtn: number = 0;
    for (const mtn of mtns) {
        if (mtn.height > heightOfTallestMtn){
            heightOfTallestMtn = mtn.height;
            nameOfTallestMtn = mtn.name;
        }
    }
    return nameOfTallestMtn;
}

let tallestMtn: string = findNameOfTallestMountain(mountains);
console.log(tallestMtn);


//////PRODUCTS////////

interface Product{
    name: string,
    price: number
}

const products: Product[] = [
    {
        name: "backpack",
        price: 25
    },
    {
        name: "lunchbox",
        price: 10
    },{
        name: "binder",
        price: 4
    }
]

function calcAverageProductPrice(products: Product[]) : number {
    let prodCount : number = 0;
    let prodTotal : number = 0;
    for (const prod of products) {
        prodTotal += prod.price;
        prodCount++;
    }
    let prodAverage : number = prodTotal/prodCount;
    return prodAverage;
}

let calcAverage = calcAverageProductPrice(products);
console.log(calcAverage);


//////INVENTORY////////

interface InventoryItem{
    product: Product,
    quantity: number
}

const inventory: InventoryItem[] = [
    {
        product: {
            name: 'motor',
            price: 10.00,
          },
          quantity: 10
    },
    {
        product: {
            name: 'sensor',
            price: 12.50,
          },
          quantity: 4
    },{
        product: {
            name: 'LED',
            price: 1.00,
          },
          quantity: 20
    }
]

function calcInventoryValue(items: InventoryItem[]) : number {
    let invVal : number = 0;
    for (const item of items) {
        let itemVal : number = item.product.price * item.quantity;
        invVal += itemVal;
    }
    return invVal;
}

let calcInValue = calcInventoryValue(inventory);
console.log(calcInValue);