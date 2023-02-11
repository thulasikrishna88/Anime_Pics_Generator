btnEl=document.getElementById("btn");
animeContainerEl=document.querySelector(".anime-container");
animeImgEl=document.querySelector(".anime-img");
animeNameEl=document.querySelector(".anime-name");


btnEl.addEventListener("click", async function(){
    try {
        btnEl.innerText="Loading....";
        animeNameEl.innerText="uploading....";
        btnEl.disabled=true;
        animeImgEl.src="spinner.svg";
        const response= await fetch("https://api.catboys.com/img");
        const data = await response.json();
        animeContainerEl.style.display="block";
        animeImgEl.src=data.url;
        animeNameEl.innerText=data.artist; 
        btnEl.innerText="Get anime";
        animeNameEl.innerText=data.artist;
        btnEl.disabled=false;
    } catch (error) {
        animeNameEl.innerText="Error"; 
        btnEl.innerText="Get anime";
        animeNameEl.innerText="Anime name"
        btnEl.disabled=false;
        
    }
    
})
