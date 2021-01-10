import { Interactor } from "interactr/Interactor";
import { UseCaseResult } from "interactr/UseCaseResult";
import AdditionUseCase from "./addition";
import { AbstractAdditionOutput } from "./addition.output";

export default class AdditionInteractor
    implements Interactor<AdditionUseCase, AbstractAdditionOutput> {
    async execute(
        usecase: AdditionUseCase,
        outputPort: AbstractAdditionOutput
    ): Promise<UseCaseResult> {
        outputPort.addNumbers(usecase.num1, 5);
        return new UseCaseResult(true);
    }
}
