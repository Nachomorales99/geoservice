import { services } from '../../constants/services.json';

export default function Services() {
	return (
		<>
			{services.map((el, index) => (
				<div key={index}>
					<h1 style={{ color: 'red' }}>{el.name}</h1>
					<img src={el.img} alt={el.name} />
					<h2 style={{ color: 'blue' }}>Servicios:</h2>
					<ul>
						{el.service.map((item, itemIndex) => (
							<li key={itemIndex}>{item}</li>
						))}
					</ul>
					<h2 style={{ color: 'orange' }}>Clientes:</h2>
					<ul>
						{el.clients.map((item, itemIndex) => (
							<li key={itemIndex}>{item}</li>
						))}
					</ul>
				</div>
			))}
		</>
	);
}
