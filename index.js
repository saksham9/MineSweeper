let column_size=9;
let row_size=9;
let grid=[];
let bomb=[];
let score=0;

const StartGame=()=>{
    let count=0;
    while(count<10){
        let random=String(Math.ceil(Math.random()*8))+String(Math.ceil(Math.random()*8));
        if(!bomb.includes(random)){
            count++;
            bomb.push(random);
        }
    }
    console.log(bomb);
    for(let i=0;i<column_size;i++){
        let arr=[];
        for(let j=0;j<row_size;j++){
            let a=String(i)+String(j);
            if(bomb.includes(a)){
                arr.push(-1);
            }
            else{
                arr.push(Math.ceil(Math.random()*9));
            }
        }
        grid.unshift(arr);
    }
    const butt=document.getElementById("start");
    butt.remove();
    console.log(grid);
    creategrid();
}
const creategrid=()=>{
    const grid_container=document.getElementById("grid");
    for(let i=0;i<column_size;i++){
        const row=document.createElement("div");
        row.classList.add("row");
        for(let j=0;j<row_size;j++){
            const cell=document.createElement("div");
            cell.classList.add("cell");
            cell.id=String(j)+String(i);
            row.appendChild(cell);
            cell.addEventListener("click",()=>handleclick(i,j));
        }
        grid_container.appendChild(row);
    }
}

const handleclick=(i,j)=>{
    const display_cell=document.getElementById(String(j)+String(i));
    //console.log(el.id);
    if(grid[j][i]===-1){
        for(let k=0;k<column_size;k++){
            for(let l=0;l<row_size;l++){
                const b=document.getElementById(String(l)+String(k));
                if(grid[l][k]===-1){
                    b.innerHTML="💣";
                    b.style.background="red";
                }
            }
        }
        const popup_score=document.getElementById("score-popup");
        popup_score.innerHTML=score;
        const popup=document.getElementById("popup-1");
        popup.classList.toggle("active");
        //alert("Game Over");
    }
    else{
        display_cell.style.background="white";
        display_cell.innerHTML=grid[j][i];
        score+=grid[j][i];
        UpdateScore();
    }
}
const UpdateScore=()=>{
    const display_score=document.getElementById("score");
    display_score.innerHTML=`Score: ${ score}`;
}