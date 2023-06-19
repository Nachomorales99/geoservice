import { sponsor } from '../../constants/index.json';

export default function Sponsor() {
	return (
		<>
			<div className="flex justify-center">
				<h2 className="mx-5 m-5 text-2xl text-marron_oscuro font-bold border-b-4 pb-2 w-fit text-center">
					Confían en nosotros
				</h2>
			</div>
			<div className="flex flex-row items-center flex-wrap justify-center gap-10">
				{sponsor.map((spon) => (
					<img
						src={spon.img}
						alt={spon.img}
						className="object-contain w-28 h-28 opacity-50 hover:opacity-100 grayscale transition duration-300 hover:grayscale-0"
					/>
				))}
			</div>
		</>
	);
}
