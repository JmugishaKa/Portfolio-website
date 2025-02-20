
    var tablinks = document.getElementsByClassName("tab-links"); // These represent the clickable tabs.
    var tabcontents = document.getElementsByClassName("tab-contents");//These represent the content that appears.

    function opentab(tabname){
    for (tablink of tablinks){
    tablink.classList.remove("active-link");
    //The classList property provides access to the list of classes on an element.
    //The remove method removes a specified class from that list.
}

    for (tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
    //event.currentTarget refers to the element that the event handler is attached to (the clicked tab).
    //The add method adds the specified class to that element.

}
    //Deactivates all tabs by removing the "active-link" class.
    //Hides all content sections by removing the "active-tab" class.
    //Highlights the clicked tab by adding the "active-link" class.
    //Shows the corresponding content section by adding the "active-tab" class to the element with the ID provided in tabname.



</script>

<script>

    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
    sidemenu.style.right = "0";
}

    function closemenu(){
    sidemenu.style.right = "-200px";
}
</script>

<script>
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
