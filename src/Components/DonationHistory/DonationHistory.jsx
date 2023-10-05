import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationHistory = ({ donation }) => {
    const { id, picture, card_bg, title, price, color_text_button_bg, category_bg, category } = donation;
    return (
        <div>
            <div>
                <div style={{ backgroundColor: category_bg }} className='rounded-lg md:flex flex-grow w-full h-full'>
                    <figure className='md:w-5/12'><img className='w-full h-full' src={picture} alt="Shoes" /></figure>
                    <div className='p-3 flex-grow md:ml-3' >
                        <button
                            style={{ backgroundColor: color_text_button_bg, color: card_bg }}
                            className='text-sm font-medium px-3 py-1 rounded-md'>{category} </button>
                        <h1 className='text-lg font-semibold text-black py-3'> {title} </h1>
                        <h1
                            style={{ color: card_bg }}
                            className='text-base font-semibold pb-3'> {price} </h1>

                        <Link to={`/donations/${id}`}>
                        <button
                        style={{ backgroundColor: card_bg }}
                        className="  text-white py-1 px-2 font-semibold text-lg rounded-md">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

DonationHistory.propTypes = {
    donation: PropTypes.object
};

export default DonationHistory;