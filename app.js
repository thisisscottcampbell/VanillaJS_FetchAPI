//GET 
const getText = () => {
  fetch('test.txt')
    .then((res) => {
      return res.text();
    })
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
}

document.querySelector('#button1').addEventListener('click', getText);