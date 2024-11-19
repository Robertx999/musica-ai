uniform float uTime;
varying vec3 wavePos;
varying vec3 vNormal;

void main() {
	const float frequency = 6.0;
	const float amplitude = 0.15;
	wavePos = vec3(position.x, position.y,sin(sqrt(pow(position.x,2.0)+pow(position.y,2.0))*frequency-uTime)*amplitude);
	vec4 mvPosition = modelViewMatrix * vec4( wavePos, 1.0 );

	gl_Position = projectionMatrix * mvPosition;
	vNormal = normal;
}