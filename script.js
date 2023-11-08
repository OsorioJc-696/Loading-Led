function col(){
    for (let i=1; i<=9; i++){
        let r = rand(266);
        let g = rand(266);
        let b = rand(266);
        let id = 'l' + i;
        
        document.getElementById(id).style.textShadow =
        `1px 1px 10px rgb(${r}, ${g}, ${b}),
        1px 1px 20px rgb(${r}, ${g}, ${b}),
        1px 1px 30px rgb(${r}, ${g}, ${b}),
        1px 1px 40px rgb(${r}, ${g}, ${b}),
        1px 1px 60px rgb(${r}, ${g}, ${b})
        `  
    }
}
setInterval(col, 5000);
function rand(x){
   let z = Math.floor(Math.random() * x);
    return z;
}   