export class Electricity {
  id!:number;  
  connectDate: string; // Connection date in ISO format (YYYY-MM-DD)
    electricityAccountNumber: string; // Account number for electricity
    schema: string; // Schema information
    areaOffice: string; // Identifier for the area office
    project: {
      id: number; // Project ID associated with the electricity record
    };
  
     
    constructor(
      connectDate: string="",
      electricityAccountNumber: string="",
      schema: string="",
      areaOffice: string="",
      projectId: number=1
    ) {
      this.connectDate = connectDate;
      this.electricityAccountNumber = electricityAccountNumber;
      this.schema = schema;
      this.areaOffice = areaOffice;
      this.project = { id: projectId };
    }
  }
  