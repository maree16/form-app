alert("working");
let select = document.querySelector("#dropDownTitle");
let langArray = ["Alhaja","Alhaji", "Chief" ,"Dr." ,"Engr" ,"Mrs" ,"Mr","Ms","Other"];
let index = 1 ; 
for(let element of langArray)
{

   let opt = document.createElement("option");
   opt.value = index;
   opt.innerHTML = element; // whatever property it has

   select.appendChild(opt);
   index++;
}

// making state droplist dynamically 

let state = document.querySelector("#stateDropDown");
let stateArray = ["Punjab","Sindh", "Balochistan" ,"Khyber Pakhtunkhwa"];
let inx = 1 ; 
for(let element of stateArray)
{

   let opt = document.createElement("option");
   opt.value = inx;
   opt.innerHTML = element; // whatever property it has

   state.appendChild(opt);
   inx++;
}
