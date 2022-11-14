const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '60290b4fe7msh6cae0f53a0e4ee8p1116fdjsne78890d239fb',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
	}
};

fetch('https://imdb8.p.rapidapi.com/auto-complete?q=spy', options)
.then(response => response.json())
.then((data) => {
  console.log(data);
  const list = data.d;

  list.map((item) => {
    console.log(item)
    let title = item.l;
    let card = item.i.imageUrl;
    let year = item.y;
    const movie = `<li><img src="${card}"> <h2>${title}</h2><h2> ${year}</h2></li>`
   document.querySelector('.Love').innerHTML += movie
  }
  )
}
)
.catch(err => console.error(err));

