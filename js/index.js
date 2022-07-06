
//import { RoundedBoxGeometry } from './threejs/examples/jsm/geometries/RoundedBoxGeometry.js'

let clicked = false
const scene = new THREE.Scene()
scene.background = new THREE.Color('#ee7674') // by default this is black
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer() //combines the scene and camera together; a WEBGL renderer is the most flexible
//const geometry = new RoundedBoxGeometry( 10, 10, 10, 6, 2 )
//to display anything with three.js we need three things: scene, camera and renderer, so that we can render the scene with camera.
// 75 refers to the field of view - the extent of the scene on the display at any given moment. innerWidth / innerHeight is the aspect ration. 0.1, 1000 refers to the near and far clipping plane. 
const container = document.querySelector('.container')

const width  = window.innerWidth
const height = window.innerHeight

container.appendChild(renderer.domElement)

//document.body.appendChild(renderer.domElement) //create the canvas element
renderer.setSize(width, height)

const geometry = new THREE.BoxGeometry(1, 1, 1) // size/radius, width, height
const material = new THREE.MeshBasicMaterial({ color: 0xEEEEEE }) //this is the colour of the 3D material
//const cube = new THREE.Mesh(geometry, material)

const loader = new THREE.TextureLoader()
const materials = [
  new THREE.MeshBasicMaterial({map: loader.load('images/one.png')}),
  new THREE.MeshBasicMaterial({map: loader.load('images/two.png')}),
  new THREE.MeshBasicMaterial({map: loader.load('images/three.png')}),
  new THREE.MeshBasicMaterial({map: loader.load('images/four.png')}),
  new THREE.MeshBasicMaterial({map: loader.load('images/five.png')}),
  new THREE.MeshBasicMaterial({map: loader.load('images/six.png')}),
]

const cube = new THREE.Mesh(geometry, materials)
scene.add(cube)
camera.position.z = 8

function animate() { 
	requestAnimationFrame(animate) // this creates a loop that draws the cube every time the screen refreshes, it pauses when the user navigates to a different tab.
  //cube.rotation.x += 0.06 //this rotates it at the speed I give it. 0.01 is very slow. 
  //cube.rotation.y += 0.04

renderer.render(scene, camera) //if this is not called, nothing will show.
}
animate()

function getRandomNumber(min, max) {
  min = Math.ceil(min) //rounds a number up to the next largest integer
  max = Math.floor(max) + 1 //The Math.floor() function returns the largest integer less than or equal to a given number.
  return Math.floor(Math.random() * (max - min) + min)
}

function spin() {
  let degrees = Math.PI / 16
  cube.rotation.y += degrees
  cube.rotation.x += degrees
}

const faces = {
  1: [4.5, -.2],
  2: [7.65, -.2],
  3: [1.375, 1.375],
  4: [4.515, 4.5],
  5: [-.2, -.2],
  6: [6.1, 2.9]
}

container.addEventListener('click', function() {
  let countdown = 40 // milliseconds/ the dice rolls for 4 seconds
  if (!clicked) {
    clicked = true

    let number = getRandomNumber(1,6)

    animation = setInterval(function() {
      countdown --
      if (countdown === 0) {
        // stop the cube at these co-ordinates
        cube.rotation.y = faces[number][0]
        cube.rotation.x = faces[number][1]
        clearInterval(animation)
        clicked = false

        console.log(number)

        //if (number === 6) setTimeout(() => alert(`Congrats! You rolled a ${number}.`), 100)

        if (number === 6) {
          setTimeout(function() {
            alert(`Congratulations! You rolled a ${number} ! 🎁 `)
          }, 100)
        }

      }
      spin()
    }, 40) // ms
  }
})

window.addEventListener( 'resize', onWindowResize, false ); //add a window resize listener to detect when the browser size has changed

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}
