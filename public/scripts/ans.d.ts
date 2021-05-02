export declare class answer {
    text: HTMLInputElement;
    x: number;
    count: number;
    constructor(button: HTMLElement, input: HTMLInputElement);
    checkAnswer(): void;
}
export declare class check {
    x1: number;
    constructor(button: HTMLElement);
    nextQuestion(): void;
}
