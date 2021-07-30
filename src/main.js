/* Simple example to create a scene & render 3D graphics in browser */

// Import modules
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Three things required to display anything w/ three.js: scene, camera & renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // field of view (FOV)
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near clipping plane
  1000 // far clipping plane
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#test-canvas'),
});

// Set width & height to render the scene
renderer.setSize(window.innerWidth, window.innerHeight, false);

// Add a cube to scene
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
const cubeMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00,
  roughness: 0,
  metalness: 0.9,
});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube); // added at coordinate (0, 0, 0)

// Add a line to scene
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [
  new THREE.Vector3(-10, 0, 0),
  new THREE.Vector3(0, 0, -10),
  new THREE.Vector3(10, 0, 0),
];
const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line);

// Add lights to scene
const pointLight = new THREE.PointLight(0xffffff, 10, 1000);
pointLight.position.set(2, 10, 5);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Add helpers to see light position & space grid
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(lightHelper, gridHelper);

// Set camera position & view angle
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);

// Add camera controls (triggered by mouse events)
const controls = new OrbitControls(camera, renderer.domElement);

// Render the scene
function animate() {
  requestAnimationFrame(animate);

  // animate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // update camera controls
  controls.update();

  renderer.render(scene, camera);
}

animate();
