// =========Toogle icon navbar===========

let menuIcon=document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};




let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll= () => {
    sections.forEach(sec =>{
        let top =window.scrollY;
        let offset =sec.offsetTop -150;
        let height =sec.offsetHeight;
        let id =sec.getAttribute('id');

        if (top>=offset && top< offset+height){
            navlinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='  +id +']').classList.add('active')
            });
        };
    });




let header =document.querySelector('header');

header.classList.toggle('sticky',window.scrollY>100);




menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


};



ScrollReveal({
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
 });

 ScrollReveal().reveal('.home-content,.heading', { origin:'top'});





//  =========Send Formm Data========

const scriptURL = 'https://script.google.com/macros/s/AKfycbz6X1_jkZKDeZ2v8QrsPp46n0nS9WT2p-yu-nTTD50T4qVLs0R1071-JeA9PItKNQ6fTQ/exec';
const form = document.forms['submit'];
const msg = document.getElementById("submitButton");


// Get the current timestamp
const timestamp = new Date();

// Extract date and time components
const submitDate = timestamp.toISOString().slice(0, 10);
const submitTime = timestamp.toTimeString().slice(0, 8);

// Set the values of the hidden input fields
document.getElementById("submitDate").value = submitDate;
document.getElementById("submitTime").value = submitTime;




form.addEventListener('submit', e => {
    e.preventDefault();
    const emailField = document.getElementById('email');
    const emailValue = emailField.value.trim();
    if (emailValue === '') {
      alert('Pls Fill the Form Correctly');
      return;
    }

    msg.value='Message Send Succesfully'

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // Handle the response here if needed.
            setTimeout(function() {
                msg.value = "Submit"; // Change the submit button text to 'loading' after a 5-second delay.
            }, 5000);
            form.reset(); // Reset the form immediately.
        })
        .catch(error => {
            console.error('Error!', error.message);
            msg.value = 'Submit'; // Reset the submit button text if there's an error during submission.
        });
});




// ==========Change Profession===========

const spanElement = document.getElementById('pro');
const dataValues = ['Python Developer', 'Data Analyst']; // Replace with your desired data values
let currentIndex = 0;

function updateSpanContent() {
    spanElement.textContent = dataValues[currentIndex];
    currentIndex = (currentIndex + 1) % dataValues.length;
}

setInterval(updateSpanContent, 2000);




// ==============to access skil-tab data================
const tabs = document.querySelectorAll('.tab');

// Get all tab contents
const tabContents = document.querySelectorAll('.tab-content');

// Function to handle tab switching
function openTab(tabName) {
// Remove the .active class from all tabs and tab contents
tabs.forEach(tab => tab.classList.remove('active'));
tabContents.forEach(content => content.classList.remove('active'));

// Find the clicked tab and corresponding content by ID
const clickedTab = document.querySelector(`[onclick="openTab('${tabName}')"]`);
const clickedTabContent = document.getElementById(tabName);

// Add the .active class to the clicked tab and content
if (clickedTab && clickedTabContent) {
    clickedTab.classList.add('active');
    clickedTabContent.classList.add('active');
}
}

// Attach the click event listeners to the tabs
tabs.forEach(tab => tab.addEventListener('click', function() {
const tabName = this.getAttribute('onclick').match(/'.*'/)[0].replace(/'/g, '');
openTab(tabName);
}));



// ================open tabs=================

function toggleTabContainer() {
    const tabContainer = document.getElementById('tab-con');
    const toggleButton = document.getElementById('toggleButton');
    
    if (tabContainer.style.display === 'none') {
      tabContainer.style.display = 'block';
      toggleButton.textContent = 'Close';
    } else {
      tabContainer.style.display = 'none';
      toggleButton.textContent = 'Know More';
    }
  }