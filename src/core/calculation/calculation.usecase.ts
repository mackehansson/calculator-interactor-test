import { UseCase } from "interactr";
import { ICalculationOutput } from "./calculation.output";

export class CalculationUseCase extends UseCase<ICalculationOutput> {
    readonly num1: string;
    readonly num2: string;
    readonly calculationMethod: string;

    constructor(number1: string, number2: string, method: string) {
        super();
        this.num1 = number1;
        this.num2 = number2;
        this.calculationMethod = method;
    }
}
