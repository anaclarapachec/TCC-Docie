let wrapper = document.querySelector(".wrapper");

let signup = () => {
    wrapper.classList.add("animated-signin");
    wrapper.classList.remove("animated-signup");
}

let signin = () => {
    wrapper.classList.add("animated-signup");
    wrapper.classList.remove("animated-signin");
}