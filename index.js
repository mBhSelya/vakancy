function getInfoUsers() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((res) => {
          return res.json();
      })
      .then((res) => {
        getArrUsers(res);
      })
      .catch((err) => {
        console.log(err);
      })
}

function getRandomNumber() {
    let arr = [];
    arr[0] = Math.floor(Math.random() * 10) + 1;
    arr[1] = Math.floor(Math.random() * 10) + 1;
    while (arr[0] === arr[1]) {
        arr[1] = Math.floor(Math.random() * 10) + 1;
    }
    return arr;
}

function getArrUsers(res) {
    let nameArr = [];
        let randomNumber = getRandomNumber();
        for (let i = 0; i < res.length; i++) {
            if (res[i].id !== randomNumber[0] && res[i].id !== randomNumber[1]) {
                nameArr.push(`${res[i].name + ' ' + res[i].username}`);
            }
        }
    console.log(nameArr)
    addUsersToDocument(nameArr);
}

function addUsersToDocument(arr) {
    for (let i = 0; i < arr.length; i++) {
        document.querySelector('.users').textContent += arr[i] + ' | ';
    }
}

getInfoUsers();