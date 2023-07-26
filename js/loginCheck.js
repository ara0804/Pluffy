const loggedOutLinks = document.querySelector (".logged-out");
const loggedInLinks = document.querySelector (".logged-in");

export const loginCheck = (user) => {
    if (user) {
        loggedInLinks.forEach((link) => (link.style.display = "block"));
        loggedOutLink.forEach((link) => (link.style.display = "none"));
    } else {
        loggedInLinks.forEach((link) => (link.style.display = "none"));
        loggedOutLink.forEach((link) => (link.style.display = "block"));
    }
}