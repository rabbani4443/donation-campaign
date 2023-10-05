import { useEffect, useState } from "react";
import DonationHistory from "../../Components/DonationHistory/DonationHistory";


const Donation = () => {
    const [donations, setDonation] = useState([])
    const [noFound, setNoFound] = useState(false)
    const [isShow, setIsShow] = useState(4)
    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('donationLocal'))
        if (donationItems) {
            setDonation(donationItems)
        }
        else {

            setNoFound('No Data Found')
        }
    }, [])

    return (
        <div>
            {
                noFound ?
                    <p className="text-4xl font-bold flex justify-center items-center h-[70vh]">{noFound}</p> :
                    <div>
                        <div className="grid lg:grid-cols-2 gap-6 py-8">
                            {
                               donations.slice(0,isShow) .map(donation => <DonationHistory key={donation.id} donation={donation} ></DonationHistory>)
                            }
                        </div>
                        <div className={`text-center ${isShow===donations.length ? 'hidden' : ''}`} >
                        <button onClick={()=>setIsShow(donations.length)} 
     className={`bg-[#009444] text-white py-2 px-8 font-semibold text-base rounded-md ${donations.length > 4 ? '' : 'hidden' }`}
                        >See All </button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Donation;