import Sponsor from '../components/sponsor/Sponsor.jsx';
import Header from '@/components/header/Header.jsx';
import Services from '@/components/services/Services.jsx';
import Machines from '@/components/machines/Machines.jsx';

export default function Home() {
	return (
		<>
			<Header />
			<h1>Estudios integrales del suelo, geotécnica y perforaciones</h1>
			<Services />
			<Machines />
			<Sponsor />
		</>
	);
}
