import { machines } from '../../constants/machines.json';

export default function Machines() {
	return (
		<>
			<h2>Nuestros equipos</h2>
			<div>
				{machines.map((el, index) => (
					<>
						<div key={index}>
							<h1>{el.name}</h1>
							<img src={el.img} alt={el.img} />
						</div>
					</>
				))}
			</div>
		</>
	);
}
