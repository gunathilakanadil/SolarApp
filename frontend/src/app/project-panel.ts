export class ProjectPanel {
    id?: number // Optional ID
    direction: string; // Use lowercase 'string'
    serialnumber: string;

    project: { id: number };
    panel: { id: number };

    constructor(
        direction: string = "",
        pid: number = 1,
        paID: number = 1,
        serialnumber: string = ""
    ) {
        this.direction = direction;
        this.serialnumber = serialnumber;
        this.project = { id: pid };
        this.panel = { id: paID };
    }
}
