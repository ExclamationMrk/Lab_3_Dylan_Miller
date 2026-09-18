function password_manager(entry, re_entry) {
    if (entry.length < 8) {
        document.getElementById("password_text_check").innerHTML = "password too short"
    }

    else if (entry == re_entry) {
        document.getElementById("password_text_check").innerHTML = "passwords successfully match"
    } 
    
    else {
        document.getElementById("password_text_check").innerHTML = "passwords do not match"
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const first_attempt = document.getElementById("password_first_attempt")

    const re_entry = document.getElementById("password_second_attempt")

    const password_try_button = document.getElementById("password_try_button")

    password_try_button.addEventListener("click", function () {
        password_manager(first_attempt.value, re_entry.value)
    })
})