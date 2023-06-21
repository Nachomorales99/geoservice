import { services } from '@/json/services.json';
import { BsChevronCompactDown } from 'react-icons/bs';
import { alegreya, roboto } from '@/utils/font';

export default function Services() {
	const service = services;
	return (
		<>
			{service.map((el, index) => (
				<div
					id={el.id}
					className="w-3/5 shadow-xl my-10 pb-5 rounded-sm max-sm:w-80"
					key={index}
				>
					<img src={el.img} alt={el.name} className="w-full rounded-md" />

					<div className="container mx-auto">
						<div className="m-8 rounded overflow-hidden">
							<div
								className="group outline-none accordion-section"
								tabIndex={index}
							>
								<div className="group flex justify-between items-center transition ease duration-500 cursor-pointer pr-10 relative">
									<div className="transition ease duration-500">
										<h1
											className={`mx-5 m-4 text-2xl text-marron_oscuro font-bold border-b-4 w-fit pb-2 ${alegreya.className}`}
										>
											{el.name}
										</h1>
									</div>
									<div className="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-4 mt-6 mr-2">
										<BsChevronCompactDown />
									</div>
								</div>
								<div className="group-focus:max-h-screen max-h-0 px-4 overflow-y-auto overflow-x-hidden ease duration-500 ">
									<h2
										className={`mx-5 text-gray font-semibold text-lg ${alegreya.className}`}
									>
										Servicios
									</h2>
									<ul className="flex flex-wrap mx-5 mb-5 ">
										{el.service.map((item, itemIndex) => (
											<li
												className={`px-4 py-2 mr-2 my-2 rounded-sm shadow-xl bg-beige font-medium text-sm ${roboto.className}`}
												key={itemIndex}
											>
												{item}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
