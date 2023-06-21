import Link from 'next/link';
import Map from '../googleMaps/Map';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { HiOutlinePhone } from 'react-icons/hi';
import { RiMapPinLine, RiMailSendLine } from 'react-icons/ri';
import { alegreya, roboto } from '@/utils/font';

export default function Contact() {
	return (
		<>
			<section className="flex flex-col items-center justify-center">
				<header className="flex flex-col items-center justify-center m-8">
					<h1
						className={`mx-5 m-4 text-2xl text-marron_oscuro font-bold border-b-4 w-fit pb-2 ${alegreya.className}`}
					>
						Contáctenos
					</h1>
					<div className=" shadow-xl p-4 mx-5 text-center flex items-center justify-center w-fit">
						<h1
							className={`mx-2 m-2 text-xl text-marron_oscuro font-bold w-fit ${roboto.className}`}
						>
							"Expertos en suelos, geotécnica y perforaciones. Tu aliado
							integral para proyectos sólidos y exitosos"
						</h1>
					</div>
				</header>

				<div className="container flex items-center justify-center flex-wrap">
					<div className="flex flex-col bg-slate_900 h-[25rem] w-[37.5rem] mx-1 justify-evenly p-1 text-white">
						<div className="flex flex-row justify-around">
							<div className="flex flex-col items-center justify-center">
								<AiOutlineClockCircle className=" text-3xl mb-4" />
								<h3 className={`text-xl ${alegreya.className}`}>Horario</h3>
								<p>Lunes a Viernes</p>
								<span>9:00 a 13:00</span>
								<span>16:00 a 19:00</span>
							</div>
							<div className="flex flex-col items-center justify-center">
								<RiMailSendLine className=" text-3xl mb-4" />
								<h3 className={`text-xl ${alegreya.className}`}>Email</h3>
								<Link href="mailto:geoservice@geoservice.com.ar">
									<p>geoservice@geoservice.com.ar</p>
								</Link>
							</div>
						</div>
						<div className="flex flex-row justify-around">
							<div className="flex flex-col items-center justify-center">
								<HiOutlinePhone className=" text-3xl mb-4" />
								<h3 className={`text-xl ${alegreya.className}`}>Llámanos</h3>
								<p>+5492614241129</p>
							</div>

							<div className="flex flex-col items-center justify-center">
								<RiMapPinLine className=" text-3xl mb-4" />

								<h3 className={`text-xl ${alegreya.className}`}>Ubicación</h3>
								<span>Adolfo Calle 350</span>
								<span>Godoy Cruz, Mendoza</span>
							</div>
						</div>
					</div>
					<Map />
				</div>
			</section>
		</>
	);
}
