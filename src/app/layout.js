import Navigation from '@/components/navigation/Navigation';
import '../styles/globals.css';
import Footer from '@/components/footer/Footer';

export const metadata = {
	title: 'Geoservice',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="https://res.cloudinary.com/nacho-morales/image/upload/v1684860890/Geoservice/Logo_hd_pjie2t.png"
				/>
			</head>
			<body>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
