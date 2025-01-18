
const key = "Hm3MZEokux7NNW37NS9vKjTYZhqIYoRjzVB2YjbEe3yV9naP2pDm6Pd8";
const url = "https://api.pexels.com/v1/search?query=night&per_page=45";
const columns = [document.getElementById("column1"), document.getElementById("column2"), document.getElementById("column3")];

document.addEventListener("DOMContentLoaded", () => {
    getImages();
});

async function getImages(){
  const response = await fetch(url,  {
    method: "GET",
    headers:{
      
      Authorization: key,
    },
  });
  if(!response.ok){
    document.getElementById("message").innerText = "Loading...";
    throw new Error("Oh no, Marcelo. Pasta not aldente");
  }
  const data = await response.json();
  displayImages(data.photos);
}

function displayImages(images) {
  images.forEach((img, index) => {  
    const pic = document.createElement("img");
    pic.setAttribute("loading", "lazy");
    pic.src = img.src.small;
    pic.alt = "image";
    pic.dataset.high = img.src.large;  
    pic.addEventListener("mouseover", () => {
      pic.src = pic.dataset.high;  
    });

    const column = columns[index % columns.length];
    column.appendChild(pic);
  });
}



