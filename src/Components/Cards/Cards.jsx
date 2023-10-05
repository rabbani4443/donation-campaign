import PropTypes from 'prop-types';
import Card from './Card/Card';

const Cards = ({ cards, searchValue }) => {
    const health = cards?.filter(card => card.category === "Health");
    const education = cards?.filter(card => card.category === "Education");
    const clothing = cards?.filter(card => card.category === "Clothing");
    const food = cards?.filter(card => card.category === "Food");

    let filteredCards;
    switch (searchValue) {
        case 'health':
            filteredCards = health;
            break;
        case 'education':
            filteredCards = education;
            break;
        case 'clothing':
            filteredCards = clothing;
            break;
        case 'food':
            filteredCards = food;
            break;
        default:
            filteredCards = cards;
    }

    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-20'>
                {
                    filteredCards?.map(card => <Card key={card.id} card={card} />)
                }
            </div>
        </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.array.isRequired,
    searchValue: PropTypes.string.isRequired
};

export default Cards;
