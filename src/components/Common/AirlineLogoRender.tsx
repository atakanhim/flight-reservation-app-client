
import { useState } from 'react';

const AirlineLogoRender = ({ airlineCode }) => {
    const [logoPath, setLogoPath] = useState(`/assets/airlines/${airlineCode.toLowerCase()}.png`);

    const handleError = () => {
        if (airlineCode.toLowerCase() !== 'thy') {
            // Eğer mevcut logo bulunamazsa THY logosuna yönlendir
            setLogoPath('/assets/airlines/thy.png');
        }
    };
    return (
        <div>
            <img src={logoPath} onError={handleError} alt={`${airlineCode} Logo`} style={{ width: '30px', height: '30px' }} />
        </div>
    );
}

export default AirlineLogoRender;
