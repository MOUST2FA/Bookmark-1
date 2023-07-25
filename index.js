
var brodname = document.getElementById('brodname')
var brodurl = document.getElementById('brodurl')

var brodactaryy=[]
if(localStorage.getItem('prodect')!=null){
brodactaryy=JSON.parse(localStorage.getItem('prodect')) 

displayadd()

}
function product(){

var brodactobject={
    name:brodname.value,
    url:brodurl.value,
}

if(check(brodname.value) && check1(brodurl.value)){
    brodactaryy.push(brodactobject)
Clear()
localStorage.setItem('prodect',JSON.stringify(brodactaryy))
displayadd()
}
else{
alert('Site Name or Url is not valid')
}


}

function displayadd(){
    var box=``
    for(var i=0;i<brodactaryy.length;i++){
        box +=`
        
        <tr>
        <td>${i}</td>
        <td>${brodactaryy[i].name}</td>
        <td>
        
        <a href="${brodactaryy[i].url}"><button class="btn btn-warning"><i class="fa-solid fa-eye pe-2"></i>Visit</button></a>
        </td>
        <td>
            <button onclick="Deleteitme(${i})" class="btn btn-primary"><i class="fa-solid fa-trash-can"></i> Delete</button>
        </td>
    </tr>
    
        
        `
    }
    document.getElementById('demo').innerHTML=box

}

function Clear(){
    brodname .value=""
    brodurl .value=""

}

function Deleteitme(index){
brodactaryy.splice(index,1)
localStorage.setItem('prodect',JSON.stringify(brodactaryy))
displayadd()

}

function check(str){
    var regex =/^[a-z A-Z]{3,}$/
    return regex.test(str)
}

function check1(str){
    var regex =/(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/
    return regex.test(str)
}

// function adda(url){
//     if(url !==''){
// window.location=url;
//     }
// }


