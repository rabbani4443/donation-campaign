import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Card = ({ card }) => {
    const {id,title, category, picture, category_bg, card_bg, color_text_button_bg} = card || {};

    return (
        <>
        <Link to={`/donations/${id}`}>
        <div>
            <div style={{backgroundColor: category_bg}} className='card rounded-lg'>
                <figure><img className='w-full' src={picture} alt="Shoes" /></figure>
                <div className='p-3' >
                    <button 
                    style={{backgroundColor: color_text_button_bg, color:card_bg }} 
                    className='text-sm font-medium px-3 py-1 rounded-md'>{category} </button>
                    <h1 
                    style={{color: card_bg }} 
                    className='text-lg font-semibold'> {title} </h1>
                </div>
            </div>
        </div>
        </Link>
        </>
    );
};

Card.propTypes = {
    card: PropTypes.object
}
export default Card;