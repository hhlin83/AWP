/* Simple example to create a scene & render a 3D cube in browser */

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
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube); // added at coordinate (0, 0, 0)
camera.position.z = 5; // move camera further from cube

// Ask browser to render the scene every frame
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
// animate();

// Animate the cube
function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();
