//Here we check name if it's multiple times we count only one time.
// we also check the time complexity and space of the function.

function checkName(name) {
    let uniqueName = [];
    for (let i = 0; i < name.length; i++) {
        if (!uniqueName.includes(name[i])) {
             uniqueName.push(name[i]);
        }        
    }
    return uniqueName;
}

let nameArr = [ "Ashadul","Topu", "Obidul", "Naidul", "saidul", "Topu", "Obidul", "ashadul" ]
console.log(checkName(nameArr));

// in this code time complexity is O(n2) and space complexity is O(n)
// first time the loop take time then the if condition take time.