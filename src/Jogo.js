import { useState } from "react";
import palavras from "./palavras";
import App from "./App";



export default function Jogo(){
    const [misteriosa, setMisteriosa] = useState(
        palavras[Math.floor(Math.random() * palavras.length)]
    );
    const [palpites, setPalpites] = useState([]);
    const [erro, SetErro] = useState(0);
    const [over, setOver] = useState(false);
    const [vitoria, setVitoria] = useState(false);
    function start(){
        let help = misteriosa.length;
        let auxiliar = 0;
        let under = "";
        console.log(misteriosa);
        while(auxiliar < help){
            under += "_ ";
            auxiliar ++;
        }
        console.log(under.length);
        setTestes(under);
    }
    
    let helper = ''
    let forca = '';
    let u = '';
    function write(){
        let y = 0;
        let n = 0;
        helper = testes;
        while(y < testes.length){
            u = '';
            if(helper.charAt(y) === '_'){
                if('a' === misteriosa.charAt(n)){
                    u = helper.split("");
                    u[2 * n] = 'a';
                    console.log(u);
                    helper = u.join("");
                }
                n ++;
            }
    
            y++;
        }
        setTestes(helper);
        
    }

    const [testes, setTestes] = useState("");
    return(
    <div>
        <div class="container">
          <div class="forca">
            <img  src="assets/img/forca0.png" alt=""></img>
          </div>
          <button onClick={write}></button>
          <button onClick={start} class="start-game">Escolher Palavra</button>
        </div>
        <p class="underscore">{testes}</p>
    </div>
    
    );
}
