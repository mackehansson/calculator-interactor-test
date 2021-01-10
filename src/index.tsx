import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./AppClass";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

import { SelfContainedResolver, InteractorHub } from "interactr";
import { CalculationInteractor, CalculationUseCase } from "./core/calculation";

const resolver = new SelfContainedResolver();
resolver.registerInteractor(new CalculationInteractor(), CalculationUseCase);

const hub = new InteractorHub(resolver);

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <App interactor={hub} />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
