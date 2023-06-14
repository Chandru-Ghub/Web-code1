async function  bookData(){
 let start = await fetch('https://www.anapioficeandfire.com/api/books').then((data)=>{
        console.log(data);
        return data.json();
    }).then((result)=>{
      
        console.log(result)
let t = '';
let img = "https://static01.nyt.com/images/2019/05/21/books/21newsbook-GOT/99109306cf204e268fec8c8116ab45be-superJumbo.jpg" 

let img2 = 'https://m.media-amazon.com/images/I/91dSMhdIzTL._AC_UF1000,1000_QL80_.jpg';
let sum = 0;

document.getElementById('button').addEventListener('click',()=>{

    let searchInput = document.getElementById('inputdata').value;

    let elements = document.querySelectorAll('bookName');
     let card = document.querySelectorAll('.card');
    console.log('work');
     elements.forEach((a,index)=>{
        if(a.innerText.includes(searchInput.toUpperCase())){
            card[index].classList.remove('hide');
            console.log('work1');
        }
        else{
            card[index].classList.add('hide');
            console.log('work2');
        }
     });
})

result.forEach((a)=>{

    t += ` <div  class="card"  style="width: 18rem" >
        <img src=${img} alt="book image">
          <h5 class = 'bookName' type = 'text' class="card-title">Name: ${a.name}</h5>
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

document.getElementById('container').innerHTML=t;



}).catch((error)=>{
    console.log(error)
    })
    
    inputdata.oninput = filterUser;
    function filterUser(){
        const lielement = document.querySelectorAll('p');
        for(let li of lielement ){
            const currentName = li.innerHTML.toLocaleLowerCase();
            const searchName = this.value.toLowerCase();
            if(!currentName.includes(searchName)){
                li.setAttribute('hidden',true);
            }
            else{
                li.removeAttribute('hidden')
            }
        }
    }
 }
 bookData();