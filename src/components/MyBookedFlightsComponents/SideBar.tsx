
import { FaStar } from 'react-icons/fa6';
import CustomDropDown from '../Common/CustomDropDown';

const YourComponent = () => {
    // State to toggle dropdown visibility


    return (
        <div className='flex flex-wrap bg-white w-full p-3 justify-between items-center border  rounded-t-2xl'>
            <div className='flex flex-wrap flex-row gap-3'>
                {/* Side bar sol taraf */}
                <SideBarButton value="Times" />
                <SideBarButton value="Stops" />
                <SideBarButton value="Airlines" />
                <SideBarButton value="Airports" />
                <SideBarButton value="Amenities" />

                {/* Edit Search button */}

                <CustomDropDown inlineDropDownMenu='top-8' text='Edit Search' border='border px-3 py-2' textStyle="text-blue-300" />

            </div>
            <div className=''>
                {/* Side bar sag taraf */}
                <div className='flex flex-row'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='flex flex-row'>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
        </div>
    );
};

const SideBarButton = ({ value }) => (
    <button className="px-3 py-2">{value}</button>
);

export default YourComponent;
