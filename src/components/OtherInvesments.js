import React, { useEffect } from 'react';
import { Box, List, ListItem, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { getAssetReducer } from '../features/asset/assetSlice'
const OtherInvesments = () => {

    const dispatch = useDispatch();
    const assetStatus = useSelector(state => state.asset.status)
    const asset = useSelector(state => state.asset.asset);
    useEffect(() => {
        if (assetStatus === 'idle') {
            dispatch(getAssetReducer())
        }
    }, [])
    console.log(asset)
    return (
        <Box mt="50px" borderWidth="3px">
            <Box>
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="lg"
                    letterSpacing="wide"
                    color="teal.600"
                    p="3"
                >
                    Otras Inversiones
                </Text>
                <Box borderWidth="1px" />
            </Box>
            <List p="3" listStyleType="none">
                {
                    asset && asset.map((e, i) => (
                        <ListItem>
                            <Link key={i} to={`/${e.name}`}>{`${e.name}   ( AR$ ${e.price} / unidad )`}</Link>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
}

export default OtherInvesments;
