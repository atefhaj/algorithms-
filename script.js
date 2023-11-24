document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get input values
  var username = document.getElementById('username').value.trim();
  var email = document.getElementById('email').value.trim();
  var password = document.getElementById('password').value.trim();
  
  // Simple email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('البريد الإلكتروني غير صالح');
    return;
  }
  
  // Simple password length check
  if (password.length < 6) {
    alert('يجب أن تكون كلمة المرور على الأقل 6 أحرف');
    return;
  }

  // إضافة المزيد من الكود هنا للتعامل مع بيانات الاشتراك بشكل أوسع
  // يمكن استخدام طرق أكثر أماناً لتخزين كلمات المرور والتحقق من البريد الإلكتروني
  
  // إرسال البيانات للسيرفر أو معالجتها بشكل أخر

  // إعادة توجيه المستخدم إلى صفحة تسجيل الدخول أو أي صفحة أخرى بناءً على الحاجة
});
