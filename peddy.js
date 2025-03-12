

const patCategories = async () => {
    const res = await fetch(" https://openapi.programming-hero.com/api/peddy/categories")
    const data = await res.json();
    
    
    patCategoriesDisply(data.categories)
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


patCategories();
