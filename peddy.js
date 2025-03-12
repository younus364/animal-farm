const allPeddy = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/peddy/pets")
    const data = await res.json();
    sorting(data)
    displayAllPeddy(data.pets)
    // console.log(data.pets)
    
}

const patDetails = async(id) => {
    const res =await fetch(` https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    const data =await res.json();
    displayPatDetails(data.petData)

}
const patCategories = async () => {
    const res = await fetch(" https://openapi.programming-hero.com/api/peddy/categories")
    const data = await res.json();
    
    
    patCategoriesDisply(data.categories)
}
const patyCategory = async (ani) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${ani}`)
    const data = await res.json()
    // console.log(data.data)
    // console.log(ani)
  {
    removeClass()
    const activBtn = document.getElementById(`btn-${ani}`)
    activBtn.classList.add("active")
    // console.log(activBtn)
  }
    displayAllPeddy(data.data)
}

const patCategoriesDisply = (categori) => {
    const singleCategori = document.getElementById("categori")

    // console.log(categori)
    categori.forEach(item => {
        const div = document.createElement("div")
        // console.log(item.category)
        
        div.innerHTML = `
        
        <div id ="btn-${item.category}" onclick = "patyCategory('${item.category}')" class= " btn-categori  btn flex py-8 items-center border border-[#0E7A8126] rounded-lg justify-center gap-3 p-2">
        
        <img class = " w-12" src= ${item.category_icon} />
        <p class =" text-2xl font-bold">${item.category}</p>
        
        

       
        </div>
        `
       

        singleCategori.appendChild(div)
    });

}

const addSidBarAnimalPic = (ani) => {
    console.log(ani)
    const imgcontainer = document.getElementById("animalPic")
    const div = document.createElement("div")
    div.innerHTML = `<img class = " rounded-lg" src = "${ani}"/>`
    imgcontainer.appendChild(div)

}


// sorting in price


const sorting =(petData)=>{
  document.getElementById("sortingPrice").addEventListener('click',()=>{
    const sortedByPrice= petData.pets.sort((a, b) => (b.price || 0) - (a.price || 0));
    displayAllPeddy(sortedByPrice)
    console.log(petData)
  })
  
} 



const removeClass = ()=>{
 const removeActive = document.getElementsByClassName("btn-categori")
 for(let btn of removeActive){
    btn.classList.remove("active")
 }
}

const displayAllPeddy = (peddy) => {
    // console.log(peddy)
    const animalContainer = document.getElementById("animal")
    animalContainer.innerText = ""
    if (peddy.length === 0) {
        animalContainer.classList.remove("grid")
        animalContainer.innerHTML = `
        
    <div >
    <div class=" flex justify-center">
     <img class = "flex justify-center" src = "./images/error.webp" /> 
     </div>
     <div class="text-center">
    <h3 class= "font-bold text-2xl text-center mt-8">No Information Available</h3>
    <p class="px-20">It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
    its layout. The point of using Lorem Ipsum is that it has a.</p>
    </div>
    </div>
    
        `
        return
    }
    animalContainer.classList.add("grid")
    peddy.forEach(item => {
        // console.log(item)
        // sorting(item)
        const div = document.createElement("div")

        div.innerHTML = ` 
    <div class="card bg-base-100 w-full border border-[#1313131A] shadow-sm">
  <figure>
    <img
    class = " w-[90%] h-[180px] rounded-lg mt-3 bg-cover"
      src=${item.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title font-bold text-xl"> ${item.pet_name} </h2>
    <p class = "text-gray-500 text-base"><i class="fa-solid fa-table-cells-large"></i> </i>Breed : ${item.breed}</p>
    <p class = "text-gray-500 text-base"><i class="fa-solid fa-calendar-days"></i> Birth : ${item.date_of_birth}</p>
    <p class = "text-gray-500 text-base"><i class="fa-solid fa-mercury"></i> Gender : ${item.gender}</p>
    <p class = "text-gray-500 text-base"><i class="fa-solid fa-dollar-sign"></i> Price : ${item.price}</p>
    <div class="card-actions justify-between">
      <div class="btn text-gray-500" onclick= "addSidBarAnimalPic('${item.image}')" ><i class="fa-solid fa-thumbs-up"></i></div>
      <div class="btn text-gray-500">Adopt</div>
      <div  class="btn text-gray-500" onclick= "patDetails('${item.petId}')">Details</div>
    </div>
  </div>
</div>
    `
        animalContainer.appendChild(div)
    })
}

const displayPatDetails =(details)=>{
    console.log(details)

    const detailsShow = document.getElementById("model-content")
    // const div = document.createElement("div")
    detailsShow.innerHTML = `
    <div class="card bg-base-100  w-full border border-[#1313131A] shadow-sm">
  <figure >
    <img
    class = " w-full rounded-lg mt-3 bg-cover px-2 "
      src=${details.image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
  <h2 class="card-title font-bold text-xl"> ${details.pet_name} </h2>
  <div class= " flex gap-4" >
  <div>
  <p class = "text-gray-500 text-base"><i class="fa-solid fa-table-cells-large"></i> </i>Breed : ${details.breed}</p>
    <p class = "text-gray-500 text-base"><i class="fa-solid fa-mercury"></i> Gender : ${details.gender}</p>
    <p class = "text-gray-500 text-base"><i class="fa-solid fa-mercury"></i> Gender : ${details.vaccinated_status}</p>
  </div>
  <div>
  <p class = "text-gray-500 text-base"><i class="fa-solid fa-calendar-days"></i> Birth : ${details.date_of_birth}</p>
    <p class = "text-gray-500 text-base"><i class="fa-solid fa-dollar-sign"></i> Price : ${details.price}</p>
  </div>
  </div>
  
    <hr class = "text-gray-500">
    <h4 class = " text-xl font-semibold">Details Information</h4>
    <p  class = "text-gray-500">${details.pet_details}</p>
    
    
   
  </div>
</div>
    `
    document.getElementById('customModal').showModal();

}


patCategories();
allPeddy();