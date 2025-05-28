function registerUser(fullname, username, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (users.some(user => user.username === username)) {
        alert("Tên đăng nhập đã tồn tại. Vui lòng chọn tên khác.");
        return;
    }

    users.push({ fullname, username, password });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công! Chuyển đến trang đăng nhập...");
    window.location.href = "login.html";
}

function loginUser(username, password) {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = "index.html";
    } else {
        alert("Sai tên đăng nhập hoặc mật khẩu.");
    }
}
