import { machines } from '../../constants/machines.json';
import { alegreya, roboto } from '@/utils/font';

export default function Machines() {
	return (
		<>
			<div className="flex flex-col justify-center items-center">
				<h2
					className={`mx-5 m-5 text-2xl text-marron_oscuro font-bold border-b-4 pb-2 w-fit text-center ${alegreya.className}`}
				>
					Nuestros equipos
				</h2>

				<div className="flex flex-wrap justify-center gap-10 px-2">
					{machines.map((el, index) => (
						<div className="w-full sm:w-96 shadow-xl rounded-md" key={index}>
							<div className="w-full h-72 sm:h-96 overflow-hidden object-center">
								<img
									src={el.img}
									alt={el.img}
									className="w-full h-full rounded-md"
								/>
							</div>
							<h1
								className={`py-2 mx-2 my-2 text-xl text-marron_oscuro font-semibold ${roboto.className}`}
							>
								{el.name}
							</h1>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
