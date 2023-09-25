let nom=document.getElementById('nom');
let mdp=document.getElementById('mdp');
let clique=document.getElementById('clique');
clique.addEventListener('click',changer);
function changer(){
    alert(nom.value);
    console.log(nom);
};