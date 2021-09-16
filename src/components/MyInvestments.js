import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { Box, List, ListItem, Text } from "@chakra-ui/react";

const MyInvestments = () => {
    return (
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
                    Mis Inversiones
                </Text>
                <Box borderWidth="1px" />
            </Box>
            <List p="3" listStyleType="none">
                <ListItem>
                    <Link to="/">Caja de ahorro</Link>
                </ListItem>
                <ListItem>
                    <Link to="/bonoa23">Bono A23</Link>
                </ListItem>
                <ListItem>
                    <Link to="/accionescocacola">Acciones coca cola</Link>
                </ListItem>
            </List>
        </Box>
    );
}

export default MyInvestments;
