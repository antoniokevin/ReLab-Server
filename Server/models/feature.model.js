
module.exports = class Feature{
    constructor(id, geometry, media, somma) {
        this.type = "Feature";
        this.properties = new Properties(id, media, somma); 
        this.geometry = geometry; 
        // abbiamo aggiunto la proprietà  media e somma
    }
}



class Properties
{
    constructor(id)
    {
        this.id = id;
        this.media = media;
        this.somma = somma;
    }
}