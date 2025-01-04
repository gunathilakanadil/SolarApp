import { Inverter } from "./inverter";

export class ProjectInverter {
    id?:number;
    serialNumber:String;
    project:{
        id:number;
    };
    inverter:{
        id:number;
    };
     
    constructor(serialnumber:String="",pid:number=1,iid:number=1){
        this.serialNumber=serialnumber;
        this.project={id:pid};
        this.inverter={id:iid};
    }
    
}
