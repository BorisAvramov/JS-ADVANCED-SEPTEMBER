window.addEventListener('load', solve);

function solve() {
    
    let genreEl = document.getElementById('genre');
    let nameEl = document.getElementById('name');
    let authorEl = document.getElementById('author');
    let dateEl = document.getElementById('date');

    let btnAdd = document.getElementById('add-btn');

    let allHitsCotainerEl = document.getElementsByClassName('all-hits-container')[0];

    let totalLikesParagraphEl = document.getElementById('total-likes').querySelector('div p');

    let totalLikesSum = 0;

    let savedContainerEl = document.getElementsByClassName('saved-container')[0];


    btnAdd.addEventListener('click', (e) => {


        e.preventDefault();


        if(genreEl.value != '' && nameEl.value != '' && authorEl.value != '' && dateEl.value != ''){

            addSong(genreEl, nameEl, authorEl, dateEl, allHitsCotainerEl);

            clearInputsData (genreEl, nameEl, authorEl, dateEl);

        }



    });

    function  addSong(genreEl, nameEl, authorEl, dateEl, allHitsCotainerEl){

        let divEl = elGenerator('div');
        divEl.setAttribute('class', 'hits-info');

        let imgEl = elGenerator('img');
        imgEl.src = "./static/img/img.png";
        divEl.appendChild(imgEl);

        letH2GenreEl = elGenerator('h2', `Genre: ${genreEl.value}`, divEl);
        letH2NameEl = elGenerator('h2', `Name: ${nameEl.value}`, divEl);
        letH2AuthorEl = elGenerator('h2', `Author: ${authorEl.value}`, divEl);
        letH3DateEl = elGenerator('h3', `Date: ${dateEl.value}`, divEl);

        let btnSaveSongEl = elGenerator('button', 'Save song', divEl);
        btnSaveSongEl.setAttribute('class', 'save-btn');
        let btnLikeSongEl = elGenerator('button', 'Like song', divEl);
        btnLikeSongEl.setAttribute('class', 'like-btn');
        let btnDeeleteSongEl = elGenerator('button', 'Delete', divEl);
        btnDeeleteSongEl.setAttribute('class', 'delete-btn');



        allHitsCotainerEl.appendChild(divEl);

        btnLikeSongEl.addEventListener('click', (e) => {

            totalLikesSum ++;

            totalLikesParagraphEl.textContent = `Total Likes: ${totalLikesSum}`;

            btnLikeSongEl.disabled = true;





        });

        btnSaveSongEl.addEventListener('click', (e) => {
            let divElOld = e.target.parentNode;
            e.target.parentNode.remove();

            savedContainerEl.appendChild(divElOld);
            let divElNew = document.getElementsByClassName('saved-container')[0].querySelector('div');;



         for (const button of divElNew.querySelectorAll('button')) {
            button.remove();
         }

        
            let btnDelete = elGenerator('button', 'Delete', divElNew);
            btnDelete.setAttribute('class', 'delete-btn');



            btnDelete.addEventListener('click', (e) => deleteSong(e))
            

        });

        btnDeeleteSongEl.addEventListener('click', (e) => deleteSong(e))




    }

    function deleteSong(e){
        
        e.target.parentNode.remove();

    }

    function  clearInputsData (genreEl, nameEl, authorEl, dateEl){

        genreEl.value = '';
        nameEl.value = '';
        authorEl.value = '';
        dateEl.value = '';


    }

    function elGenerator (type, content, parent){

        let element = document.createElement(type);
        element.textContent = content;
        if(parent){
        
          parent.appendChild(element);
        }
        return element;
        
    }


}