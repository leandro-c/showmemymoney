import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Box, List, ListItem, Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux';
import { getUserReducer } from '../features/user/userSlice'
import OperationsInvesmets from './OperationsInvesmets'//'./components/OtherInvesments';

const MyInvestments = () => {
    const dispatch = useDispatch();
    const userStatus = useSelector(state => state.user.status)
    const user = useSelector(state => state.user.user);
    useEffect(() => {
        if (userStatus === 'idle') {
            dispatch(getUserReducer())
        }
    }, [])

    function renderAssets(user){
        return(
            <>
            {
                user.username ? Object.keys(user["assets"]).map((obj, i) => {
                    return (
                        <ListItem key={i}>
                            <Link to={`/${obj}`} >{` ${obj} (${user["assets"][obj]} unidades)`}</Link>
                        </ListItem>
                    )
                }):null
            }
            </>
        )
    }
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
                    {user !== null | user !== 'undefined' &&<Link to="/">{`Caja de ahorro (AR$ ${user.cash})`}</Link>}
                </ListItem>
                {renderAssets(user)}
            </List>
        </Box>
    );
}

export default MyInvestments;
