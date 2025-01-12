function hideElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('hidden')
}
function randomAlphabet(){
    const alphabets="abcdefghijklmnopqrstuvwxyz"
    const alphabet=alphabets.split('');
    const randomindex=Math.random() * alphabets.length;
    const index=Math.round(randomindex);
    const randomAlphabet=alphabet[index];
    return randomAlphabet;
}
function setbgcolor(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removebgcolor(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function setElementValueById(elementId, value){
    const element=document.getElementById(elementId);
    element.innerText=value;
}