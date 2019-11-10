export const getPictures = (searchedText = "girl") => fetch(`https://pixabay.com/api/?key=13231641-640eaf52b957f4537efe1e1a4&q=${searchedText}&image_type=photo&pretty=true`)
  .then(response => response.json());
