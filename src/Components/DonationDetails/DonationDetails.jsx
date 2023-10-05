import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetail from "./DonationDetail";

const DonationDetails = () => {

    const [donation, setDonation] = useState({})

    const allData = useLoaderData()
    const {id} = useParams();
    const idInt = parseInt(id)

    // const donation = allData?.find(data => data.id === idInt);

    useEffect(()=>{
        const donations = allData?.find(data => data.id === idInt)
        setDonation(donations)
    },[idInt,allData])

    return (
        <>
        <DonationDetail donation={donation}></DonationDetail>
        </>
    );
};

export default DonationDetails;