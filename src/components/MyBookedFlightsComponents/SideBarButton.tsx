import React from 'react';

interface SideBarButtonProps {
    value: string;
}

const SideBarButton: React.FC<SideBarButtonProps> = ({ value }) => {
    return (
        <>
            <button className='border transition-all duration-300 rounded-md border-gray-300 text-xm px-3 py-1 hover:border-purple-950'>
                {value}
            </button>
        </>

    );
}

export default SideBarButton;
