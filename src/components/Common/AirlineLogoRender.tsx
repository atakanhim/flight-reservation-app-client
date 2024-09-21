
import { useState } from 'react';
import image from '../../assets/airlines/thy.png'
const AirlineLogoRender = ({ airlineCode }) => {
    const [logoPath, setLogoPath] = useState(`src/assets/airlines/${airlineCode.toLowerCase()}.png`);

    const handleError = () => {
        if (airlineCode.toLowerCase() !== 'thy') {
            // Eğer mevcut logo bulunamazsa THY logosuna yönlendir
            setLogoPath('src/assets/airlines/thy.png');
        }
    };
    return (
        <div>
            <img src={logoPath} onError={handleError} alt={`${airlineCode} Logo`} style={{ width: '30px', height: '30px' }} />
        </div>
    );
}

export default AirlineLogoRender;
