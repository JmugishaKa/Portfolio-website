
function opentab(event, tabname) {
    // Remove "active-link" from all tab links
    document.querySelectorAll(".tab-links").forEach(tab => {
        tab.classList.remove("active-link");
    });

    // Remove "active-tab" from all tab contents
    document.querySelectorAll(".tab-contents").forEach(content => {
        content.classList.remove("active-tab");
        content.style.display = "none"; // Hide all tab contents
    });

    // Add "active-link" to the clicked tab
    event.currentTarget.classList.add("active-link");

    // Show the corresponding tab content
    let activeTab = document.getElementById(tabname);
    activeTab.classList.add("active-tab");
    activeTab.style.display = "block";
}


var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxJNvlufnU5B4fOIkRYVuKbItZdvDIYjyX91dSaCNY-UcOtJnPjYSbEJmjDEUa7lJUF/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Thank you!"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})

