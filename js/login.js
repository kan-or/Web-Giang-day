document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('fullname').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
  
    // Kiểm tra họ tên: ít nhất 2 từ, mỗi từ ≥ 2 ký tự
    const parts = name.split(" ").filter(p => p.length >= 2);
    if (parts.length < 2) {
      alert("Họ và tên phải gồm ít nhất 2 từ, mỗi từ từ 2 ký tự trở lên.");
      return;
    }
  
    // Kiểm tra tên đăng nhập: 4–16 ký tự, chỉ chữ và số
    const usernameRegex = /^[a-zA-Z0-9]{4,16}$/;
    if (!usernameRegex.test(username)) {
      alert("Tên đăng nhập chỉ được chứa chữ cái và số, từ 4–16 ký tự.");
      return;
    }
  
    // Kiểm tra mật khẩu: ít nhất 6 ký tự, có cả chữ và số
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    if (password.length < 6 || !hasLetter || !hasNumber) {
      alert("Mật khẩu phải từ 6 ký tự trở lên và chứa cả chữ và số.");
      return;
    }
  
    // Xác nhận lại mật khẩu
    const confirmPass = prompt("Xác nhận lại mật khẩu:");
    if (confirmPass !== password) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }
  
    const confirmInfo = confirm(`Xác nhận đăng ký:\nHọ tên: ${name}\nTên đăng nhập: ${username}`);
    if (confirmInfo) {
      alert("🎉 Đăng ký thành công!");
      document.getElementById('registerForm').reset();
    } else {
      alert("Đăng ký bị hủy.");
    }
  });
  