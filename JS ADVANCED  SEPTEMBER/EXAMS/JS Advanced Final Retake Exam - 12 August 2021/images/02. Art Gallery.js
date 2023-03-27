class ArtGallery {

    constructor (creator) {
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];  

    }

    addArticle( articleModel, articleName, quantity ) {

          articleModel = articleModel.toLowerCase();

            if(!this.possibleArticles[articleModel]){

                throw new Error ("This article model is not included in this gallery!");


            }
           let articleFound = this.listOfArticles.find (a => a.articleModel == articleModel);

            if(articleFound == null){

                this.listOfArticles.push({articleModel, articleName, quantity});


            }
            else if (articleFound.articleName == articleName){

                articleFound.quantity += quantity;


            }
            return  `Successfully added article ${articleName} with a new quantity- ${quantity}.`;


            // if(!this.listOfArticles[articleModel]){
            //     this.listOfArticles[articleModel] = [];

            // }

            // if (!this.listOfArticles[articleModel].some(a => a.articleName == articleName)){

            //     this.listOfArticles[articleModel].push({articleName, quantity});
            // }
            // else{

            //     let articleFound = this.listOfArticles[articleModel].find(a => a.articleName == articleName);
            //     articleFound.quantity += quantity;
             

            // }


    }

    inviteGuest ( guestName, personality){

        if (this.guests.some (g => g.guestName == guestName)) {

            throw new Error(`${guestName} has already been invited.`);
        }

        let points = 0;
        switch (personality) {
            case 'Vip':
                points = 500;
                
                break;
            case 'Middle':
               points = 250;
                break;
            default:
               points = 50;
                break;
        }

        this.guests.push({guestName, points, purchaseArticle: 0});

        return `You have successfully invited ${guestName}!`;

    }
    buyArticle ( articleModel, articleName, guestName){

        let foundArticle = this.listOfArticles.find (a => a.articleModel == articleModel);

        if (foundArticle == null || foundArticle.articleName !== articleName) {

            throw new Error (`This article is not found.`);

        }

        if (foundArticle.quantity == 0) {

                return `The ${articleName} is not available.`;
        }

        if (!this.guests.some(g => g.guestName == guestName)){
            return  `This guest is not invited.`;
        }

        let geustFound = this.guests.find(g => g.guestName == guestName);
        if (geustFound.points < this.possibleArticles[articleModel]){
            return `You need to more points to purchase the article.`;
        }
        else {

            geustFound.purchaseArticle ++;
            geustFound.points -= this.possibleArticles[articleModel];
            foundArticle.quantity--;
            return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;



        }


    }

    showGalleryInfo (criteria){

        let result = '';
        if (criteria == 'article') {
            result += 'Articles information:\n';

            this.listOfArticles.forEach(a => result+= `${a.articleModel} - ${a.articleName} - ${a.quantity}\n`)


        }
        else if (criteria == 'guest') {

            result += 'Guests information:\n';
            this.guests.forEach(g => result += `${g.guestName} - ${g.purchaseArticle}\n`);

        }



        return result.trim();


    }




}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));


