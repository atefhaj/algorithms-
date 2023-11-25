// ...

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
