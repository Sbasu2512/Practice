let chores = ['wash dishes','do laundry','take out trash'];
console.log(chores);
chores[0] = 'do grocery';
console.log(chores);
let x = chores.length ;
console.log(x);
for(let i=0; i<chores.length; i++){
    console.log(chores[i]);
}
console.log(chores[1]);
chores[3] = 'wash dishes';
chores.push('wash car','cook');
let x = chores.pop();
console.log(x);
console.log(chores);
console.log(chores[0].length);

  

