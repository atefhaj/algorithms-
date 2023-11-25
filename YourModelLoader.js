
const scene = new THREE.Scene();

// إنشاء الكاميرا
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// إنشاء المشهد (يمكن استبدال "your_model.obj" بمسار الملف الخاص بك)
const loader = new THREE.OBJLoader();
loader.load(
  'cottage_obj.obj',
  function (object) {
    scene.add(object);
  }
);

// إنشاء المُظهر (renderer)
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// دورة التحديث للرسم
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
