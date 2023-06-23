'use client';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Link from 'next/link';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navigation() {
	const [navigation, setNavigation] = useState([
		{ name: 'Inicio', href: '/', current: true },
		{ name: 'Contacto', href: '/contact', current: false },
		{ name: 'Mineria', href: '/#mineria', current: false },
		{ name: 'Petroleras', href: '/#petroleras', current: false },
		{ name: 'Hidroeléctricas', href: '/#hidroelectricas', current: false },
		{ name: 'Obras', href: '/#obras', current: false },
	]);

	function changeCurrent(item) {
		switch (item.name) {
			case 'Inicio':
				setNavigation([
					{ name: 'Inicio', href: '/', current: true },
					{ name: 'Contacto', href: '/contact', current: false },
					{ name: 'Mineria', href: '/#mineria', current: false },
					{ name: 'Petroleras', href: '/#petroleras', current: false },
					{
						name: 'Hidroeléctricas',
						href: '/#hidroelectricas',
						current: false,
					},
					{ name: 'Obras', href: '/#obras', current: false },
				]);
				break;

			case 'Contacto':
				setNavigation([
					{ name: 'Inicio', href: '/', current: false },
					{ name: 'Contacto', href: '/contact', current: true },
					{ name: 'Mineria', href: '/#mineria', current: false },
					{ name: 'Petroleras', href: '/#petroleras', current: false },
					{
						name: 'Hidroeléctricas',
						href: '/#hidroelectricas',
						current: false,
					},
					{ name: 'Obras', href: '/#obras', current: false },
				]);
				break;

			case 'Mineria':
				setNavigation([
					{ name: 'Inicio', href: '/', current: true },
					{ name: 'Contacto', href: '/contact', current: false },
					{ name: 'Mineria', href: '/#mineria', current: false },
					{ name: 'Petroleras', href: '/#petroleras', current: false },
					{
						name: 'Hidroeléctricas',
						href: '/#hidroelectricas',
						current: false,
					},
					{ name: 'Obras', href: '/#obras', current: false },
				]);
				break;

			case 'Petroleras':
				setNavigation([
					{ name: 'Inicio', href: '/', current: true },
					{ name: 'Contacto', href: '/contact', current: false },
					{ name: 'Mineria', href: '/#mineria', current: false },
					{ name: 'Petroleras', href: '/#petroleras', current: false },
					{
						name: 'Hidroeléctricas',
						href: '/#hidroelectricas',
						current: false,
					},
					{ name: 'Obras', href: '/#obras', current: false },
				]);
				break;

			case 'Hidroeléctricas':
				setNavigation([
					{ name: 'Inicio', href: '/', current: true },
					{ name: 'Contacto', href: '/contact', current: false },
					{ name: 'Mineria', href: '/#mineria', current: false },
					{ name: 'Petroleras', href: '/#petroleras', current: false },
					{
						name: 'Hidroeléctricas',
						href: '/#hidroelectricas',
						current: false,
					},
					{ name: 'Obras', href: '/#obras', current: false },
				]);
				break;

			case 'Obras':
				setNavigation([
					{ name: 'Inicio', href: '/', current: true },
					{ name: 'Contacto', href: '/contact', current: false },
					{ name: 'Mineria', href: '/#mineria', current: false },
					{ name: 'Petroleras', href: '/#petroleras', current: false },
					{
						name: 'Hidroeléctricas',
						href: '/#hidroelectricas',
						current: false,
					},
					{ name: 'Obras', href: '/#obras', current: false },
				]);
				break;
		}
	}

	return (
		<Disclosure as="nav" style={{ background: '#9f7459' }}>
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-white">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									{open ? (
										<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<Bars3Icon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="block h-10 w-auto lg:hidden"
										src="https://res.cloudinary.com/nacho-morales/image/upload/v1684860890/Geoservice/Logo_hd_pjie2t.png"
										alt="Your Company"
									/>
									<img
										className="hidden h-10 w-auto lg:block"
										src="https://res.cloudinary.com/nacho-morales/image/upload/v1684860890/Geoservice/Logo_hd_pjie2t.png"
										alt="Your Company"
									/>
								</div>
								<div className="hidden sm:ml-6 sm:block">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link
												key={item.name}
												href={item.href}
												onClick={() => changeCurrent(item)}
												className={classNames(
													item.current
														? 'bg-slate_900  text-white'
														: 'text-gray-300 hover:bg-slate_900 hover:text-white',
													'rounded-md px-3 py-2 text-sm font-medium',
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden text-white">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									href={item.href}
									as="a"
									onClick={() => {
										changeCurrent(item);
									}}
									className={classNames(
										'text-gray-300 hover:bg-slate_900 hover:text-white block rounded-md px-3 py-2 text-base font-medium',
										{
											'bg-slate_900 text-white': item.current,
										},
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
