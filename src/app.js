const data = [
  {
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9WvylQubppq32gygr0hOvnp9leaLYABk6w&s",
  },
  {
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_JitKGsyqDs5ZMNcTg3suGrIXd67BH3dYiBmPh0jQiNLjtXKJrzttOpPPBwi3A_FeY6Y&usqp=CAU",
  },
  {
    urlImage:
      "https://uploads.spiritfanfiction.com/historias/capas/202107/filhos-de-dragoes-22595972-020720212010.jpg",
  },
  {
    urlImage:
      "https://i.pinimg.com/736x/82/43/74/8243743af28fa1d8c612d12e9338876c.jpg",
  },
  {
    urlImage:
      "https://repositorio.sbrauble.com/arquivos/in/magic/479912/62b100dd59247-8x24m-9rkql-96935081362b100dd5928a.jpg",
  },
  {
    urlImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGcxPynHdFWemLGifJld6k_sWAF7mHZPU0ug&s",
  },
  {
    urlImage:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/31a92255-861d-40f4-ad78-a2efd309b0d2/d6hvigl-64345202-bd75-4208-aa29-aa124c3a6156.jpg/v1/fill/w_1024,h_598,q_75,strp/blue_dragon_by_sandara_d6hvigl-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk4IiwicGF0aCI6IlwvZlwvMzFhOTIyNTUtODYxZC00MGY0LWFkNzgtYTJlZmQzMDliMGQyXC9kNmh2aWdsLTY0MzQ1MjAyLWJkNzUtNDIwOC1hYTI5LWFhMTI0YzNhNjE1Ni5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.G2pX-iLPyFtfuTaGEQHKnuZHewhaE_ud66RUMUlGBzk",
  },
]
const ulDragons = document.querySelector(".dragons")

for (let i = 0; i < data.length; i++) {
  ulDragons.innerHTML += `
  <div class="dragon">
            <img
              src="${data[i].urlImage}"
              alt=""
            />
          </div> 
  `
}
