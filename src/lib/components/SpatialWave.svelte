<script lang="ts">
	import { Canvas, T, useTask } from '@threlte/core';
	import vertexShader from '@/shaders/wave.vert?raw';
	import fragmentShader from '@/shaders/wave.frag?raw';
	import { spring } from 'svelte/motion';

	let uTime = $state(0);
	let width: number = $state(0);
	let idle_rotation = 0;
	let spring_rotation = spring(0, { stiffness: 0.1, damping: 0.6 });
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	class="h-full w-full"
	onmousemove={({ x }) => {
		spring_rotation.set((width / 2 - x) / width);
	}}
	bind:clientWidth={width}
>
	<Canvas>
		<T.PerspectiveCamera
			makeDefault
			fov={75}
			far={1000}
			position={[0, -2.0, 1.2]}
			rotation={[45, 0, 0]}
		/>
		<T.Mesh
			oncreate={(mesh) => {
				useTask((delta) => {
					uTime += 2.5 * delta;
					idle_rotation += 0.2 * delta;
					mesh.rotation.z = idle_rotation - $spring_rotation;
				});
			}}
			position={[0, 0, 0]}
		>
			<T.PlaneGeometry args={[5.0, 5.0, 20, 20]} />
			<T.ShaderMaterial
				{vertexShader}
				{fragmentShader}
				uniforms={{
					uTime: {
						value: 0
					}
				}}
				uniforms.uTime.value={uTime}
				wireframe
				transparent
			/>
		</T.Mesh>
	</Canvas>
</div>
