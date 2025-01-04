export class Accesories {
    id: number = 1; // Default value
    name: string = 'Default Name'; // Default initialized directly
    quantity: string = ''; // Initialize with default value
    rating: number = 1; // Default initialized
    serialNumber: string = ''; // Initialize with default value
    project: { id?: number } = { id: 1 }; // Initialize with a default object

    constructor(
        name: string = 'Default Name', // Consistent with field names
        quantity: string = '',
        rating: number = 1,
        serialNumber: string = '',
        projectId: number = 1 // Renamed for clarity
    ) {
        this.name = name;
        this.quantity = quantity;
        this.rating = rating;
        this.serialNumber = serialNumber;
        this.project = { id: projectId };
    }
}
