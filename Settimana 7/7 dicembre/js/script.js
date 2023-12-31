//console.log(window)
document.addEventListener("DOMContentLoaded", () => 
{
    let xhr = new XMLHttpRequest ();
    xhr.open('GET', 'https://striveschool-api.herokuapp.com/books')
    xhr.send();

    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState ===4 && xhr.status === 200)
        {
            let books = JSON.parse(xhr.responseText);
            //console.log(books[0])
            books.forEach(element => {
                CreateCard(element)
                
            });
            
        }
        
    }
});

let c=0;//Contatore funzione
let d=0;//Contatore righe

function CreateCard (Obj)
{
    
    let container = document.querySelector('#CardsContainer');
    let row = document.createElement("div");
    if ((c%4)===0)
    {
        row.classList.add("row", "row-cols-1", "row-cols-sm-3", "row-cols-xxl-4");
        container.appendChild(row);
        d++;
    }
    let allrows= document.querySelectorAll(".row")
    //console.log(allrows)
    let lastrow=allrows[(allrows.length-1)]
    //console.log(lastrow)

    let CardDiv = document.createElement("div");//Crea CardDiv
    lastrow.appendChild(CardDiv);
    CardDiv.classList.add("card", "col", "m-2");
    CardDiv.style.width= "18rem";//Aggiungi classi e stile a CardDiv

    let imag = document.createElement("img", "img-fluid");//Crea imag
    CardDiv.appendChild(imag);//imag dentro CardDiv
    imag.src=Obj.img;
    imag.alt=Obj.asin;

    let CardBody = document.createElement("div");//Crea CardBody
    CardBody.classList.add("card-body");
    CardDiv.appendChild(CardBody);//CardBody dentro CardDiv

    let bookTitle = document.createElement("h5");//Crea CardBody
    bookTitle.classList.add("card-title");
    CardBody.appendChild(bookTitle);
    bookTitle.innerText=Obj.title;

    let genre = document.createElement("p");//Crea CardBody
    genre.classList.add("card-text");
    CardBody.appendChild(genre);
    genre.innerText=Obj.category;

    let cost = document.createElement("p");
    cost.classList.add("card-text");
    CardBody.appendChild(cost);
    cost.innerText=Obj.price +"€";

    let buyButton = document.createElement("a");
    buyButton.classList.add("btn", "btn-danger");
    buyButton.classList.add();
    CardBody.appendChild(buyButton);
    buyButton.innerText="Buy Now";

    buyButton.addEventListener('click', () => 
    {
        //alert("ciao")
        let selected=buyButton.parentElement
        Shoppinglist(selected);
    });

    let discardButton = document.createElement("a");
    discardButton.classList.add("btn", "btn-light", "border", "border-danger", "mx-4", "text-danger")

    CardBody.appendChild(discardButton);
    discardButton.innerText="Discard";

    discardButton.addEventListener('click', () => 
    {
        //alert("ciao")
        discardButton.parentElement.parentElement.remove();
    });

    c++;
}
let arr = []
function Shoppinglist (libro)
{
    arr.push(libro)
    console.log(arr)
}

/*<div class="card" style="width: 18rem;">
        <img src="" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>*/