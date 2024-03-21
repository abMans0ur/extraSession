async function getProduct(){
    const data = await fetch('https://dummyjson.com/products')
    .then((d)=>d.json())
    .then((d)=> {return d.products})
    .catch((error)=>console.log(error))
    console.log(data)

    let productsdata=``
    data.map((el)=>{

        productsdata+=`
        <tr>
        <td>${el.id}</td>
        <td>${el.title}</td>
        <td>${el.price}</td>
        <td>${el.description}</td>
        <td>${el.category}</td>
        <td><img src="${el.thumbnail}"></td>
        <td>${el.images.map((ele)=>
            `<img src="${ele}">`
        )}
        </td>
        </tr> `
        document.getElementById('outpot').innerHTML=productsdata

    })
}
getProduct()