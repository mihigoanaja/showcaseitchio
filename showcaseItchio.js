var gamesContainer = document.getElementById('games-container');
var gamesData = {
  "games": [
    {
      "type": "default",
      "created_at": "2024-01-18 13:05:27",
      "p_windows": false,
      "p_osx": false,
      "p_linux": false,
      "title": "[Android] Clomis",
      "in_press_system": false,
      "user": {
        "id": 3478053,
        "cover_url": "https://img.itch.zone/aW1nLzY2MDc1MTcucG5n/100x100%23/hpqfmW.png",
        "username": "GJshop",
        "url": "https://gjshop.itch.io"
      },
      "p_android": true,
      "downloads_count": 4,
      "cover_url": "https://img.itch.zone/aW1nLzE0NzA1MzQ5LnBuZw==/315x250%23c/czrol6.png",
      "url": "https://gjshop.itch.io/clomis",
      "classification": "game",
      "published": true,
      "purchases_count": 0,
      "has_demo": false,
      "id": 2476778,
      "views_count": 4,
      "min_price": 0,
      "can_be_bought": false
    },
    {
      "type": "default",
      "created_at": "2021-11-23 02:33:06",
      "p_windows": false,
      "p_osx": false,
      "published": true,
      "title": "Abstract Image Generator 1.0.0",
      "in_press_system": false,
      "user": {
        "id": 3478053,
        "cover_url": "https://img.itch.zone/aW1nLzY2MDc1MTcucG5n/100x100%23/hpqfmW.png",
        "username": "GJshop",
        "url": "https://gjshop.itch.io"
      },
      "p_android": false,
      "downloads_count": 0,
      "p_linux": false,
      "cover_url": "https://img.itch.zone/aW1nLzc1MDAxOTIucG5n/315x250%23c/YZ9Zl1.png",
      "url": "https://gjshop.itch.io/abstract-image-generator-100",
      "has_demo": false,
      "classification": "other",
      "views_count": 1,
      "purchases_count": 0,
      "min_price": 500,
      "id": 1289087,
      "short_text": "A simple software for generating abstract background images randomly",
      "can_be_bought": false,
      "published_at": "2021-11-23 23:00:17"
    }
  ]
};
async function directFetch(url) {
    var a=await fetch(url);
    b=await a.text();
    return b;
}

directFetch("https://atinas.alreflections.com/sitemap/blogload.php?u=https://itch.io/api/1/atij2d75QwTDXTu6bGSDASiHyPbjswJkCROiSWcH/my-games&user=api").then(gamesData=>JSON.parse(gamesData).games.forEach(game => {
  var gameHTML = `
    <div class='game'>
      <img alt='${game.title}' src='${game.cover_url}'/>
      <h2>${game.title}</h2>
      <!--<p>Classification: ${game.classification}</p>
      <p>Downloads: ${game.downloads_count}</p>
      <p>Views: ${game.views_count}</p>-->
      <p>${game.short_text==undefined?'':game.short_text}</p>
      <p>Price: ${game.min_price === 0 ? 'Free' : `$${game.min_price/100}`}</p>
      <a class='button' href='${game.url}'>Visit Product Page</a>
    </div>
  `;
  Array.from(document.getElementsByClassName("games-container")).forEach(gamesContainer=>{
  		if (game.published_at!==undefined)
  		if (gamesContainer.dataset.searchType === "exact") {
    		const searchRegex = new RegExp(`^[\\s\\S]*?\\s+${gamesContainer.dataset.search}\\s+[\\s\\S]*?$`);
  			console.log(searchRegex);
    		if (searchRegex.test(" "+game.title.toLowerCase()+" ")) {
   			   gamesContainer.innerHTML += gameHTML;
    		}
  		} else {
  			if ((game.published_at!==undefined)&&((game.title.toLowerCase().includes(gamesContainer.dataset.search))))
	  			gamesContainer.innerHTML += gameHTML;
  		}
  		/*if (((game.published_at!==undefined)&&(gamesContainer.dataset.searchType=="exact"))&&((game.title.toLowerCase().split(" ").includes(gamesContainer.dataset.search)))) {
  			gamesContainer.innerHTML += gameHTML;
  		} else {
  			if ((game.published_at!==undefined)&&((game.title.toLowerCase().includes(gamesContainer.dataset.search))))
		  		gamesContainer.innerHTML += gameHTML;
  		}*/
  });
}));