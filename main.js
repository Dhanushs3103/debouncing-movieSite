let apiKey = `385b818b`;
let rootElement = document.getElementById("root");
async function getData () {
   let movieName = document.getElementById("input-param").value;
   if (!movieName.trim()) {
      console.log("Input is empty. Not making API call.");
      return;
   }
   try {
    let res = await fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`);
    let data = await res.json();
    displayMovie(data);
   } catch (error) {
     console.log(error);
   }
}

let timerId;
function debounce (callBackFunc,delay) {
   if(timerId) {
    clearTimeout(timerId);
   }

   timerId = setTimeout(function (){
    callBackFunc();
   },delay)
}


function displayMovie (movieList) {
  if (!movieList || movieList.length ===0) {
    rootElement.textContent = "No data found";
  }
  else{
      // moviecard creation
      let movieCard = document.createElement("div");
      movieCard.className = "movie-card";
      // movie img creation
      let movieImg = document.createElement("img");
      movieImg.src = movieList.Poster;
      // movie title creation
      let movieTitle = document.createElement("h3");
      movieTitle.textContent = movieList.Title;
      // movie actors
      let movieActors = document.createElement("p");
      movieActors.textContent = movieList.Actors;
      // movie genre
      let movieGenre = document.createElement("p");
      movieGenre.textContent = movieList.Genre;
      // movie director
      let movieDirector = document.createElement("p");
      movieDirector.textContent = movieList.Director;

      // appending to all items to movie card
      movieCard.append(movieImg,movieTitle,movieActors,movieGenre,movieDirector);
      // apending to root
      rootElement.append(movieCard);
    
  }
}