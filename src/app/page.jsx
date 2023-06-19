import Sponsor from '../components/sponsor/Sponsor.jsx';
import Header from '@/components/header/Header.jsx';
import Services from '@/components/services/Services.jsx';
import Machines from '@/components/machines/Machines.jsx';

export default function Home() {
	return (
		<>
			<Header />
			<h1 className=" flex items-center justify-center mx-2 m-2 text-2xl text-marron_oscuro font-bold w-fit">
				Estudios integrales del suelo, geotécnica y perforaciones
			</h1>
			<div className="flex justify-center flex-col items-center rounded-sm">
				<Services />
			</div>
			<Machines />
			<Sponsor />
		</>
	);
}
