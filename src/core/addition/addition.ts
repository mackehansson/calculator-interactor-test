import { UseCase } from "interactr/UseCase";
import { AbstractAdditionOutput } from "./addition.output";

export default class AdditionUseCase extends UseCase<AbstractAdditionOutput> {
    readonly num1: number;
    constructor(number1: number) {
        super();
        this.num1 = number1;
    }
}
