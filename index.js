const textareaEl = document.getElementById("textarea")
const totalcharEl = document.getElementById("total-counter")
const remainingEl = document.getElementById("remaining-character")



textareaEl.addEventListener("keyup",()=>{ //keyup eshte nje event listner qe sa her shtypet dicka sinjalizon qe useri po shkruan
    updatetext()
})
updatetext() /* Para se te shkruaje teksin keto vlera nuk updatohen dhe keshtuqe duhet ta therrasim si funksion para
e therret nje here funksionin qe total char te behet 0 dhe
 remaining char te jet sa max lengh para se user te shkrauje teksin*/

function updatetext(){
    const length = textareaEl.value.length // athere ne sa her shkruan useri ne texarea masim length ne kete menyre
    totalcharEl.innerText = length
    remainingEl.innerText = textareaEl.getAttribute("maxlength") - length
}