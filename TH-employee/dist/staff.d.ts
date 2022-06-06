export declare class Staff {
    name: string;
    email: string;
    private _age;
    constructor(name: string, email: string, age: number);
    getName(): string;
    setName(name: string): void;
    getEmail(): string;
    setEmail(email: string): void;
    getAge(): number;
    setAge(age: number): void;
}
