
function shuffle(array) {
    
    var currentIndex = array.length, randomIndex;


    while(0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex]
        ]
    }
    return array
}


function spin(){
   // wheel.play()
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let selectedItem = "";
    
    let BGF = shuffle([9500, 9250, 9610]);
    let RB = shuffle([8850, 8210, 8570]);
    let D50 = shuffle([7810, 7170, 7530]);
    let D30 = shuffle([6810, 6170, 6530]);
    let D10 = shuffle([5770, 5130, 5490]);
    let BLA = shuffle([4730, 4090, 4450]);
    let D15 = shuffle([3690, 3050, 3410]);
    let D20 = shuffle([2640, 2010, 2370]);
    let D25 = shuffle([1600, 1970, 1330]);
    let D75 = shuffle([11560, 11930, 12290]);

    // let BGF = shuffle([1890, 2250, 2610]);
    // let RB = shuffle([1850, 2210, 2570]);
    // let D50 = shuffle([1810, 2170, 2530]);
    // let D30 = shuffle([1810, 2170, 2530]);
    // let D10 = shuffle([1770, 2130, 2490]);
    // let BLA = shuffle([1730, 2090, 2450]);
    // let D15 = shuffle([1690, 2050, 2410]);
    // let D20 = shuffle([1640, 2010, 2370]);
    // let D25 = shuffle([1600, 1970, 2330]);
    // let D75 = shuffle([1560, 1930, 2290]);
    
    let results = shuffle([
        BGF[0],
        RB[0],
        D50[0],
        D30[0],
        D10[0],
        BLA[0],
        D15[0],
        D20[0],
        D25[0],
        D75[0],
    ]);
    console.log( results[0] );

    if(BGF.includes(results[0])) selectedItem = "Buy One Get One free";
    if(RB.includes(results[0])) selectedItem = "Recipe Book";
    if(D50.includes(results[0])) selectedItem = "50% Discount";
    if(D30.includes(results[0])) selectedItem = "30% Discount";
    if(D10.includes(results[0])) selectedItem = "10% Discount";
    if(BLA.includes(results[0])) selectedItem = "Better Luck Next Time";
    if(D15.includes(results[0])) selectedItem = "15% Discount";
    if(D20.includes(results[0])) selectedItem = "20% Discount";
    if(D25.includes(results[0])) selectedItem = "25% Discount";
    if(D75.includes(results[0])) selectedItem = "75% Discount";

    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate(" + results[0] + "deg)";
    element.classList.remove('animate');
    setTimeout(function(){
        element.classList.add("animate");
    }, 5000);

    setTimeout(function(){
      //  applause.play();
        Swal.fire({
            title: "Congratulations!",
            html: "You won" + selectedItem ,
            imageUrl: "https://unsplash.it/400/200",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
    }, 5500)
    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000)
}
