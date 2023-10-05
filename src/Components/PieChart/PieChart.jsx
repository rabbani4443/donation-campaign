import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import PropTypes from 'prop-types';

const PieChart = ({ loadAllData, donation }) => {
    const getAllDataLength = () => (Array.isArray(loadAllData) ? loadAllData.length : 0);
    const getDonationLength = () => (Array.isArray(donation) ? donation.length : 0);

    const [allData, setAllData] = useState(getAllDataLength());
    const [localData, setLocalData] = useState(getDonationLength());

    const total = allData - localData

    useEffect(() => {
        setAllData(getAllDataLength());
        setLocalData(getDonationLength());
    }, [loadAllData, donation]);

    const chartOptions = {
        series: [total, localData],
        options: {
            chart: {
                width: 380,
                type: 'pie'
            },
            labels: ['Your Donation', 'Total Donation'],
            fill: {
                colors: ['#FF444A', '#00C49F']
            },
            legend: {
                position: 'bottom',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 500
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        }
    };


    return (
        <div className="">
            <ApexCharts
                options={chartOptions.options}
                series={chartOptions.series}
                type="pie"
                width={700}
            />
        </div>
    );
}

PieChart.propTypes = {
    loadAllData: PropTypes.array,
    donation: PropTypes.array
};

export default PieChart;
