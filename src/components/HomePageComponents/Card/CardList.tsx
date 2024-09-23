import Card from "./Card";
import Card1 from '../../../assets/card1.jpeg';
import Card2 from '../../../assets/card2.webp';
import Card3 from '../../../assets/card3.jpg';
import { FaCarRear } from "react-icons/fa6";


export default function CardList() {

    return (
        <div className="border flex flex-row 2xl:flex-col justify-center items-center gap-3 p-3 ">
            <Card
                src={Card1}
                alt="Card1"
                icon={FaCarRear}
                iconText="CAR RENTALS"
            />
            <Card
                src={Card2}
                alt="Card2"
                icon={FaCarRear}
                iconText="HOTELS"
            />
            <Card
                src={Card3}
                alt="Card3"
                icon={FaCarRear}
                iconText="TRAVEL PACKAGES"

            />

        </div>

    )
}
