import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
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

const App = () => {
    const [memory, setMemory] = useState<string | null>(null);
    const [calcMethod, setCalcMethod] = useState<string | null>(null);
    const [calculatedResult, setCalculatedResult] = useState(false);

    // Number to show in outputwindow
    const [display, setDisplay] = useState<string>("0");

    const [puttingInNumber, setPuttingInNumber] = useState(false);

    const onNumberPress = (num: string) => {
        if (!puttingInNumber) {
            setDisplay(num);
            setPuttingInNumber(true);
        } else {
            const newDisplay = display.toString() + num.toString();
            setDisplay(newDisplay);
        }
    };

    const onDecimalPress = () => {
        const newDisplay = display.toString() + ".";
        setDisplay(newDisplay);
    };

    const onAddition = () => {
        setMemory(display);
        setDisplay("0");
        setCalcMethod("+");
        setPuttingInNumber(false);
    };

    const onSubtraction = () => {
        setMemory(display);
        setDisplay("0");
        setCalcMethod("-");
        setPuttingInNumber(false);
    };

    const onDivision = () => {
        setMemory(display);
        setDisplay("0");
        setCalcMethod("/");
        setPuttingInNumber(false);
    };

    const onMultiply = () => {
        setMemory(display);
        setDisplay("0");
        setCalcMethod("x");
        setPuttingInNumber(false);
    };

    const onReset = () => {
        setDisplay("0");
        setMemory(null);
        setCalcMethod(null);
        setCalculatedResult(false);
        setPuttingInNumber(false);
    };

    const onCalculate = () => {
        if (!memory) return;

        if (calcMethod === "+") {
            const result = +memory + +display;
            setDisplay(result.toString());
            setCalcMethod(null);
            setMemory(result.toString());
            setCalculatedResult(true);
        }

        if (calcMethod === "-") {
            const result = +memory - +display;
            setDisplay(result.toString());
            setCalcMethod(null);
            setMemory(result.toString());
            setCalculatedResult(true);
        }

        if (calcMethod === "/") {
            const result = +memory / +display;
            setDisplay(result.toString());
            setCalcMethod(null);
            setMemory(result.toString());
            setCalculatedResult(true);
        }

        if (calcMethod === "x") {
            const result = +memory * +display;
            setDisplay(result.toString());
            setCalcMethod(null);
            setMemory(result.toString());
            setCalculatedResult(true);
        }
    };

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
                <Box>{display}</Box>
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
                            onClick={() => onNumberPress("7")}
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
                            onClick={() => onNumberPress("8")}
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
                            onClick={() => onNumberPress("9")}
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
                            bg="#6B654B"
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
                            onClick={() => onDivision()}
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
                            onClick={() => onNumberPress("4")}
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
                            onClick={() => onNumberPress("5")}
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
                            onClick={() => onNumberPress("6")}
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
                            bg="#6B654B"
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
                            onClick={() => onMultiply()}
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
                            onClick={() => onNumberPress("1")}
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
                            onClick={() => onNumberPress("2")}
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
                            onClick={() => onNumberPress("3")}
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
                            bg="#6B654B"
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
                            onClick={() => onSubtraction()}
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
                            onClick={() => onNumberPress("0")}
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
                            onClick={() => onDecimalPress()}
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
                            bg="#6B654B"
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
                            onClick={() => onAddition()}
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
                            onClick={() => onReset()}
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
                            onClick={() => onCalculate()}
                        >
                            =
                        </Box>
                    </Center>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default App;
