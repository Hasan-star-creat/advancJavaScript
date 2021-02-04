
//  function valuSqure(data){
//     const square = [];
//     for(let i=0; i<data.length; i++){
//         const element = data[i];
//         const result = element * element ;
//         square.push(result);
//     }
//    return square;
//  }
//  const data = [3,5,6,2,9,10];
//   const result = valuSqure(data);
//   console.log(result);

 // maping system 
 const numbers = [3,5,6,2,9,10];
//    function  square(element) {
//         return element * element;  
//    }
//    let result = numbers.map(square);
//       console.log(result);
//              
      numbers.map(function(element){
           console.log(element * element);
      })
     const res = numbers.map(num => num * num);
     console.log(res);
  
//  const rest = arra.map(function(num){
//         return num * num ;
//  })
//  const result = arra.map(x => x * x);
// const res = arra.map((num)=>num * num) ;
     
