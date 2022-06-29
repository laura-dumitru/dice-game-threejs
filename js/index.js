
//import { RoundedBoxGeometry } from './threejs/examples/jsm/geometries/RoundedBoxGeometry.js'
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f5e8ef');
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer(); //a WEBGL renderer is the most flexible
//const geometry = new RoundedBoxGeometry( 10, 10, 10, 6, 2 );
//to display anything with three.js we need three things: scene, camera and renderer, so that we can render the scene with camera.
// 75 refers to the field of view - the extent of the scene on the display at any given moment. innerWidth / innerHeight is the aspect ration. 0.1, 1000 refers to the near and far clipping plane. 

const container = document.querySelector('.container');

const width  = 640;
const height = 640;

container.appendChild(renderer.domElement)
//document.body.appendChild( renderer.domElement ); //create the canvas element
//renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setSize(width, height);

//document.body.appendChild( container );
//container.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 2, 2, 2 ); // size/radius, width, height
const material = new THREE.MeshBasicMaterial( { color: 0xEEEEEE } ); //this is the colour of the 3D material
//const cube = new THREE.Mesh( geometry, material );

const loader = new THREE.TextureLoader();
const materials = [
  new THREE.MeshBasicMaterial({map: loader.load('images/one.png')}),
  new THREE.MeshBasicMaterial({map: loader.load('images/two.png')}),
  new THREE.MeshBasicMaterial({map: loader.load('images/three.png')}),
  new THREE.MeshBasicMaterial({map: loader.load('images/four.png')}),
  new THREE.MeshBasicMaterial({map: loader.load('images/five.png')}),
  new THREE.MeshBasicMaterial({map: loader.load('images/six.png')}),
];
//const texture = loader.load('images/quick.jpg');

const cube = new THREE.Mesh(geometry, materials);
scene.add(cube);
 
/*const geometry1 = new THREE.SphereGeometry( 15, 32, 16 );
const material1 = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sphere = new THREE.Mesh( geometry1, material1 );
scene.add( sphere );
*/
camera.position.z = 8;

function animate() { 
	requestAnimationFrame(animate); // this creates a loop that draws the cube every time the screen refreshes, it pauses when the user navigates to a different tab.
    cube.rotation.x += 0.05; //this rotates it at the speed I give it. 0.01 is very slow. 
    cube.rotation.y += 0.05;

	renderer.render( scene, camera ); //if this is not called, nothing will show.
}
animate();


function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

//console.log(getRandomNumber(1, 7))


//animate after the user has clicked 
//add event listener on the cube to listen for a click and spin

/*
var rotateCube = document.querySelector('.celtra-cube');
unit.deg -= 90;
rotateCube.style.transition = '2s';
rotateCube.style.transform = `translateZ(${-750}px) rotateY(${unit.deg}deg)`;

// Call 'c' when the action is considered "completed".
c();

function spin() {
  for (var i = 0; i < getRandomNumber(1, 7); i++) {
    unit.deg += 90;
    //rotateCube.style.transition = '2s';
    //rotateCube.style.transform = `translateZ(${-750}px) rotateY(${unit.deg}deg)`;
  }
  setTimeout(function(){
    greeceInfo.style.setProperty('transition', '2s');
    greeceInfo.style.opacity = '1';
    brusselsInfo.style.setProperty('transition', '2s');
    brusselsInfo.style.opacity = '1';
    italyInfo.style.setProperty('transition', '2s');
    italyInfo.style.opacity = '1';
    spainInfo.style.setProperty('transition', '2s');
    spainInfo.style.opacity = '1';
  }, 2000);
}

spin()
*/
