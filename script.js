const themeswitch = document.getElementById('themeswitch');  

const storetheme=localStorage.getItem('theme');
if(themeswitch=='light'){
    document.documentElement.style.setProperty('--keypad-bg-color', '#C8CFA0');
    document.documentElement.style.setProperty('--bg-color', '#d3630e');
    document.documentElement.style.setProperty('--text-color', '#FCDC94');
    document.documentElement.style.setProperty('--keypad-bg-color2', '#78ABA8');
    themeswitch.checked=true;
}
else{
    document.documentElement.style.setProperty('--keypad-bg-color', ' #9B3922');
    document.documentElement.style.setProperty('--bg-color', '#F2613F')
    document.documentElement.style.setProperty('--text-color', '#481E14')
    document.documentElement.style.setProperty('--keypad-bg-color2', '#0C0C0C')

}
themeswitch.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.style.setProperty('--keypad-bg-color', '#C8CFA0');
        document.documentElement.style.setProperty('--bg-color', '#d3630e');
        document.documentElement.style.setProperty('--text-color', '#FCDC94');
        document.documentElement.style.setProperty('--keypad-bg-color2', '#78ABA8');
        localStorage.setItem('theme','light')
    }
    else{
        document.documentElement.style.setProperty('--keypad-bg-color', ' #9B3922');
        document.documentElement.style.setProperty('--bg-color', '#F2613F')
        document.documentElement.style.setProperty('--text-color', '#481E14')
        document.documentElement.style.setProperty('--keypad-bg-color2', '#0C0C0C')
        localStorage.setItem('theme','dark')
    }  
})

let result =document.getElementById('result');
function append(value){
    result.value+=value;
    playbutton();
}
function backspace(){
    result.value=result.value.slice(0,-1);  
    playbutton();
}
function clearbutton(){
    result.value='';
    playbutton();
}
function calculate(){
    playbutton();
    try{
        if(result.value==''){
            result.value='0';
        }
        result.value = eval(result.value)
    }
    catch(e){
       result.value ='error';
    }
}

function playbutton(){
 const buttonsound= document.getElementById('buttonsound');
 buttonsound.currentTime=0;
 buttonsound.play();
}
