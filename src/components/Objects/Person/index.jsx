import {Mario_Style} from './style'
import Mario from '../../../public/mario.gif'
import { useEffect, useState } from 'react'
import Mario2 from '../../../public/mario2.png'
import GameOver from '../../../public/gameover.webp'
export default function Person(){
    const [over,SetOver] = useState(false)
    useEffect(()=>{


        function pressionouTecla(e) {
            if (e.key === "ArrowDown") {
              
                let el = document.getElementsByClassName('mario')
                el[0].style.width = '70px'
                el[0].src = Mario2
                el[0].style.transform ='scaleX(-1)'
              
            } else if (e.key == 'ArrowUp') {
                console.log(over)
                let el = document.getElementsByClassName('mario')
                if(el) {
                    let style = window.getComputedStyle(el[0])
                    if (style.bottom == '155px') {
                        el[0].classList.add('jump')
                        setTimeout(() => {
                            el[0].classList.remove('jump')
                        }, 500);
                    }
                }
            }
        }

        function soltouTecla(e) {
            if (e.key === "ArrowDown") {
                let el = document.getElementsByClassName('mario')
                el[0].style.width = '130px'
                el[0].src = Mario
                el[0].style.transform ='scaleX(1)'
            }
        }

        document.addEventListener("keydown", pressionouTecla);
        document.addEventListener("keyup", soltouTecla);


        var interval = setInterval(() => {
            let mario = document.getElementsByClassName('mario')
            let marioStyle = window.getComputedStyle(mario[0])
           // console.log(marioStyle.bottom)
            let tube = document.getElementsByClassName('tube')
            let tubeStyle = window.getComputedStyle(tube[0])

            if(+tubeStyle.right.replace('px','') > 1700 && +marioStyle.bottom.replace('px','') <= 200) {
               console.log(+tubeStyle.right.replace('px',''))
                console.log(+marioStyle.bottom.replace('px',''))
                Death()
            }

          

        }, 10);

        function Death(){
            console.log('over?',over)
            const imagem = new Image();

            // Defina o caminho da imagem
            imagem.src = GameOver
            imagem.style.width = '500px'
            // Adicione classes, estilos ou outros atributos, se necessário
            imagem.id = 'imagem-centralizada';
        
            // Adicione o evento de carregamento da imagem (opcional)
            imagem.onload = function() {
              // Quando a imagem carregar, adicione-a ao elemento "container"
              const container = document.getElementById('GameBoard');
              container.appendChild(imagem);
            };
           

            setTimeout(() => {
                let element = document.getElementById('imagem-centralizada')
                element.parentNode.removeChild(element);
            }, 2000);
        }
      
    },[])

    return (
        <Mario_Style>
            <img className='mario' src={Mario} alt="" />
        </Mario_Style>

    )
}