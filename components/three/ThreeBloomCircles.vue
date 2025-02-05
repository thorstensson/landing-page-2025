<script setup lang="ts">
import { useParentElement } from '@vueuse/core'
import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js'

const mycanvas = useTemplateRef('canvas')
const parentEl = useParentElement()

let camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, composer: EffectComposer, object: THREE.Object3D, vector: THREE.Vector3, geometry: THREE.BufferGeometry, scene: THREE.Scene, particles: THREE.Points, vertex: THREE.Vector3, controls: OrbitControls, material:THREE.PointsMaterial

onMounted(() => {
    init()
    initPoints()
})

// TODO: Will have to revisit this: aware of that post process and more need disposing (this Landing page kindof has its own life)
onUnmounted(() => {
    geometry.dispose()
    composer.dispose()
    material.dispose()
    renderer.dispose()
})

const init = () => {
    let objHeight = parentEl.value!.clientHeight
    let objWidth = parentEl.value!.clientWidth

    // renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, canvas: mycanvas.value as HTMLCanvasElement })
    renderer.setClearColor(0x0F0F0F, 0)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(objWidth, objHeight)
    renderer.setAnimationLoop(animate)

    // camera
    camera = new THREE.PerspectiveCamera(70, objWidth / objHeight, 1, 1000)
    camera.position.z = 400

    controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true

    // scene
    scene = new THREE.Scene()

    // object
    //var object = new THREE.Object3D()
    //scene.add(object)
    vector = new THREE.Vector3()

    // lights
    scene.add(new THREE.AmbientLight(0x404040))
    const light = new THREE.DirectionalLight(0xffffff, 3)
    light.position.set(1, 1, 1)
    scene.add(light)

    // postprocess
    composer = new EffectComposer(renderer)
    composer.addPass(new RenderPass(scene, camera))

    // add bloom, unfortunattely at the moment Three bloom cannot support transparent canvas so we get black background
    const effect2 = new UnrealBloomPass(new THREE.Vector2(parentEl.value!.clientWidth, parentEl.value!.clientHeight), 1.5, 0.4, 0.85)
    effect2.threshold = 0
    effect2.strength = 3
    effect2.radius = 0.01
    composer.addPass(effect2)

    const effect3 = new OutputPass()
    composer.addPass(effect3)

    window.addEventListener('resize', onWindowResize)
    window.addEventListener("deviceorientation", onWindowResize)
}

const initPoints = () => {
    geometry = new THREE.BufferGeometry()

    let positions = []
    for (let i = 0; i < 3000; i++) {
        vertex = randomPointInSphere(200)
        positions.push(vertex.x, vertex.y, 0)
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    material = new THREE.PointsMaterial({ color: 0x65fbd2, size: 0.1 })
    particles = new THREE.Points(geometry, material)
    scene.add(particles)
}

const randomPointInSphere = (radius:number) => {
    const x = THREE.MathUtils.randFloat(-1, 1)
    const y = THREE.MathUtils.randFloat(-1, 1)
    const z = THREE.MathUtils.randFloat(-1, 1)
    const normalizationFactor = 1 / Math.sqrt(x * x + y * y)

    vector.x = x * normalizationFactor * THREE.MathUtils.randFloat(0.5 * radius, 1.2 * radius)
    vector.y = y * normalizationFactor * THREE.MathUtils.randFloat(0.5 * radius, 1.2 * radius)
    vector.z = 0
    return vector
}

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
    controls.update()
    renderer.render(scene, camera)
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
    background-color: #222;
}
</style>