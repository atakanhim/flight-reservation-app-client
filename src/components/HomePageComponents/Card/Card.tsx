import { FC } from 'react';
import { IconType } from 'react-icons'; // Import IconType for icon prop

interface CardProps {
    src: string;
    alt: string;
    icon: IconType;
    iconText: string;
}


const Card: FC<CardProps> = ({ src, alt, icon: Icon, iconText }) => {
    return (
        <div className="relative overflow-hidden rounded-3xl  w-[200px] h-[200px] ">
            <img src={src} alt={alt} className="w-full h-full object-cover" />
            {Icon && (
                <div className="absolute bottom-0 left-0 p-2 text-white flex flex-col items-start bg-opacity-0">
                    <Icon />
                    <span className=" w-auto">{iconText}</span>
                </div>
            )}
        </div>
    );
}

export default Card;