//get values from the interface
function getValues(){
    //get values from the page
        let startValue = document.getElementById('startValue').value;
        let endValue = document.getElementById('endValue').value;
        let numbers = [];

        startValue = parseInt(startValue);
        endValue = parseInt(endValue);
        
        if(Number.isInteger(startValue) && Number.isInteger(endValue)){
             //call generate numbers
         let numbers =  generateNumbers(startValue,endValue);
          //call display numbers
         displayNumbers(numbers);
        }else{
            alert("You must enter an integer");
        }
           


   

}
//gererate numbers from start value to end value
function generateNumbers(start, end){
 let numbers = [];
    for(let i=start; i<=end; i++){
        numbers.push(i);
    }
    return numbers;
}

//display numbers and mark even numbers bold
function displayNumbers(numbers){
    let templateRows = "";
for (let index = 0; index < numbers.length; index++) {
    let number = numbers[index];
    if(number % 2 == 0){
        className="even";
    }else{
        className="odd";
    }
    templateRows += `<tr><td class="${className}">${number}</td></tr>`;   
    
}
    document.getElementById("results").innerHTML = templateRows;
}