//<script src="https://github.com/SalvadorCab/SHA/hijackGoogleLogo.js"></script>

// Step 1  
let hijackGoogleLogo = function(){
//Step 2
let googleLogoEl = document.querySelector("#hplogo");

googleLogoEl.src = "https://www.hackyourfuture.dk/static/logo-dark.svg";
googleLogoEl.srcset = "https://www.hackyourfuture.dk/static/logo-dark.svg 1x";
}

document.addEventListener("click", hijackGoogleLogo);

function main(){
//    hijackGoogleLogo();
}

main();
