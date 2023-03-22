// Exercício 1

class Subject {
    private _registration: number;
    private _name: string;
    private _testScore: number[];
    private _homeworkScore: number[];

    constructor(r: number, n: string, t: number[], h: number[]) {
        this._registration = r;
        this._name = n;
        this._testScore = t;
        this._homeworkScore = h;
    }
}
