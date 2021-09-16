import React from 'react';
import {Chart} from 'react-google-charts'
const CakeChart = () => {
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
