// this is for the anime.js manipulations the 
//goal is to have the articles assemble onto the 
//page with an animation 

// using anime.js elasticity for the articles
anime({
    // target div will be whatever the articles are
    //populated into from the scrape
    targets: 'div',
    translateX: 100,
    easing: 'easeOutElastic',
    elasticity: 600 // Default 500, range [0-1000]
  });