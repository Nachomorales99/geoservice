import Link from 'next/link';

export default function Contact() {
	return (
		<>
			<section>
				<header className="flex flex-col items-center justify-center">
					<h1>Contactenos</h1>
					<p>
						Expertos en suelos, geotécnica y perforaciones. Tu aliado integral
						para proyectos sólidos y exitosos
					</p>
				</header>
				<div className="flex flex-row">
					<div className="flex flex-col">
						<div className="flex flex-row">
							<div className="flex flex-col items-center justify-center">
								<img
									src="https://res.cloudinary.com/nacho-morales/image/upload/v1684951076/Geoservice/Iconos/Map-icon_cwq8yv.png"
									alt="Map"
								/>

								<p>UBICACIÓN:</p>
								<p>Adolfo Calle 350, Godoy Cruz, Mendoza</p>
							</div>
							<div className="flex flex-col items-center justify-center">
								<img
									src="https://res.cloudinary.com/nacho-morales/image/upload/v1684948476/Geoservice/Iconos/Mail-icon_puvbsi.png"
									alt="Mail"
								/>
								<p>EMAIL:</p>
								<Link href="mailto:geoservice@geoservice.com.ar">
									<p>geoservice@geoservice.com.ar</p>
								</Link>
							</div>
						</div>
						<div className="flex flex-row">
							<div className="flex flex-col items-center justify-center">
								<img
									src="https://res.cloudinary.com/nacho-morales/image/upload/v1684948476/Geoservice/Iconos/Phone-icon_lpceym.png"
									alt="Phone"
								/>
								<p>LLÁMANOS:</p>
								<p>+5492614241129</p>
							</div>
							<div className="flex flex-col items-center justify-center">
								<img
									src="https://res.cloudinary.com/nacho-morales/image/upload/v1684948476/Geoservice/Iconos/Reloj-icon_ttysdh.png"
									alt="Clock"
								/>
								<p>HORARIO</p>
								<p>Lunes a Viernes</p>
								<p>9:00 a 13:00 - 16:00 a 19:00 horas</p>
							</div>
						</div>
					</div>
					<div>MAPA</div>
				</div>
			</section>
		</>
	);
}
