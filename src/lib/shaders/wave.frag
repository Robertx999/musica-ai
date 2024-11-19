varying vec3 wavePos;
varying vec3 vNormal;

void main() {
	vec3 color = vec3((wavePos.z*3.0+0.5));
	gl_FragColor = vec4( 0.9803921569, 0.9803921569, 0.9803921569, (wavePos.z*2.5+0.25)*smoothstep(0.0,1.0,(1.0-length(wavePos.xy))*0.2+0.3) );
}