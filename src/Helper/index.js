export const getImageItems = (hits, setPictures) =>{
  const pictures = [];
    hits.map(function(item){
        const picture = new Picture(item.id, item.largeImageURL, item.previewURL);
        pictures.push(picture);
    });
    setPictures(pictures);
};

function Picture(id, largeImage, smalImage, tags){
  this.id = id;
  this.largeImage = largeImage;
  this.smalImage = smalImage;
  this.tags = tags;
}