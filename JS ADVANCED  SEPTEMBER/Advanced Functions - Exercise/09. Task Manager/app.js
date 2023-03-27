function solve() {

    // let open = document.getElementsByTagName('section')[1];
    // let inProgress = document.getElementsByTagName('section')[2];
    // let complete = document.getElementsByTagName('section')[3];
 
    // let task = document.getElementById('task');
    // let description = document.getElementById('description');
    // let dueDate = document.getElementById('date');
    // let btnAdd = document.getElementById('add');
 
    // function createElement(type, text, className) {
    //     let result = document.createElement(type);
 
    //     result.textContent = text;
 
    //     if (className) {
    //         result.className = className;
    //     }
    //     return result;
    // } 
 
    // btnAdd.addEventListener('click', e => {
    //     e.preventDefault();
 
    //     if (task.value == '' || description.value == '' || dueDate.value == '') {
    //         return;
    //     };
 
    //     let article = createElement('article');
    //     let h3 = createElement('h3', task.value);
    //     let pDescription = createElement('p','Description: '+ description.value);
    //     let pDueDate = createElement('p','Due Date: '+ dueDate.value);
    //     let flexClass = createElement('div', undefined, 'flex');
    //     let greenButton = createElement('button', 'Start', 'green')
    //     let redButton = createElement('button', 'Delete', 'red');
 
    //     flexClass.appendChild(greenButton);
    //     flexClass.appendChild(redButton);
 
    //     article.appendChild(h3);
    //     article.appendChild(pDescription);
    //     article.appendChild(pDueDate);
    //     article.appendChild(flexClass);
 
    //     open.children[1].appendChild(article);
 
    //     task.value = '';
    //     description.value = '';
    //     dueDate.value = '';
 
    //     redButton.addEventListener('click', e => {
    //         article.remove();
    //     });
 
 
    //     greenButton.addEventListener('click', e => {
    //         inProgress.children[1].appendChild(article);
 
    //         let finishButton = createElement('button', 'Finish', 'orange');
    //         flexClass.removeChild(greenButton);
    //         flexClass.appendChild(finishButton);
 
    //         finishButton.addEventListener('click', e => {
    //             flexClass.removeChild(finishButton);
    //             flexClass.removeChild(redButton);
 
    //             complete.children[1].appendChild(article);
    //         })
    //     })
    // })








    let open = document.getElementsByTagName('section')[1];
    let inProgress = document.getElementsByTagName('section')[2];
    let complete = document.getElementsByTagName('section')[3];


    let taskInputEl = document.getElementById('task');
    let descriptionInputEl = document.getElementById('description');
    let dateInputEl = document.getElementById('date');
    let addButtonEl = document.getElementById('add');

    function createElement (type, content, className){
        let element =  document.createElement(type);
        element.innerText = content;
        if(className){
            element.className = className;
        }

        return element;
    }




    // function when Click the Add Button;

    function addOpenSectionHandler(e){

        e.preventDefault();

   

        if (!taskInputEl.value || !descriptionInputEl.value || !dateInputEl.value) {
            return;
        }

 

        let articleEl = document.createElement('article');

        // create and add h3

        articleEl.appendChild(createElement('h3', taskInputEl.value,));

        // let h3El = document.createElement('h3');
        // h3El.innerText = taskInputEl.value;
        // articleEl.appendChild(h3El);

        // create and add p1

        articleEl.appendChild(createElement('p',`Description: ${descriptionInputEl.value}`));

        // let p1El = document.createElement('p');
        // p1El.innerText = `Description: ${descriptionInputEl.value}`
        // articleEl.appendChild(p1El);

        // create and add p2

        articleEl.appendChild(createElement('p',`Due Date: ${dateInputEl.value}` ));
        // let p2El = document.createElement('p');
        // p2El.innerText = `Due Date: ${dateInputEl.value}`
        // articleEl.appendChild(p2El);

        // create div and add div to article r

        let divEl = createElement('div', '', 'flex');

        let btnStartEl = divEl.appendChild(createElement('button', 'Start', 'green'));
         let btnDeleteEl = divEl.appendChild(createElement('button', 'Delete', 'red'));


        articleEl.appendChild(divEl);




        // let divEl = document.createElement('div');
        // set attrivute to Div

        // divEl.setAttribute('class','flex');

        // create to div Button Start and append to div
        // let btnStartEl = document.createElement('button');
        // btnStartEl.setAttribute('class', 'green');
        // btnStartEl.innerText = 'Start';
        // divEl.appendChild(btnStartEl);
        // // create to div Button Delete and append to div

        // let btnDeleteEl = document.createElement('button');
        // btnDeleteEl.setAttribute('class', 'red');
        // btnDeleteEl.innerText = 'Delete';
        // divEl.appendChild(btnDeleteEl);

        // // append div to article
        // articleEl.appendChild(divEl);

        open.children[1].appendChild(articleEl); ///////////////////////////// !!!!!!!!!!!!!!!!

        // addEvenListener t o btnDelete => remove Article
        btnDeleteEl.addEventListener('click', () => {

            articleEl.remove();

        });


        function StartHandler () {
            inProgress.children[1].appendChild(articleEl);

            let btnFinishEl = document.createElement('button');
            btnFinishEl.innerText = 'Finish';
            btnFinishEl.setAttribute('class', 'orange');

            divEl.removeChild(btnStartEl);

           
            divEl.appendChild(btnFinishEl);


            btnFinishEl.addEventListener ('click', () => {

                complete.children[1].appendChild(articleEl);
                divEl.remove();


            })

        }


        btnStartEl.addEventListener('click', StartHandler)



        }




        addButtonEl.addEventListener('click', addOpenSectionHandler);




      






}