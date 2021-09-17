import React, { useEffect }  from 'react';
import {Chart} from 'react-google-charts'
import { useSelector, useDispatch } from 'react-redux';
import { getUserReducer } from '../features/user/userSlice'

const CakeChart = () => {

    const dispatch = useDispatch();
    const userStatus = useSelector(state => state.user.status)
    const user = useSelector(state => state.user.user);
    useEffect(() => {
        if (userStatus === 'idle') {
            dispatch(getUserReducer())
        }
    }, [])
    let data =[]
    data =user.username?Object.keys(user["assets"]).map((key) => [key, user["assets"][key]]):[];
    console.log(data)
    return (
        <div>
            <Chart
                width={'1000px'}
                height={'600px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                    ['Assets', 'Values'],
                    ['Acciones coca-cola', 31],
                    ['Bonos A23', 11],
                    ['Caja de ahorro', 2],
                    ['Plazo fijo', 2]
                ]}
                options={{
                    title: 'Valor total de la cartera',
                }}
                rootProps={{ 'data-testid': '1' }}
            />
        </div>
    );
}

export default CakeChart;
