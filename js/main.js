const container = document.getElementById('card-container');

// single person objects

const team = [
   {
      'name': 'Waine Barnett',
      'role': 'Founder & CEO',
      'img': 'img/wayne-barnett-founder-ceo.jpg'
   },

   {
      'name': 'Angela Caroll',
      'role': 'Chief Editor',
      'img': 'img/angela-caroll-chief-editor.jpg'
   },

   {
      'name': 'Walter Gordon',
      'role': 'Office Manager',
      'img': 'img/walter-gordon-office-manager.jpg'
   },

   {
      'name': 'Angela Lopez',
      'role': 'Chief Editor',
      'img': 'img/angela-lopez-social-media-manager.jpg'
   },

   {
      'name': 'Scott Estrada',
      'role': 'Developer',
      'img': 'img/scott-estrada-developer.jpg'
   },

   {
      'name': 'Barbara Ramos',
      'role': 'Graphic Designer',
      'img': 'img/barbara-ramos-graphic-designer.jpg'
   }
];

for (let i = 0; i < team.length; i++) {
   // creo la card

   const card = document.createElement("div");
   card.classList.add("card-w", "card");
   
   // creo l'immagine

   const img = document.createElement("img");
   img.classList.add("card-img-top")
   img.src = team[i].img;
   img.alt = team[i].name;
   card.appendChild(img);

   // creo il div per il testo

   const text = document.createElement("div");
   text.classList.add("text-center", "card-body");

   // creo l'h5 per il nome

   const h5 = document.createElement("h5");
   h5.classList.add("info");
   h5.innerHTML = team[i].name;
   text.appendChild(h5);

   // creo il paragrafo

   const para = document.createElement("p");
   para.classList.add("info");
   para.innerHTML = team[i].role;
   text.appendChild(para);

   card.appendChild(text);

   container.appendChild(card);
}