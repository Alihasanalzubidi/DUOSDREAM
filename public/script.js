let star = document.getElementById('star');
let moon = document.getElementById('moon');
let monthin1 = document.getElementById('monthin1');
let monthin2 = document.getElementById('monthin2');
let river1 = document.getElementById('river1');
let boat1 = document.getElementById('boat1');
let Duosdream = document.querySelector('.Duosdream');
let logo = document.querySelector('.logo');
window.onscroll = function()
{
    let value = scrollY;
    star.style.left = value +'px';
    moon.style.top = value * 3+'px';
    monthin1.style.top = value * 2+'px';
    monthin2.style.top = value * 1.5+'px';
    boat1.style.left = value * 3 +'px';
    Duosdream.style.fontSize = value +'px';
    if(scrollY >= 25){
        Duosdream.style.fontSize =  67 +'px';
        Duosdream.style.fontSize = 'fixed';
    }
    if(scrollY >= 140){
        document.querySelector('.min').style.background = 'linear-gradient(#021a2a,#0073bb)';
    }else{document.querySelector('.min').style.background = 'linear-gradient(#200016,#10001f)';

    }
    if(scrollY >=500){
        logo.style.display = 'none';
    }else{    logo.style.display = 'block';}
    if(scrollY >=1143){
        logo.style.display = 'none';
    }else{ logo.style.display = 'block';
}
}