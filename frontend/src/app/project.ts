export class Project {
    id?:number;
    startDate: string; // ISO string format (YYYY-MM-DD)
    customer: {
      id: number; // Only the ID is required for creating a project
    };
  
    constructor(startDate: string="", customerId: number=1) {
      this.startDate = startDate;
      this.customer = { id: customerId };
    }
  }
  