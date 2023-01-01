// ======================================== EXERCICE 1 =============================================
    // Part I : function with no parameters

function infoAboutMe() { //Create a function
    let name = "KONE";
    let age = 25;
    let hobbie = "Roller";

    console.log("My name is " + name + ", I'am " + age + " year old and I like " + hobbie);
}

infoAboutMe(); // Call the function

// Part II : function with three parameters

    function infoAboutPerson(personName, personAge, personFavoriteColor) {
    
    console.log("My name is " + personName + ", I'm " + personAge + " years old " + ", my favorite color is " + personFavoriteColor);

}
infoAboutPerson("KONE", 25, "green"); // Call the function
infoAboutPerson("ISMAEL", 21, "blue"); // Call the function

//=========================================== EXERCICE 2 ============================================
function calculateTip() {
    let entry = Number(prompt("Enter an amount"));
    let pourboire = 0, facture = 0;
    
    if(entry < 50)
    {
         pourboire += (entry * 0.2);
         facture += (entry + pourboire); 
    }
    else if(entry >= 50 && entry < 200)
    {
        pourboire += (entry * 0.15);
        facture += (entry + pourboire); 
    }
    else{
        pourboire += (entry * 0.1);
        facture += (entry + pourboire); 
    }
    console.log(" The tip amount is $" + pourboire + " and the final bill is $" + facture);
}

calculateTip(); // Call the function

//=========================================== EXERCICE 3 ============================================
                                // : Trouver Les Nombres Divisibles Par 23

function isDivisible()
{   let Outcome = "Outcome:";
    let Sum = 0;

   for(let nbre = 0; nbre <= 500; nbre++) {
        if((nbre % 23) == 0)
        {
            Outcome = Outcome + " " + nbre;
            Sum += nbre;
        }
   }
   console.log(Outcome);
   console.log("SUM :" + Sum);
}
isDivisible();

//5) Bonus: Add a parameter divisor to the function.
function isDivisible1(divisor)
{   let Outcome = "Outcome:";
    let Sum = 0;

   for(let nbre = 0; nbre <= 500; nbre++) {
        if((nbre % divisor) == 0)
        {
            Outcome = Outcome + " " + nbre;
            Sum += nbre;
        }
   }
   console.log(Outcome);
   console.log("SUM :" + Sum);
}
isDivisible1(3);
isDivisible1(45);

//=========================================== EXERCICE 4 ============================================

//1) Add the stock and prices objects to your js file.
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 


let shoppingList = {
    "banana": 1,
    "orange": 1,
    "apple": 1,
}

console.log(stock);


function myBill(){

    let amount = 0;
    let result = ` `;
    for(let item in shoppingList)
    {
        amount += stock[item] * shoppingList[item];

        if(stock[item] > 0)
        {
            stock[item] -=  shoppingList[item]
            result += `${item} est disponible. ${item} coûte : ${prices[item]} ; \n `
        }else
        {
            result += `${item} est indisponible; \n `
        }
    }

    return console.log(`${result} \n cout total : ${amount}`);
}


myBill();

console.log(stock)


//=========================================== EXERCICE 5 ============================================
//  What’s In My Wallet ?

function changeEnough(itemPrice, amountOfChange){

    const listOfCoefficients = [0.25, 0.10, 0.05, 0.01];

    let newPrice = 0;

    // Verifier si amountOfChange est un array et a la meme taille que listOfCoefficients
    if(Array.isArray(amountOfChange)  && listOfCoefficients.length != amountOfChange.length)
    {
        return console.log(`Veuillez fournir tableau de ${listOfCoefficients.length} montant`);
    }

    for (let elt = 0; elt<amountOfChange.length; elt++ ) {
        
        // recuperer le prix;
        let price =  Number(amountOfChange[elt]);

        //Verifier si l'element est un nombre sinon on l'attribue 0
        if (isNaN(price)) {
            price = 0;            
        }

        // Calcul du prix avec les coefficients
        newPrice = newPrice +  price * listOfCoefficients[elt];

   }

   if (itemPrice <= newPrice) {
        return console.log(true);
   }else{
    return  console.log(false); 
   }
}


// Run function
changeEnough(14.11, [2,100,0,0]);

changeEnough(0.75, [0,0,20,5]);

//=========================================== EXERCICE 6 ============================================
function hotelCost(){
    
    const costs = 140;
    let numberOfNights = undefined;

    do {
         numberOfNights = prompt('Number of night : ');
    } while (isNaN(numberOfNights));

    return console.log(`\n The hotel cost : ${Number(numberOfNights) * costs} \n`);
}



function planeRideCost(){

    let destinations = {"London": 183, "Paris":220}
    let destination = undefined;
    let checker = true;

    do {
        destination = prompt('Votre destnation : ');
        let removeSpace = destination.trim();

        if(removeSpace.length > 0 && isNaN(removeSpace)){
            checker = false;
        }
    } while (checker);

    if (destinations[destination]) {
        return console.log(`\n the hotel cost: ${destinations[destination]}$ \n`);
    } else {
        return console.log(`\n The plane tickets cost : ${destination}$ \n`);
    }

}



function rentalCarCost(){

    const costs = 40;
    let numberOfDays = undefined;
    let result = 0;

    do {
        numberOfDays = prompt('Nombre de jours : ');
    } while (isNaN(numberOfDays));

    result = numberOfDays * costs;
    if (numberOfDays > 10) {
        result -= result * 0.05;
    }

    return console.log(`\n The car cost : ${result}$ \n`);
}



function totalVacationCost(){
    hotelCost();
    planeRideCost();
    rentalCarCost();
}

totalVacationCost();