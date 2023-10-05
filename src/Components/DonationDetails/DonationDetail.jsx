import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetail = ({donation}) => {
    const{id,picture,card_bg,title,price,description} = donation;

    const handelApplyDonation =()=>{

        const addedDonation = []

        const donationItems =JSON.parse(localStorage.getItem('donationLocal'))

        if (!donationItems) {
            addedDonation.push(donation)
            localStorage.setItem('donationLocal',JSON.stringify(addedDonation))
            toast.success('Donation is successful !!', { theme: "colored",});
        } 
        else{
            const isExist = donationItems.find(donations=>donations.id === id)
            // console.log(isExist)
            if (!isExist) {         
                addedDonation.push(...donationItems,donation);
                localStorage.setItem('donationLocal',JSON.stringify(addedDonation))
                toast.success('Donation is successful !!!', { theme: "colored",});
            }
            else{

                toast.warn('Already Donation !!!', { theme: "colored",});
            }
        }
    }
    return (
        <div>
            <div className="py-10">
            <div className="relative w-full ">
                <img className="w-full lg:h-[80vh] rounded-lg" src={picture} alt="" />
                <div className=" absolute rounded-b-lg bg-slate-900 bg-opacity-50 w-full py-4 md:py-6 bottom-0 ">
                    <button onClick={handelApplyDonation}
                        style={{ backgroundColor: card_bg }}
                        className=" opacity-100 text-white py-2 ml-8 px-4 font-semibold text-xl rounded-md">Donate {price}</button>
                </div>
            </div>
            <div className="py-8">
                <h1 className="text-5xl font-bold text-black py-4"> {title}</h1>
                <p className="leading-8 text-justify">{description}</p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
        </div>
    );
};

DonationDetail.propTypes = {
    donation:PropTypes.object
};

export default DonationDetail;