const h1 = document.querySelector('h1');
const div = document.querySelector('div');

div.addEventListener('mousemove', function(e){
    // console.log(e.clientX, e.clientY)
h1.textContent = e.clientX + ', ' + e.clientY;

    // document.body.style.backgroundColor = `rgb(${e.clientX/2}, ${e.clientY/2}, ${e.clientX/e.clientY*50})`

    div.style.backgroundColor = `rgb(${e.clientX/2}, ${e.clientY/2}, ${e.clientX/e.clientY*50})`
    
})
document.body.addEventListener('mousemove', function(e){
    document.body.style.backgroundColor = `rgb(${e.clientX/3}, ${e.clientY/4}, ${e.clientX/e.clientY*20})`})