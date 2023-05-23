import { sponsor } from "../../constants/index.json";

export default function Sponsor() {
    return (
    <div>
        <h1>Confían en nosotros</h1>
        <div className="flex flex-row flex-wrap justify-center gap-10">
            {sponsor.map((spon) => (
                <div
                className="w-28 h-28"
                key={spon.img}
                >
                <img
                    src={spon.img}
                    alt={spon.img}
                    className="object-cover grayscale transition duration-300 hover:grayscale-0"
                    />
                </div>
            ))}
        </div>
    </div>
    );
}

