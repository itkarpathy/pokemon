const btn = document.querySelector('.btnSearch');
const btnRandom = document.querySelector('.btnRandom');


const apiData = {
   url: 'https://pokeapi.co/api/v2/',
   type: 'pokemon',
   id: '22'
}

//get a random pokemon 

btnRandom.addEventListener('click', () => {
   const num = Math.floor(Math.random(250) * 150);

   if (num !== 0 && num <= 400) {
      const { url, type, id } = apiData;
      const apiUrl = `${url}${type}/${num}`

      fetch(apiUrl)
         .then((data) => data.json())
         .then((pokemon) => generateHtml(pokemon))

      const generateHtml = (data) => {
         console.log(data)

         const html = `
         <li class="pokemon" id="${num}"><p class="close-btn">X</p>
         <div class="name">${data.name}</div>
         <img src="${data.sprites.back_default}"/>
         <div class="details">
         <span>Base Exp.: ${data.base_experience}</span>
         <span>Order: ${data.order}</span> 
         <br>
         </li>
         `


         const pokeDiv = document.querySelector(".container-pokemon");
         // const poke = document.querySelector('id');
         // const pokeTake = document.querySelectorAll(".pokemon");

         pokeDiv.insertAdjacentHTML('beforeend', html);

         // const classes = document.querySelectorAll("p");

      }

      function removeCard(e) {
         if (!e.target.classList.contains('close-btn')) return
         e.target.parentNode.remove()
      }

      window.addEventListener('click', removeCard);

   } else {

      return '';
   }
});


//make a new user:

function checkFrom(user) {
   !user === user.value && '!null' ? console.log('Success') : console.log("ERROR BRRR...")
}


btn.addEventListener('click', () => {
   const input = document.querySelector('.input').value;
   const newUser = document.querySelector(".text-box");

   newUser.insertAdjacentHTML('beforeend', `<p>${input}</p>`);

   checkFrom();



});

