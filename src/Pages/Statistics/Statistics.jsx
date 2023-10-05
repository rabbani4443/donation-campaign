import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PieCharts from "../../Components/PieChart/PieChart";


const Statistics = () => {
    const [donations, setDonation] = useState([])
    const loadAllData = useLoaderData()

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donationLocal'))
            setDonation(donationItems)
    }, [])

    return (
        <div className="w-full flex justify-center items-center">
           <PieCharts loadAllData={loadAllData} donation={donations}></PieCharts>
        </div>
    );
};

export default Statistics;