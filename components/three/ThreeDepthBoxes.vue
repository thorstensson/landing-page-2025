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

let camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, composer: EffectComposer, object: THREE.Object3D

const offset = computed(() => {
    let offsetval
    (window.innerWidth < 992) ? offsetval = 60 : offsetval = 140
    return offsetval
})

onMounted(() => {
    let objHeight = parentEl.value!.clientHeight
    let objWidth = parentEl.value!.clientWidth
    renderer = new THREE.WebGLRenderer({ alpha: true, canvas: mycanvas.value as HTMLCanvasElement })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(objWidth, objHeight)
    renderer.setAnimationLoop(animate)

    camera = new THREE.PerspectiveCamera(70, objWidth / objHeight, 1, 1000)
    camera.position.z = 400

    const scene = new THREE.Scene()

    object = new THREE.Object3D()
    scene.add(object)

    const geometry = new THREE.SphereGeometry(1, 4, 4)
    const material = new THREE.MeshDepthMaterial()

    for (let i = 0; i < 100; i++) {
        const mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize()
        mesh.position.multiplyScalar(Math.random() * 400)
        mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2)
        mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 50
        object.add(mesh)
    }

    scene.add(new THREE.AmbientLight(0x404040))

    const light = new THREE.DirectionalLight(0xffffff, 3)
    light.position.set(1, 1, 1)
    scene.add(light)

    //postprocess
    composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))

    const effect2 = new ShaderPass(RGBShiftShader)
    effect2.uniforms['amount'].value = 0.0015
    composer.addPass(effect2)

    const effect3 = new OutputPass()
    composer.addPass(effect3)

    window.addEventListener('resize', onWindowResize)
    window.addEventListener("deviceorientation", onWindowResize)
})

const onWindowResize = () => {
    let objHeight = parentEl.value!.clientHeight
    let objWidth = parentEl.value!.clientWidth
    camera.aspect = objWidth / objHeight
    camera.updateProjectionMatrix()
    renderer.setSize(objWidth, objHeight)
    composer.setSize(objWidth, objHeight)

    objHeight = parentEl.value!.clientHeight
    objWidth = parentEl.value!.clientWidth
}

const animate = () => {
    object.rotation.x += 0.005
    object.rotation.y += 0.01
    composer.render()
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