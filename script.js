document.addEventListener ('DOMContentLoaded', function () {
    const darkModeButton = document.getElementById ('darkModeToggle');
    const body = document.body;

    darkModeButton.addEventListener ('click', function () {
        body.classList.toggle('dark-mode');
    });
// smoth scrolling for anchor links
document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault ();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
         });
      });
   });
});
const express = require ('express');
const app= express ();
const port = 3000;

app.arguments(express.static('portpolio'));

app.get('/', (req, res)=> {
    res.send('hello, this is sopian Node.js server!');
});

app.listen(port, ()=> {
    console.log('server is listening at http://localhost:${port}');

});