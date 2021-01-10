export interface ICalculationOutput {
    displayResult(result: string): void;
}

export class CalculationOutput implements ICalculationOutput {
    private result: string = "0";

    displayResult(result: string): void {
        this.result = result;
    }

    presentResult() {
        return this.result;
    }
}
