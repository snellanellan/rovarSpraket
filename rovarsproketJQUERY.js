$(document).ready(() => {



//let rullaLoopen = true

//while (rullaLoopen === true){
    const konsonanter = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z',
    'B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Z',];
    const vokaler = ['a','e','i','o','u','y', 'å', 'ä', 'ö', 'A','E','I','O','U','Y', 'Å', 'Ä', 'Ö',' ', ',', '.', '!', '?'];
    let rovarSprak = [] 

$(document).keypress(function(e) {
    if(e.which == 13) {
        runTranslate();
    }
    
});

/*$('#translate').on('click', () => {
    runTranslate();
});*/

$('#textarea').on('keyup', () => {
    runTranslate();
})

let runTranslate = () => {
    $('#result-area').html(rovarSprak)
    let dinMening = $('#textarea').val();
    for (let kollaDinMening = 0; kollaDinMening < dinMening.length; kollaDinMening++){
    //console.log(kollaDinMening + dinMening[kollaDinMening]); 
        for (let kollaKonsonanter = 0; kollaKonsonanter < konsonanter.length; kollaKonsonanter++){
            if(dinMening[kollaDinMening] === konsonanter[kollaKonsonanter]){
                rovarSprak.push(konsonanter[kollaKonsonanter] + 'o' + konsonanter[kollaKonsonanter]) //console.log(kollaKonsonanter + konsonanter[kollaKonsonanter]); 
      
        }
    }
     
    for (let kollaVokaler = 0; kollaVokaler < vokaler.length; kollaVokaler++){
          // console.log(kollaVokaler + vokaler[kollaVokaler])
        if(dinMening[kollaDinMening] === vokaler[kollaVokaler]){
                rovarSprak.push(vokaler[kollaVokaler]);
            }
       } 

    }

    sprakArray = rovarSprak.join('');
    //window.alert(`You wrote: ${dinMening}. \nRovarsprak translation: ${sprakArray}`)

    $('#result-area').html(sprakArray)

    rovarSprak = [];
    
};

function clear() {
    $('#textarea').val("");
    $('#result-area').html("")
}

$('#erase-btn').on('click', () => {
    clear();
})

    

    //console.log(`You wrote: "${dinMening.toUpperCase()}". In Rovarsprak this translates to: \n${sprakArray.toUpperCase()}`)
    
   

    /*let jaNej = window.confirm('go again?')

    if (jaNej){
    rullaLoopen === true
    } else {
    alert('trist, hej då')
    console.log('You chose to stop the program, hope it was as fun to roll it as it was to make it.....')
    rullaLoopen === false
    break;
    }*/
   


//}

 })







