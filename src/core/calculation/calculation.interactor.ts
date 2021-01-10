import { Interactor, UseCaseResult } from "interactr";

import { CalculationUseCase } from "./calculation.usecase";
import { ICalculationOutput } from "./calculation.output";

export class CalculationInteractor
    implements Interactor<CalculationUseCase, ICalculationOutput> {
    async execute(
        usecase: CalculationUseCase,
        output: ICalculationOutput
    ): Promise<UseCaseResult> {
        let subtractionResult = 0;

        if (usecase.calculationMethod === "+") {
            subtractionResult = +usecase.num1 + +usecase.num2;
        }
        if (usecase.calculationMethod === "-") {
            subtractionResult = +usecase.num1 - +usecase.num2;
        }
        if (usecase.calculationMethod === "/") {
            subtractionResult = +usecase.num1 / +usecase.num2;
        }
        if (usecase.calculationMethod === "x") {
            subtractionResult = +usecase.num1 * +usecase.num2;
        }
        output.displayResult(subtractionResult.toString());

        return new UseCaseResult(true);
    }
}
