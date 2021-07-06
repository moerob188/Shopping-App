export class Product {
    id: number;
    pName: String;
    description: String;
    price: number;
    image:String;
    category: String;

    constructor(id: number ,pName: String,description = "",price = 0,image = "https://static.thenounproject.com/png/82078-200.png", category = "Record"){
        this.id = id;
        this.pName= pName;
        this.description = description;
        this.price = price;
        this.image = image;
        this.category = category
    }
}
