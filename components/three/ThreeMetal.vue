<script setup lang="ts">
import { useParentElement } from '@vueuse/core'
import * as THREE from 'three'

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'

import { RGBShiftShader } from 'three/addons/shaders/RGBShiftShader.js'
import { DotScreenShader } from 'three/addons/shaders/DotScreenShader.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'

const mycanvas = useTemplateRef('canvas')
const parentEl = useParentElement()

const parameters = {
    radius: 0.6,
    tube: 0.2,
    tubularSegments: 150,
    radialSegments: 20,
    p: 2,
    q: 3,
    thickness: 0.5,
};

let camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, composer: EffectComposer, object: THREE.Object3D, scene

onMounted(() => {
    let objHeight = parentEl.value!.clientHeight
    let objWidth = parentEl.value!.clientWidth

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, canvas: mycanvas.value as HTMLCanvasElement })

    renderer.xr.enabled = true;

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 10;
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(objWidth, objHeight)
    renderer.setAnimationLoop(animate)

    camera = new THREE.PerspectiveCamera(70, objWidth / objHeight, 1, 1000)
    camera.position.set(0, 1.3, .7);

    scene = new THREE.Scene()

    const torusGeometry = new THREE.TorusKnotGeometry(...Object.values(parameters));
    const torusMaterial = new THREE.MeshPhysicalMaterial({
        color:0x000000, emissive:0x000000, roughness:10, metalness:30, flatShading:true, reflectivity:.9, iridescence:2
    });

    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.name = 'torus';
    torus.position.y = 1.5;
    torus.position.z = - 2;
    scene.add(torus);

    const light = new THREE.DirectionalLight(0x222222, 3)
    light.position.set(1, 1, 1)
    scene.add(light)


    window.addEventListener('resize', onWindowResize)
    window.addEventListener("deviceorientation", onWindowResize)
})

const onWindowResize = () => {
    let objHeight = parentEl.value!.clientHeight
    let objWidth = parentEl.value!.clientWidth
    camera.aspect = objWidth / objHeight
    camera.updateProjectionMatrix()
    renderer.setSize(objWidth, objHeight)
}

const animate = () => {
    const time = performance.now() * 0.0002;
    const torus = scene.getObjectByName('torus');
    torus.rotation.x = time * 0.4;
    torus.rotation.y = time;
    renderer.render(scene, camera);
}
</script>

<template>
    <canvas class="canvas" ref="canvas" />
</template>

<style scoped lang="scss">
.canvas {
    /*it seems three calculates a few pixels off on some resizes so we force height gulp*/
    height: 100% !important;
    border: none;

}
</style>