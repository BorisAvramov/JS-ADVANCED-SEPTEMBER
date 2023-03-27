function userPass(){
    let userName = document.getElementById('user').value
    let pass = document.getElementById('pass').value
    let result = document.getElementById('result');
    if(userName =='Pesho' && pass == '1234'){
        result.value = 'Correct';
    }
    else{
        result.value = 'Fail';
    }
}