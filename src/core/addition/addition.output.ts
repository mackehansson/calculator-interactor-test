export abstract class AbstractAdditionOutput {
    abstract addNumbers(num1: number, num2: number): void;
}

export class AdditionOuput implements AbstractAdditionOutput {
    addNumbers(num1: number, num2: number): void {
        console.log(num1 + num2);
    }
}
