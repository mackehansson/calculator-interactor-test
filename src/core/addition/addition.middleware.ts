import { Middleware } from "interactr/Middleware";
import { UseCaseResult } from "interactr/UseCaseResult";
import AdditionUseCase from "./addition";
import { AbstractAdditionOutput } from "./addition.output";

export default class AdditionMiddleware
    implements Middleware<AdditionUseCase, AbstractAdditionOutput> {
    run(
        usecase: AdditionUseCase,
        outputPort: AbstractAdditionOutput,
        next: any
    ): Promise<UseCaseResult> {
        console.log("Before interactor 1");

        const result = next(usecase);

        console.log("After interactor 1");

        return result;
    }
}
