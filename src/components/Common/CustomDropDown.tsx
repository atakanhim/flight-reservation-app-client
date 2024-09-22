import React, { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';

interface SideBarButtonProps {
    textStyle: string;
    text: string;
    border: string;
    inlineDropDownMenu: string;
}

const CustomDropDown: React.FC<SideBarButtonProps> = ({ textStyle, border, text, inlineDropDownMenu }) => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // Function to handle dropdown visibility toggle
    const handlePressButton = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <div
            className={`relative  text-xs md:text-base  transition-all duration-300  ${border} justify-center items-center flex gap-2  border-gray-100 ${isDropdownOpen && "border-purple-950"}  hover:border-purple-950 cursor-pointer rounded-xl`}
            onClick={handlePressButton}
        >
            <button className={`${textStyle}`}>{text}</button>
            {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
            {/* Dropdown content */}
            {isDropdownOpen && (
                <div className={`absolute border-b ${inlineDropDownMenu} border-r border-purple-950  w-[100px]   sm:w-32 bg-white shadow-lg  p-3 rounded-b-lg transition-all duration-1000`}>
                    <p className="py-1">Option 1</p>
                    <p className="py-1">Option 2</p>
                    <p className="py-1">Option 3</p>
                </div>
            )}
        </div>
    )
}

export default CustomDropDown
