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
		{ name: 'Home', href: '/', current: true },
		{ name: 'Contact', href: '/contact', current: false },
		{ name: 'Servicios', href: '/servicios', current: false },
	]);

	function changeCurrent(item) {
		switch (item.name) {
			case 'Home':
				setNavigation([
					{ name: 'Home', href: '/', current: true },
					{ name: 'Contact', href: '/contact', current: false },
					{ name: 'Servicios', href: '/servicios', current: false },
				]);
				break;

			case 'Contact':
				setNavigation([
					{ name: 'Home', href: '/', current: false },
					{ name: 'Contact', href: '/contact', current: true },
					{ name: 'Servicios', href: '/servicios', current: false },
				]);
				break;
		}
	}

	return (
		<Disclosure as="nav" style={{ background: '#9f7459' }}>
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
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
														? 'bg-gray-900 text-white'
														: 'text-gray-300 hover:bg-gray-700 hover:text-white',
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

					<Disclosure.Panel className="sm:hidden">
						<div className="space-y-1 px-2 pb-3 pt-2">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									href={item.href}
									as="a"
									onClick={() => {
										changeCurrent(item);
									}}
									className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
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

/* <nav className="bg-white border-gray-200 dark:bg-gray-900">
	<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<a href="https://flowbite.com/" className="flex items-center">
			<img
				src="https://flowbite.com/docs/images/logo.svg"
				className="h-8 mr-3"
				alt="Flowbite Logo"
			/>
			<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
				Flowbite
			</span>
		</a>
		<button
			data-collapse-toggle="navbar-default"
			type="button"
			className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-default"
			aria-expanded="false"
		>
			<span className="sr-only">Open main menu</span>
			<svg
				className="w-6 h-6"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clipRule="evenodd"
				/>
			</svg>
		</button>
		<div className="hidden w-full md:block md:w-auto" id="navbar-default">
			<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
				<li>
					<a
						href="#"
						className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
						aria-current="page"
					>
						Home
					</a>
				</li>
				<li>
					<a
						href="#"
						className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
					>
						About
					</a>
				</li>
				<li>
					<a
						href="#"
						className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
					>
						Services
					</a>
				</li>
				<li>
					<a
						href="#"
						className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
					>
						Pricing
					</a>
				</li>
				<li>
					<a
						href="#"
						className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
					>
						Contact
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav> */
