function inputPassworAndUser(){
    let a = 5;
    let user = document.getElementById('user');
    let password = document.getElementById('pass').value;

    let result = document.getElementById('result')
    if(user == 'Pesho' && password == "1234"){
        result.value = 'Correct Input';
    }

    console.log(user);
}
inputPassworAndUser();