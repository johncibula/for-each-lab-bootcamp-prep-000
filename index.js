function iterativeLog(array){
  array.forEach((element,index) =>{
    console.log(`${index}: ${element}`)
  })
}
function iterate(callback){
  thisArray=[1,2,3,4,5]
  thisArray.forEach(callback)
  return thisArray;
}
function doToArray(array, callback) {
  array.forEach(callback)
}
