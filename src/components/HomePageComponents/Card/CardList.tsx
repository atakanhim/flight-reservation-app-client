import Card from "./Card";
import Card1 from '../../../assets/card1.jpeg';
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
                src={Card1}
                alt="Card1"
                icon={FaCarRear}
                iconText="CAR RENTALS"
            />
            <Card
                src={Card1}
                alt="Card1"
                icon={FaCarRear}
                iconText="CAR RENTALS"
            />

        </div>

    )
}
