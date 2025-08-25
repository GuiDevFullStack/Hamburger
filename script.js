const list = document.querySelector("ul");
const buttonShow = document.querySelector(".Mostrar_Tudo");
const buttonMap = document.querySelector(".Mapear");
const priceNow = document.querySelector(".price");
const buttonReduce = document.querySelector(".Somar_Tudo");
const totalValue = document.querySelector(".somatotal");
const buttonFilter = document.querySelector(".Filtrar");


function showAll(myarray) {
  let mylist = "";
  myarray.forEach((product) => {
    mylist += `
            <li style{1px solid #c3c9c3}>
                <img src="${product.src}">
                <h3 class="LanchName">${product.name}</h3>
                <h3 class="price">R$ ${product.price}</h3>
            </li>`;
  });

  list.innerHTML = mylist;
}


function salesall() {
  const newPrices = menuOptions.map((product) => ({
    ...product,
    price: product.price * 0.9,
  }))

  showAll(newPrices);

}

function mostrarTotal() {
  const somarTudo = menuOptions.reduce((acc, product) => acc + product.price, 0);
  list.innerHTML = `<li>
    <p>O valor total dos itens é R$ ${somarTudo}</p>
    </li>`;
  console.log(somarTudo)
}


const filtrarProdutos = menuOptions.filter(product => product.vegan === true);
showAll(filtrarProdutos);



buttonFilter.addEventListener("click", () => showAll(filtrarProdutos));
buttonReduce.addEventListener("click", mostrarTotal);
buttonMap.addEventListener("click", salesall);
buttonShow.addEventListener("click", () => showAll(menuOptions));
