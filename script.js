const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const materials = [
    new THREE.MeshBasicMaterial({ color: 0xff0000 }), // Right
    new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // Left
    new THREE.MeshBasicMaterial({ color: 0x0000ff }), // Top
    new THREE.MeshBasicMaterial({ color: 0xffff00 }), // Bottom
    new THREE.MeshBasicMaterial({ color: 0xff00ff }), // Front
    new THREE.MeshBasicMaterial({ color: 0x00ffff })  // Back
];
const cube = new THREE.Mesh(geometry, materials);

scene.add(cube);

camera.position.z = 3;

const animate = () => {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
};

animate();

// Handle cube rotations using buttons
document.getElementById('rotate-left').addEventListener('click', () => {
    cube.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), Math.PI / 2);
});

document.getElementById('rotate-right').addEventListener('click', () => {
    cube.rotateOnWorldAxis(new THREE.Vector3(0, 1, 0), -Math.PI / 2);
});

document.getElementById('rotate-up').addEventListener('click', () => {
    cube.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), Math.PI / 2);
});

document.getElementById('rotate-down').addEventListener('click', () => {
    cube.rotateOnWorldAxis(new THREE.Vector3(1, 0, 0), -Math.PI / 2);
});

document.getElementById('rotate-clockwise').addEventListener('click', () => {
    cube.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), Math.PI / 2);
});

document.getElementById('rotate-counterclockwise').addEventListener('click', () => {
    cube.rotateOnWorldAxis(new THREE.Vector3(0, 0, 1), -Math.PI / 2);
});
