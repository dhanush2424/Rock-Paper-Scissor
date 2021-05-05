function check(playerSelection,computerSelection) {
    if (playerSelection=='rock' && computerSelection=='paper') return [1,0,'you lose! '+computerSelection+' beats '+playerSelection];
    else if (playerSelection=='rock' && computerSelection=='scissor') return [0,1,'you won! '+playerSelection+' beats '+computerSelection];
    else if (playerSelection=='paper' && computerSelection=='rock') return [0,1,'you won! '+playerSelection+' beats '+computerSelection];
    else if (playerSelection=='paper' && computerSelection=='scissor') return [1,0,'you lose! '+computerSelection+' beats '+playerSelection];
    else if (playerSelection=='scissor' && computerSelection=='rock') return [1,0,'you lose! '+computerSelection+' beats '+playerSelection];
    else if (playerSelection=='scissor' && computerSelection=='paper') return [0,1,'you won! '+playerSelection+' beats '+computerSelection];
    else return [0,0,'Tie'];
}
let arr=['rock','paper','scissor'];
i=5;w=0;l=0;
while(i--){
    let b=prompt('Enter rock/paper/scissor');
    let a=Math.floor(Math.random()*3)+1;
    x=check(b,arr[a-1]);
    l+=x[0];
    w+=x[1];
    console.log(x[2]);
}
if (l==w) {
    console.log('Tie');
    alert('Tie');
}
else if (l>w){
    console.log('Sorry you lose the game');
    alert('Sorry you lose the game better luck next time');
}
else {
    console.log('Congrats you won the game');
    alert('Congrats you won the game');
}