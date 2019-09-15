let rullaLoopen = true

while (rullaLoopen === true){
    const konsonanter = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z'];
    const vokaler = ['a','e','i','o','u','y', ' '];
    let rovarSprak = []; 
    let dinMening = prompt('Write your sentence/word here and we will translate it to Rovarspraket');

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
    console.log(`You wrote: "${dinMening.toUpperCase()}". In Rovarsprak this translates to: \n${sprakArray.toUpperCase()}`)
    window.alert(`You wrote: ${dinMening.toUpperCase()}. \nRovarsprak translation: ${sprakArray.toUpperCase()}`)
    rovarSprak = [];

    let jaNej = window.confirm('go again?')

    if (jaNej){
    rullaLoopen === true
    } else {
    alert('trist, hej då')
    console.log('You chose to stop the program, hope it was as fun to roll it as it was to make it.....')
    rullaLoopen === false
    break;
    }
   


}

 







