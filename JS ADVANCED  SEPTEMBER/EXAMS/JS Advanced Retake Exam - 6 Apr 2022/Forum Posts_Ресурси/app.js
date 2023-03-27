window.addEventListener("load", solve);

function solve() {
  
  let titleInputEl = document.getElementById('post-title');
  let categoryInputEl = document.getElementById('post-category');
  let contentInputEl = document.getElementById('post-content');

  let reviewEl = document.getElementById('review-list');
  let publishedListEl = document.getElementById('published-list');

  let btnClearEl = document.getElementById('clear-btn');


  let btnPublishEl = document.getElementById('publish-btn').addEventListener('click', (e) =>{

    e.preventDefault();
    if(titleInputEl.value != '' && categoryInputEl != '' && contentInputEl.value != ''){

      addReview(e, reviewEl, titleInputEl.value, categoryInputEl.value, contentInputEl.value);

      clearFields();

    }








  });


  function clearFields(){

    titleInputEl.value = '';
    categoryInputEl.value = '';
    contentInputEl.value = '';

  }



  function  addReview(e, reviewEl, titleInputEl, categoryInputEl, contentInputEl){

    let liEl =  elGenerator('li');
    liEl.setAttribute('class', 'rpost');

   let articleEl = elGenerator('article');
   let h4El = elGenerator('h4',  titleInputEl, articleEl);
   let pCatEl = elGenerator('p', `Category: ${categoryInputEl}`, articleEl);
   let pContEl = elGenerator('p', `Content: ${contentInputEl}`, articleEl);
   liEl.appendChild(articleEl);

   let btnApproveEl = elGenerator('button', 'Approve',liEl );
   btnApproveEl.setAttribute('class', 'action-btn approve');

   let btnEditEl = elGenerator('button', 'Edit', liEl);
   btnEditEl.setAttribute('class', 'action-btn edit');

     reviewEl.appendChild(liEl);

     btnEditEl.addEventListener('click', (e) => edit(e, titleInputEl, categoryInputEl, contentInputEl));

     btnApproveEl.addEventListener('click', (e) => approve (e, liEl, reviewEl, publishedListEl));



 }

 function approve (e, _liEl, _reviewEl, _publishedListEl){
// debugger
  _publishedListEl.appendChild(e.target.parentNode);
  _publishedListEl.querySelector('button').remove();
  _publishedListEl.querySelector('button').remove();
  // e.target.parentNode.remove();
  btnClearEl.addEventListener('click', () => {


    _publishedListEl.innerHTML = '';


  })



 }


  function edit (e, _titleInputEl, _categoryInputEl, _contentInputEl) {
    titleInputEl.value = _titleInputEl;
    categoryInputEl.value = _categoryInputEl;
    contentInputEl.value = _contentInputEl;
    e.target.parentNode.remove();

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
