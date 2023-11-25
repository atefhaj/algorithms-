const scene = new THREE.Scene();

// إنشاء الكاميرا
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// إنشاء المشهد (مكعب)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// إنشاء المُظهر (renderer)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// تحديث موضع المكعب بواسطة اللمس
let isDragging = false;
let previousTouchX = 0;

// تفاعل مع بداية اللمس
renderer.domElement.addEventListener('touchstart', function (event) {
  isDragging = true;
  previousTouchX = event.touches[0].clientX;
}, false);

// تفاعل مع حركة اللمس
renderer.domElement.addEventListener('touchmove', function (event) {
  if (isDragging) {
    const touchX = event.touches[0].clientX;
    const deltaX = touchX - previousTouchX;
    cube.rotation.y += deltaX * 0.01; // تحريك المكعب باللمس
    previousTouchX = touchX;
  }
}, false);

// تفاعل مع نهاية اللمس
renderer.domElement.addEventListener('touchend', function (event) {
  isDragging = false;
}, false);

// دورة التحديث للرسم
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
