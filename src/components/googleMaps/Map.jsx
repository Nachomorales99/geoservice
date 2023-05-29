'use client';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import API_KEY_GOOGLE_MAPS from '@/constants/apiKey';

export default function Map() {
	const containerStyle = {
		width: '600px',
		height: '400px',
		marginLeft: '2rem',
	};

	const center = {
		lat: -32.9167748,
		lng: -68.8413216,
	};

	return (
		<LoadScript googleMapsApiKey={API_KEY_GOOGLE_MAPS}>
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
				<Marker position={{ lat: -32.9167748, lng: -68.8413216 }} />
			</GoogleMap>
		</LoadScript>
	);
}
