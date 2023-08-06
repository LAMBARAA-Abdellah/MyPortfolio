/* typing animation script */
var typed = new Typed(".typing", {
    strings: [" ","Web Developer", "Web Designer", "Freelancer", "Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
function downloadCV() {
    // Create a link element
    const link = document.createElement('a');
    link.href = 'images/cv%20Lambaraa%20Abdellah.pdf'; // Specify the link location
    link.target = '_blank'; // Open in a new tab/window
    link.download = 'your_cv.pdf'; // File name for download

    // Dispatch a click event to trigger the download
    if (document.createEvent) {
        const event = document.createEvent('MouseEvents');
        event.initEvent('click', true, true);
        link.dispatchEvent(event);
    } else {
        link.click();
    }
}
const birthdateElement = document.getElementById('birthdate');

// Parse the birthdate string and calculate age
const birthdateString = birthdateElement.textContent;
const birthdate = new Date(birthdateString);
const currentDate = new Date();
const age = currentDate.getFullYear() - birthdate.getFullYear() - (currentDate < new Date(currentDate.getFullYear(), birthdate.getMonth(), birthdate.getDate()) ? 1 : 0);

// Get the age element and update its content
const ageElement = document.getElementById('age');
ageElement.textContent = age;


