import { sponsor } from "../../constants/index.json";

export default function Sponsor() {
    return (
    <div>
        <h1>Confían en nosotros</h1>
        <div className="flex flex-row items-center flex-wrap justify-center gap-10">
            {sponsor.map((spon) => (
                
                <img
                    src={spon.img}
                    alt={spon.img}
                    className="object-contain w-28 h-28 opacity-50 hover:opacity-100 grayscale transition duration-300 hover:grayscale-0"
                    />
                
            ))}
        </div>
    </div>
    );
}

