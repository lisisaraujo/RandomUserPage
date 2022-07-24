


$(document).ready(function () {

  $.ajax({
    url: 'https://randomuser.me/api/?results=40',
    dataType: 'json',
    success: function (data) {
      console.log(data);
      $.each(data.results, function (key, person) {
        console.log(person.name.first + ' ' + person.name.last) +
          $('#users').append(`<div class="col-md-2 text-center">
            <img src="${person.picture.large}" class= "rounded-circle">
            <h5 style="font-size:16px">${person.name.first} ${person.name.last}</h5> 
            <div><span class="fi fi-${person.nat.toLowerCase()}"></span></div>
            <i class="fa-brands fa-github" style="color: dark-blue"></i>
            <i class="fab fa-facebook-square" style="color:blue"></i>
            <i class="fab fa-twitter mb-3" style="color: aqua"></i></div>`);
      })
    }

  });
});


/*
//   const getPerson = async () => {
//     try {
//       let body = await fetch('https://randomuser.me/api/?results=40')
//       let parsedData = await body.json()
//       console.log(parsedData);
//       let person = parsedData.results[0]

//       let personDisplay = document.createElement('div')
//       personDisplay.innerHTML = (`
 
//   <h5>${person.name.first}</h5>
//   <p> ${person.location.city}, ${person.location.country}</p>
//   `)
//       document.querySelector('.guest').append(personDisplay)
//     } catch (error) {
//       console.log(error);
//       let personDisplay = document.createElement('div')
//       personDisplay.innerText = 'Could not load data from person-api'
//       document.querySelector('.guest').append(personDisplay)
//     }
//   }

//   let personButton = document.querySelector('#person')

// personButton.addEventListener('click', getPerson)
});*/


