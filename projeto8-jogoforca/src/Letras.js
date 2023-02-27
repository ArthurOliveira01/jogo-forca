const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];
const alfabeto2 = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export default function Letras(){
    let list = alfabeto.map(function(letter) {
        return <button disabled>{letter.toUpperCase()}</button>
    })
    let list1 = alfabeto2.map(function(letter) {
        return <button disabled>{letter.toUpperCase()}</button>
    })
    return(
    <div>

        <div class="letters" id="first-row">
            {list}
        </div>
        <div class="letters">
            {list1}
        </div>
    </div>
    );
}