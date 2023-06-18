//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

async function  bookData(){
 let start = await fetch('https://www.anapioficeandfire.com/api/books').then((data)=>{
        console.log(data);
        return data.json();
    }).then((result)=>{
      
        console.log(result)
let t = '';
let img = "https://static01.nyt.com/images/2019/05/21/books/21newsbook-GOT/99109306cf204e268fec8c8116ab45be-superJumbo.jpg" 

let sum = 0;

let product = document.getElementById('container')

result.forEach((a)=>{

    t += ` <div  class="card"  style="width: 18rem" >
          <img src=${img} alt="book image">
          <h5 class = 'book' type = 'text' > ${a.name}</h5>
          <p type = 'text' id='capital' class="card-text"><k> ISBN:</k> ${a.isbn}</p>
          <p type = 'text' id='region' class="card-text"><span>Number Of Pages: </span>${a.numberOfPages}</p>
          <p type = 'text' id='cc' class="card-text"><span> Authors:</span> ${a.authors}</p>
          <p type = 'text' id='cc' class="card-text"> <span>Publisher:</span> ${a.publisher}</p>
          <p type = 'text' id='cc' class="card-text"> <span>Date of Release:</span> ${a.released}</p>
          <div class = 'characters'>
            <label> Characters  - </label>
            <a href = '${a.characters[sum]}'>I</a>
            <a href = ' ${a.characters[sum++]}'>II</a>
            <a href = ' ${a.characters[sum++]}'>III</a>
            <a href = ' ${a.characters[sum++]}'>IV </a>
            <a href = ' ${a.characters[sum++]}'>V </a>
           
            </div>
        </div>`
        
        sum++;
});

product.innerHTML=t;

///filter search data 

let para = document.getElementById('para');


let filter = document.getElementById('inputdata');
filter.addEventListener('keyup',filterValue);

 function filterValue(){
let filterSearch = filter.value.toUpperCase();


let item = product.querySelectorAll('.card');
item.forEach((a)=>{

    let title = a.querySelector('.book');
    if(title.innerHTML.toUpperCase().indexOf(filterSearch) > -1){
        para.style.display = 'none';
        a.style.display = 'initial';
      
    }
    else{
        a.style.display = 'none';
    }
})


}

}).catch((error)=>{
    console.log(error)
    })
    
 }
 bookData();