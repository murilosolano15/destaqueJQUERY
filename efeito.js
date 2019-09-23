/**
 * Exemplo de uso da biblioteca JQUERY
 * @author Murilo Solano Oliva
 */

 $(document).ready(function(){
     //se o mouse estiver em cima da imagem
     //fade (timer, opacidade)
     //timer em milisegundos
     // ( (0)transparente a (1) solido )
     $('ul.Destaque li img').hover(function(){

        $('ul.Destaque li img').not(this).stop().fadeTo(400,0.2)
        //senão (se o mouse não estiver em cima da imagem)
     },function(){

        $('ul.Destaque li img').stop(this).fadeTo(400,1)
     })
 })