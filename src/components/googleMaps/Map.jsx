'use client';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Map() {
	const containerStyle = {
		width: '600px',
		height: '400px',
		marginLeft: '.25rem',
		marginRight: '.25rem',
	};

	const center = {
		lat: -32.9167748,
		lng: -68.8413216,
	};

	return (
		<LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_G_KEY}>
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
				<Marker position={{ lat: -32.9167748, lng: -68.8413216 }} />
			</GoogleMap>
		</LoadScript>
	);
}
