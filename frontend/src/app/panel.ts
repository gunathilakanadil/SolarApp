export class Panel {
    id?:number;
    brand:string;
    model:string

    constructor(brand:string="",model:string=""){
        this.brand=brand;
        this.model=model
    }
}
