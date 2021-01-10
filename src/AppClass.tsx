import React, { Component } from "react";
import { produce } from "immer";
import {
    Box,
    Button,
    Center,
    Container,
    Flex,
    Grid,
    GridItem,
    Heading,
} from "@chakra-ui/react";
import { SelfContainedResolver } from "interactr/SelfContainedResolver";
import { InteractorHub } from "interactr/InteractorHub";
import AdditionInteractor from "./core/addition/addition.interactor";
import AdditionUseCase from "./core/addition/addition";
import { AdditionOuput } from "./core/addition/addition.output";
import AdditionMiddleware from "./core/addition/addition.middleware";

interface Props {}

interface State {
    memory: string | null;
    calcMethod: string | null;
    calculatedResult: boolean;
    display: string;
    puttingInNumber: boolean;
}

export default class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            memory: null,
            calcMethod: null,
            calculatedResult: false,
            display: "0",
            puttingInNumber: false,
        };
    }

    async componentDidMount() {
        const resolver = new SelfContainedResolver();
        resolver.registerInteractor(new AdditionInteractor(), AdditionUseCase);
        resolver.registerMiddleware(new AdditionMiddleware(), AdditionUseCase);
        const hub = new InteractorHub(resolver);
        const result = await hub.execute(
            new AdditionUseCase(),
            new AdditionOuput()
        );
        console.log(result.success);
    }

    onNumberPress(num: string) {
        if (!this.state.puttingInNumber) {
            this.setState(
                produce(this.state, (draft) => {
                    draft.display = num;
                    draft.puttingInNumber = true;
                })
            );
        } else {
            this.setState(
                produce(this.state, (draft) => {
                    draft.display = draft.display.toString() + num.toString();
                })
            );
        }
    }

    onDecimalPress() {
        this.setState(
            produce(this.state, (draft) => {
                draft.display = draft.display.toString() + ".";
            })
        );
    }

    onAddition() {
        this.setState(
            produce(this.state, (draft) => {
                draft.memory = draft.display;
                draft.display = "0";
                draft.calcMethod = "+";
                draft.puttingInNumber = false;
            })
        );
    }

    onSubtraction() {
        this.setState(
            produce(this.state, (draft) => {
                draft.memory = draft.display;
                draft.display = "0";
                draft.calcMethod = "-";
                draft.puttingInNumber = false;
            })
        );
    }

    onDivision() {
        this.setState(
            produce(this.state, (draft) => {
                draft.memory = draft.display;
                draft.display = "0";
                draft.calcMethod = "/";
                draft.puttingInNumber = false;
            })
        );
    }

    onMultiply() {
        this.setState(
            produce(this.state, (draft) => {
                draft.memory = draft.display;
                draft.display = "0";
                draft.calcMethod = "x";
                draft.puttingInNumber = false;
            })
        );
    }

    onReset() {
        this.setState(
            produce(this.state, (draft) => {
                draft.display = "0";
                draft.memory = null;
                draft.calcMethod = null;
                draft.calculatedResult = false;
                draft.puttingInNumber = false;
            })
        );
    }

    onCalculate() {
        if (!this.state.memory) return;

        let result = 0;

        if (this.state.calcMethod === "+") {
            result = +this.state.memory + +this.state.display;
        }

        if (this.state.calcMethod === "-") {
            result = +this.state.memory - +this.state.display;
        }

        if (this.state.calcMethod === "/") {
            result = +this.state.memory / +this.state.display;
        }

        if (this.state.calcMethod === "x") {
            result = +this.state.memory * +this.state.display;
        }

        this.setState(
            produce(this.state, (draft) => {
                draft.display = result.toString();
                draft.calcMethod = null;
                draft.memory = result.toString();
                draft.calculatedResult = true;
            })
        );
    }

    render() {
        return (
            <Container p={6}>
                <Box
                    border="2px solid white"
                    height={20}
                    width="100%"
                    lineHeight="1.2"
                    transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                    px="8px"
                    borderRadius="0px"
                    fontSize="28px"
                    fontWeight="semibold"
                    borderColor="#ccd0d5"
                    bg="#12100E"
                    color="#FFFFFF"
                    _hover={{ bg: "#ebedf0", color: "#333333" }}
                    textAlign="right"
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    _active={{
                        bg: "#dddfe2",
                        transform: "scale(0.98)",
                        borderColor: "#bec3c9",
                    }}
                    _focus={{
                        boxShadow:
                            "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                    }}
                >
                    <Box>{this.state.display}</Box>
                </Box>
                <Grid templateColumns="repeat(4, 1fr)">
                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                borderColor="#ccd0d5"
                                color="#FFFFFF"
                                _hover={{ bg: "#ebedf0", color: "#333333" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onNumberPress("7")}
                            >
                                7
                            </Box>
                        </Center>
                    </GridItem>
                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                borderColor="#ccd0d5"
                                color="#FFFFFF"
                                _hover={{ bg: "#ebedf0", color: "#333333" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onNumberPress("8")}
                            >
                                8
                            </Box>
                        </Center>
                    </GridItem>
                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                borderColor="#ccd0d5"
                                color="#FFFFFF"
                                _hover={{ bg: "#ebedf0", color: "#333333" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onNumberPress("9")}
                            >
                                9
                            </Box>
                        </Center>
                    </GridItem>
                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                bg={
                                    this.state.calcMethod === "/"
                                        ? "#fda500"
                                        : "#6B654B"
                                }
                                borderColor="#ccd0d5"
                                color="#12100E"
                                _hover={{ bg: "#ebedf0" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onDivision()}
                            >
                                /
                            </Box>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                borderColor="#ccd0d5"
                                color="#FFFFFF"
                                _hover={{ bg: "#ebedf0", color: "#333333" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onNumberPress("4")}
                            >
                                4
                            </Box>
                        </Center>
                    </GridItem>
                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                borderColor="#ccd0d5"
                                color="#FFFFFF"
                                _hover={{ bg: "#ebedf0", color: "#333333" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onNumberPress("5")}
                            >
                                5
                            </Box>
                        </Center>
                    </GridItem>
                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                borderColor="#ccd0d5"
                                color="#FFFFFF"
                                _hover={{ bg: "#ebedf0", color: "#333333" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onNumberPress("6")}
                            >
                                6
                            </Box>
                        </Center>
                    </GridItem>
                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                bg={
                                    this.state.calcMethod === "x"
                                        ? "#fda500"
                                        : "#6B654B"
                                }
                                borderColor="#ccd0d5"
                                color="#12100E"
                                _hover={{ bg: "#ebedf0" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onMultiply()}
                            >
                                x
                            </Box>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                borderColor="#ccd0d5"
                                color="#FFFFFF"
                                _hover={{ bg: "#ebedf0", color: "#333333" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onNumberPress("1")}
                            >
                                1
                            </Box>
                        </Center>
                    </GridItem>
                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                borderColor="#ccd0d5"
                                color="#FFFFFF"
                                _hover={{ bg: "#ebedf0", color: "#333333" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onNumberPress("2")}
                            >
                                2
                            </Box>
                        </Center>
                    </GridItem>
                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                borderColor="#ccd0d5"
                                color="#FFFFFF"
                                _hover={{ bg: "#ebedf0", color: "#333333" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onNumberPress("3")}
                            >
                                3
                            </Box>
                        </Center>
                    </GridItem>
                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                bg={
                                    this.state.calcMethod === "-"
                                        ? "#fda500"
                                        : "#6B654B"
                                }
                                borderColor="#ccd0d5"
                                color="#12100E"
                                _hover={{ bg: "#ebedf0" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onSubtraction()}
                            >
                                -
                            </Box>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid #ccc" color="white" colSpan={2}>
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                borderColor="#ccd0d5"
                                color="#FFFFFF"
                                _hover={{ bg: "#ebedf0", color: "#333333" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onNumberPress("0")}
                            >
                                0
                            </Box>
                        </Center>
                    </GridItem>
                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                bg="#30321C"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                borderColor="#ccd0d5"
                                color="#FFFFFF"
                                _hover={{ bg: "#ebedf0", color: "#333333" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onDecimalPress()}
                            >
                                ,
                            </Box>
                        </Center>
                    </GridItem>
                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                bg={
                                    this.state.calcMethod === "+"
                                        ? "#fda500"
                                        : "#6B654B"
                                }
                                borderColor="#ccd0d5"
                                color="#12100E"
                                _hover={{ bg: "#ebedf0" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onAddition()}
                            >
                                +
                            </Box>
                        </Center>
                    </GridItem>

                    <GridItem border="1px solid #ccc" color="white">
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                bg="#b83535"
                                borderColor="#ccd0d5"
                                color="#ffffff"
                                _hover={{ bg: "#ebedf0", color: "#12100E" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onReset()}
                            >
                                AC
                            </Box>
                        </Center>
                    </GridItem>
                    <GridItem border="1px solid #ccc" color="white" colSpan={3}>
                        <Center h={16}>
                            <Box
                                as="button"
                                height="100%"
                                width="100%"
                                lineHeight="1.2"
                                transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
                                px="8px"
                                borderRadius="0px"
                                fontSize="24px"
                                fontWeight="semibold"
                                bg="#D4DF9E"
                                borderColor="#ccd0d5"
                                color="#12100E"
                                _hover={{ bg: "#ebedf0" }}
                                _active={{
                                    bg: "#dddfe2",
                                    transform: "scale(0.98)",
                                    borderColor: "#bec3c9",
                                }}
                                _focus={{
                                    boxShadow:
                                        "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
                                }}
                                onClick={() => this.onCalculate()}
                            >
                                =
                            </Box>
                        </Center>
                    </GridItem>
                </Grid>
            </Container>
        );
    }
}
