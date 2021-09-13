import React from 'react';
import { InputGroup, Input, InputRightElement, Button, Box, List, ListItem, Text } from "@chakra-ui/react";


const OperationsInvesmets = () => {
    return (
        <Box d="flex">
            <Box p="10" margin={2}>
                <Box borderWidth="3px">
                    <Box>
                        <Text
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="lg"
                            letterSpacing="wide"
                            color="teal.600"
                            p="3"
                        >
                            Valores
                        </Text>
                        <Box borderWidth="1px" />
                    </Box>
                    <List p="3" listStyleType="none">
                        <ListItem>
                            <span>Cantidad:</span>
                        </ListItem>
                        <ListItem>
                            <span>Cotizacion:</span>
                        </ListItem>
                        <ListItem>
                            <span>Valor Actual</span>
                        </ListItem>
                    </List>
                </Box>
                <Box mt="50px" borderWidth="3px">
                    <Box m="20px">
                    <InputGroup size="md">
                        <Input
                            pr="4.5rem"
                            type={"text"}
                            placeholder="1000000"
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => console.log('comprar')}>
                                {"comprar"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    </Box>
                    
                </Box>

                <Box mt="50px" borderWidth="3px">
                <Box m="20px">
                    <InputGroup size="md">
                        <Input
                            pr="4.5rem"
                            type={"text"}
                            placeholder="1000000"
                        />
                        <InputRightElement width="4.5rem">
                            <Button h="1.75rem" size="sm" onClick={() => console.log('vender')}>
                                {"Vender"}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    </Box>
                </Box>
            </Box>
        </Box>

    );
}

export default OperationsInvesmets;
