class Tv {
    private brand: string;
    private size: number;
    private resolution: string;
    private connections: string[];
    private _connectedTo?: string | undefined;

    constructor(b: string, s: number, r: string, c: string[]) {
        this.brand = b;
        this.size = s;
        this.resolution = r;
        this.connections = c;
    }

    turnOn() {
        console.log(`${this.brand} ${this.size} ${this.resolution} ${this.connections}`)
    }


    set connectedTo(value: string | undefined) {
        if (!value || this.connections.includes(value)) {
            this._connectedTo = value;
            console.log(this._connectedTo);
        } else {
            console.log('Sorry, connection unavailable!');
        }
    }

    get connectedTo(): string | undefined {
        return this._connectedTo;
    }
}

const t1 = new Tv('lg', 42, '1024x768', ['HDMI', 'ethernet', 'AV']);
t1.turnOn();
t1.connectedTo = 'Wi-Fi';
console.log('Connected to', t1.connectedTo);