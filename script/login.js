// console.log('login function');

document.getElementById('login-btn').addEventListener('click', function () {
    // get the mobile number
    const numberInput = document.getElementById('input-number');
    const contactNumber = numberInput.value;

    // get the pin
    const inputPin = document.getElementById('input-pin');
    const pinNumber = inputPin.value;

    // match pin and mobile number
    if (contactNumber === "01234567891" && pinNumber === "1234") {
        // true-> alert---->homepage
        alert("LogIn Successful");
        window.location.assign("/home.html");
    }
    else {
        // false-> alert------> return
        alert("Login failed");
        return;
    }
});

