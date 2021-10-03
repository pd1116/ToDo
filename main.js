

/* Get all the required fields */

const Input=document.querySelector(".input-text");
const AddBtn=document.querySelector(".btn");
const TODo=document.querySelector(".TODOList");
const delBtn=document.querySelector(".Clear");

Input.onkeyup=()=>{
    let userdata=Input.value;
    if(userdata.trim()!=0)
    {
        AddBtn.classList.add("active");
    }
    else{
        AddBtn.classList.remove("active");
    }
}
ShowItems();
/* If user adds the item */
AddBtn.onclick = ()=>{
     let userdata=Input.value;
    // console.log(userdata);
    let getLocalStorage = localStorage.getItem("New TODO");
    if(getLocalStorage==null){
        listArr=[];
    }
    else{
        listArr=JSON.parse(getLocalStorage);
    }
    listArr.push(userdata);
    localStorage.setItem("New TODO",JSON.stringify(listArr));
    ShowItems();
}
/* Add Items in ul */
function ShowItems() {
    let getLocalStorage = localStorage.getItem("New TODO");
     if(getLocalStorage==null){
        listArr=[];
    }
    else{
        listArr=JSON.parse(getLocalStorage);
    }
    const pendingNum=document.querySelector(".pending");
    pendingNum.textContent=listArr.length;
    if (listArr.length>0) {
        delBtn.classList.add("active");
    }else{
         delBtn.classList.remove("active");
    }
    let newLitag='';
    listArr.forEach((element,index)=>{
        newLitag+=` <li>
                    ${element}
                    <button onclick="DeleteItem(${index})";><i class="fas fa-trash-alt"></i></button>
                </li>`
    });
    TODo.innerHTML =newLitag;
    Input.value='';
}

/*  Delete Item */
function DeleteItem(index) {
    let getLocalStorage = localStorage.getItem("New TODO");
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index,1);// delete a particular indxed li
    // after deleting update the localstorage
    localStorage.setItem("New TODO",JSON.stringify(listArr));
    ShowItems();
}
/* Clear All Both Function works */


/* function ClearAll() {
    let getLocalStorage = localStorage.getItem("New TODO");
    listArr=JSON.parse(getLocalStorage);
    const pendingNum=document.querySelector(".pending");
    pendingNum.textContent=listArr.length;
    listArr.splice(pendingNum);// delete a particular indxed li
    localStorage.setItem("New TODO",JSON.stringify(listArr));
    ShowItems();
} */
/* Clear All  */
function ClearAll() {
    listArr=[];
    localStorage.setItem("New TODO",JSON.stringify(listArr));
    ShowItems();
}