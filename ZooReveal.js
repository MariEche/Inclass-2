let animalCount=0;

function revealCat() {
    const card=document.getElementById("cat-pic");
    card.innerHTML=`
    <img src="images/tabby-cat.jpg" alt="cat">
    <button onclick="HideCat()">Hide Result</button>

    `;
    document.getElementById("cat-btn").style.backgroundColor="green";
    animalCount++;
    displayAnimalCount();

}

function revealDog() {
    const card=document.getElementById("dog-pic");
    card.innerHTML=`
    <img src="images/dog.jpg" alt="dog">
    <button onclick="HideDog()">Hide Result</button>
    `;
    document.getElementById("dog-btn").style.backgroundColor="green";
    animalCount++;
    displayAnimalCount();

}

function revealCow() {
    const card=document.getElementById("cow-pic");
    card.innerHTML=`
    <img src="images/cow.jpg" alt="cow">
    <button onclick="HideCow()">Hide Result</button>

    `;
    document.getElementById("cow-btn").style.backgroundColor="green";
    animalCount++;
    displayAnimalCount();
}

function HideCat(){
    const card=document.getElementById("cat-pic");
    card.remove();
    document.getElementById("cat-btn").style.backgroundColor="";
    animalCount--;
    displayAnimalCount();

}

function HideDog(){
    const card=document.getElementById("dog-pic");
    card.remove();
    document.getElementById("dog-btn").style.backgroundColor="";
    animalCount--;
    displayAnimalCount();

}

function HideCow(){
    const card=document.getElementById("cow-pic");
    card.remove();
    document.getElementById("cow-btn").style.backgroundColor="";
    animalCount--;
    displayAnimalCount();
}

function resetZoo() {
    document.getElementById("cat-pic").innerHTML = "";
    document.getElementById("dog-pic").innerHTML = "";
    document.getElementById("cow-pic").innerHTML = "";

    document.getElementById("cat-btn").style.backgroundColor = "";
    document.getElementById("dog-btn").style.backgroundColor = "";
    document.getElementById("cow-btn").style.backgroundColor = "";

    animalCount = 0;
    displayAnimalCount();
}
    
function displayAnimalCount(){
    const countElement=document.getElementById("Animal_count");
    countElement.textContent=`Animals on screen: ${animalCount}`;
}

    

