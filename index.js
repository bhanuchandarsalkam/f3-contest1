function searchmovies(){
    const apikey=document.getElementById("apikey").value;
    const movie=document.getElementById("movietittle").value;
    console.log(apikey,movie);
    if(!apikey||!movie){
        showerror("these fields are required!");
        return;
    }
    const url=`https://www.omdbapi.com/?s=${movie}&apikey=${apikey}`
    document.getElementById("loader").style.display="block";
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data);
      document.getElementById("loader").style.display="none";
    if(data.Error){
        showerror(data.Error);
    }
    else{
        datasearch(data.Search);
    }
});
}
function showerror(message){
    document.getElementById("error-message").innerText=message;
}
const btn=document.getElementById("search-btn");
btn.addEventListener("click",searchmovies);
function datasearch(movies){
const resultdiv=document.getElementById("result");
resultdiv.innerHTML="";
movies.forEach((movie,index)=>{
const card=document.createElement("div");
card.className="card";
card.innerHTML=`
<img id="cardimg" src="${movie.Poster}" alt=${movie.title}>
<div class="row-1">
<h1>${index+1}</h1>
<h2>${movie.Title}</h2>
</div>
<div class="row-2">
<p>${movie.Year}</p>
<p>${movie.imdbID}</p>
</div>`
resultdiv.appendChild(card);
});
}