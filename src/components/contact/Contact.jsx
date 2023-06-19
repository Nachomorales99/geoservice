import Link from 'next/link';
import Map from '../googleMaps/Map';

export default function Contact() {
	return (
		<>
			<section className="flex flex-col items-center justify-center">
				<header className="flex flex-col items-center justify-center m-8">
					<h1 className="mx-5 m-4 text-2xl text-marron_oscuro font-bold border-b-4 w-fit pb-2">
						Contáctenos
					</h1>
				</header>
				<div className="container flex items-center justify-center flex-wrap">
					<div className="flex flex-col bg-slate_600 h-[25rem] w-[37.5rem] mx-1 justify-evenly p-1">
						<div className="flex flex-row justify-between">
							<div className="flex flex-col items-center justify-center">
								<img
									src="https://res.cloudinary.com/nacho-morales/image/upload/v1684948476/Geoservice/Iconos/Reloj-icon_ttysdh.png"
									alt="Clock"
								/>
								<h3>HORARIO</h3>
								<p>Lunes a Viernes</p>
								<p>
									9:00 a 13:00 <br /> 16:00 a 19:00 horas
								</p>
							</div>
							<div className="flex flex-col items-center justify-center">
								<img
									src="https://res.cloudinary.com/nacho-morales/image/upload/v1684948476/Geoservice/Iconos/Mail-icon_puvbsi.png"
									alt="Mail"
								/>
								<h3>EMAIL:</h3>
								<Link href="mailto:geoservice@geoservice.com.ar">
									<p>geoservice@geoservice.com.ar</p>
								</Link>
							</div>
						</div>
						<div className="flex flex-row justify-between">
							<div className="flex flex-col items-center justify-center">
								<img
									src="https://res.cloudinary.com/nacho-morales/image/upload/v1684948476/Geoservice/Iconos/Phone-icon_lpceym.png"
									alt="Phone"
								/>
								<h3>LLÁMANOS:</h3>
								<p>+5492614241129</p>
							</div>

							<div className="flex flex-col items-center justify-center">
								<img
									src="https://res.cloudinary.com/nacho-morales/image/upload/v1684951076/Geoservice/Iconos/Map-icon_cwq8yv.png"
									alt="Map"
								/>

								<h3>UBICACIÓN:</h3>
								<p>Adolfo Calle 350, Godoy Cruz, Mendoza</p>
							</div>
						</div>
					</div>
					<Map />
				</div>
			</section>
		</>
	);
}
