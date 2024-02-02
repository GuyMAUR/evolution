//les variables dont on a besoins

var sp,btn_start,btn_stop,t,h,mn,ms,s;

//fonction pour initialiser les variables quand la page se charge

window.onload=function(){
    sp =document.getElementsByTagName('span');
    btn_start=document.getElementById('start');
    btn_stop=document.getElementById('stop');
    t;
    ms=0, mn=0, s=0, h=0;
}

//mettre en place le compteur

function update_chrono(){
    ms+=1;
    if(ms==10){
        ms+=1;
        s+=1
    }
    if(s==60){
        s=0;
        mn+=1
    }
    if(mn==60){
        mn=0;
        h+=1
    }

    //insertion des valeurs dans le span [0] permet de selectionner le premier span [1]    le 2eme span etc...

sp[0].innerHTML = h+ "h" ;
sp[1].innerHTML = mn+ "mn" ;
sp[2].innerHTML = s+ "s" ;
sp[3].innerHTML = ms+ "ms" ;
}

//mettre en place la function du boutton start

function start(){
//cette ligne de code execute update_chrono toutes les 100ms
t =setInterval(update_chrono,100);
btn_start.disabled=true
}
//stopper le compteur

function stop(){
clearInterval(t);//suppression de l'intervalle t que nous avons creér
btn_start.disabled=false;
}

//initialiser les valeurs du compteur 

function reset(){
    clearInterval(t);
    btn_start.disabled=false;
    ms = 0, s = 0, mn = 0, h = 0 ;
    
    //inserer ses nouvelles valeurs dans le span
    sp[0].innerHTML = h+ "h" ;
    sp[1].innerHTML = mn+ "mn" ;
    sp[2].innerHTML = s+ "s" ;
    sp[3].innerHTML = ms+ "ms" ;
}