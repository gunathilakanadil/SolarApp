export class Bank {
    
    id:number=1
    branch:String;

    accountNumber:number;
    bank:String;
    customer:{
        id:number;
    };

    constructor(branch:String="x",acc_no:number=1,cid:number=66,bank:String=''){
        this.branch=branch;
        this.accountNumber=acc_no;
        this.customer={id:cid},
        this.bank=bank;
    }
    
}
