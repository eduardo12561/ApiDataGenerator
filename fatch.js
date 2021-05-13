const data_result = document.getElementById('data_result');
const data_result_2 = document.getElementById('data_result_2');
const data_result_3 = document.getElementById('data_result_3');
const data_result_4 = document.getElementById('data_result_4');

const data_btn = document.getElementById('data_btn');
const data_btn_2 = document.getElementById('data_btn_2');
const data_btn_3= document.getElementById('data_btn_3');
const data_btn_4 = document.getElementById('data_btn_4');

    data_btn.addEventListener('click', getRandomData);

    function getRandomData() {
      const randomNumber = Math.floor(Math.random() * 100) + 1;

      fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`)
        .then(res => res.json())
        .then(data => {
          const paragraph = `<p>${data.body}</p>`;
          data_result.innerHTML = paragraph;
        })
    }

    data_btn_2.addEventListener('click', getRandomData2 );

    function getRandomData2 () {
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`)
        .then(res => res.json())
        .then(data => {
            const paragraph = `<p>${data.title}</p>`;
            data_result_2.innerHTML = paragraph;
        })
    }

    data_btn_3.addEventListener('click', getRandomData3);

    function getRandomData3() {
      const randomNumber = Math.floor(Math.random() * 100) + 1;

      fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`)
        .then(res => res.json())
        .then(data => {
          const paragraph = `<p>${data.id}</p>`;
          data_result_3.innerHTML = paragraph;
        })
    }

    data_btn_4.addEventListener('click', getRandomData4);

    function getRandomData4() {
      const randomNumber = Math.floor(Math.random() * 100) + 1;

      fetch(`https://jsonplaceholder.typicode.com/posts/${randomNumber}`)
        .then(res => res.json())
        .then(data => {
          const paragraph = `<p>${data.userId}</p>`;
          data_result_4.innerHTML = paragraph;
        })
    }