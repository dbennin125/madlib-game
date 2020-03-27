
//we'll need a button to make event listener work...construct the button!
const letsPush = document.getElementById('input-area');
//let's define a buton--hell yeah
const dasButton = document.getElementById('letsPush');
//let's write a function
function goNow() {
    const nounInput = document.getElementById('nounInput');
    const nounOutput = nounInput.value;
    const nounOut = document.getElementById('nounOut');
    nounOut.textContent = nounOutput;
    
//it worked!!!
    const adjInput = document.getElementById('adjInput');
    const adjOutput = adjInput.value;
    const adjOut = document.getElementById('adjOut');
    adjOut.textContent = adjOutput;
//it also worked!!!
    const noun2Input = document.getElementById('noun2Input');
    const noun2Output = noun2Input.value;
    const noun2 = document.getElementById('noun2');
    noun2.textContent = noun2Output;
///this works!!
   const verbInput = document.getElementById('verbInput');
   const verbOutput = verbInput.value;
   const verbOut = document.getElementById('verbOut');
   verbOut.textContent = verbOutput;
//this work!!
    const nameInput = document.getElementById('nameInput');
    const nameOutput = nameInput.value;
    const name = document.getElementById('name');
    name.textContent = nameOutput;
//this work!!
}   

dasButton.addEventListener('click', goNow);
boxTwo.style.visibilty = 'hidden';
        ///this even listen should GET values-->SET vaule into SPANS
        //hide (visibilty)the input container
        //reveal the mad lib containers

       