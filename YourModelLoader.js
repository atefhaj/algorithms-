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
 اللمس
let previousTouchX = 0;
let previousTouchY = 0;
let isDragging = false;

// تفاعل مع بداية اللمس
renderer.domElement.addEventListener('touchstart', function (event) {
  isDragging = true;
  previousTouchX = event.touches[0].clientX;
  previousTouchY = event.touches[0].clientY;
}, false);

// تفاعل مع حركة اللمس
renderer.domElement.addEventListener('touchmove', function (event) {
  if (isDragging) {
    const touchX = event.touches[0].clientX;
    const touchY = event.touches[0].clientY;

    const deltaX = touchX - previousTouchX;
    const deltaY = touchY - previousTouchY;

    cube.rotation.y += deltaX * 0.01; // تحريك المكعب يمينًا ويسارًا
    cube.rotation.x += deltaY * 0.01; // تحريك المكعب أعلى وأسفل

    previousTouchX = touchX;
    previousTouchY = touchY;
  }
}, false);

// تفاعل مع نهاية اللمس
renderer.domElement.addEventListener('touchend', function (event) {
  isDragging = false;
}, false);
