
const nums = [1,2,4,5];
/*
//Declarative Coding
const double = () =>{
    // const dblAry = []
    // for (let num of nums){
    //     dblAry.push(num*2)
    // }
    // return dblAry;

    const result =  nums.map(num=> num * 2 )
    return result;
}
console.log (double());
*/

//Find 
function findElm(recArr, searchElm){
   const result = recArr.find(elm=>{
        console.log(elm)
        if(elm===searchElm){
            return true;
        }
        // return elm === searchElm
    })

    return result;
}

console.log(findElm(nums, 5))