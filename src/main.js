/* Simple example to create a scene & render 3D graphics in browser */

// Import modules
import * as THREE from 'three';

// Three things required to display anything w/ three.js: scene, camera & renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, // field of view (FOV)
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // near clipping plane
  1000 // far clipping plane
);
const renderer = new THREE.WebGLRenderer();

// Set width & height to render the scene
renderer.setSize(window.innerWidth, window.innerHeight);

// Add the renderer to DOM (using <canvas>)
document.body.appendChild(renderer.domElement);

// Add a cube to scene
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube); // added at coordinate (0, 0, 0)

// Add a line to scene
const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
const points = [
  new THREE.Vector3(-10, 0, 0),
  new THREE.Vector3(0, 10, 0),
  new THREE.Vector3(10, 0, 0),
];
const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(lineGeometry, lineMaterial);
scene.add(line);

// Set camera position & view angle
camera.position.set(0, -7, 7);
camera.lookAt(0, 0, 0);

// Render the scene
function animate() {
  requestAnimationFrame(animate);

  // animate the cube
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
