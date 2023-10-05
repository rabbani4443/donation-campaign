import { useState } from "react";
import Cards from "../../Cards/Cards";

const Banner = ({cards}) => {
    const [searchValue, setSearchValue] = useState('')
    const handelSearch = e => {
        e.preventDefault()
        const searchText = e.target.name.value.toLowerCase();
        setSearchValue(searchText)

    }

    return (
        <div>
            <div>
                <div className="hero min-h-[60vh] " style={{ backgroundImage: 'url(https://i.ibb.co/GvL01DK/Rectangle-4281.png)' }}>
                    <div className="  bg-white hero-overlay bg-opacity-90"></div>
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                        <div className="">
                            <form onSubmit={handelSearch} className=" py-7 flex">
                                <input type="text" placeholder="Search here...." name="name" className="w-3/4 border-[#DEDEDE] border-y-2 border-l-2 pl-4 rounded-s-lg focus:outline-gray-400 " />
                                <button  className="w-1/4 bg-red-500 hover:bg-red-600  text-white text-base font-semibold py-4 px-5 rounded-e-lg ">Search </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Cards cards={cards} searchValue={searchValue} ></Cards>
        </div>
    );
};

export default Banner;