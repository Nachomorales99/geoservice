import { services } from '../../constants/services.json';

export default function Services() {
	return (
		<>
			{services.map((service, index) => (
				<div key={index}>
					<h1 style={{ color: 'red' }}>{service.name}</h1>
					<h2 style={{ color: 'blue' }}>Servicios:</h2>
					<ul>
						{service.service.map((item, itemIndex) => (
							<li key={itemIndex}>{item}</li>
						))}
					</ul>
					<h2 style={{ color: 'orange' }}>Clientes:</h2>
					<ul>
						{service.clients.map((item, itemIndex) => (
							<li key={itemIndex}>{item}</li>
						))}
					</ul>
				</div>
			))}
		</>
	);
}
