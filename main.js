// function switchItUp(number){
//   //Create an array of numbers as they would be spelled out
//   const numArray = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
//       //Return the corresponsing string of the number being input as an argument
//       return numArray[number] || "Invalid number";
// }

function switchItUp(number) {
  //Setup a switch statement that corresponds the arguement number with the matching string
  switch (number) {
      case 0:
        return "Zero";
      case 1:
        return "One";
      case 2:
       return "Two";
      case 3: 
        return "Three";
      case 4:
        return "Four";
      case 5:
       return "Five";
      case 6:
        return "Six";
      case 7:
       return "Seven";
      case 8:
       return "Eight";
      case 9:
       return "Nine";
      case 10:
       return "Ten";
      default:
       return "Invalid input";
  }
}