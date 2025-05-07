import * as THREE from 'three'
//canvas
const canvas =document.querySelector('canvas.webgl')

// Scene
const Scene = new THREE.Scene()

// Objet             parm -> width | height | depth
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'red'})
const mesh = new THREE.Mesh(geometry,material)
Scene.add(mesh)

//Sizes
const Sizes ={
  width:800,
  height:600
}

// Camera
const camera = new THREE.PerspectiveCamera(75,Sizes.width / Sizes.height)
camera.position.z = 3
Scene.add(camera)


// Renderer 
const renderer = new THREE.WebGLRenderer({
  canvas:canvas

})

renderer.setSize(Sizes.width,Sizes.height)
renderer.render(Scene,camera)