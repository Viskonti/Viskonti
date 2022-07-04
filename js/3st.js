function toggleDone (event) {
    if(event.target.className === 'logo')
{
    console.log("Looper")
}
    else{
        console.log("Footer");
    }
  } 
  const characterList = document.querySelector('footer')
  characterList.addEventListener('click', toggleDone)