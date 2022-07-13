let users=[]
let parentid=document.getElementById('parent-container')
let existsdivi=document.getElementById('exist')
document.getElementById('btn').addEventListener('click', show)
function show(){
    let num=document.getElementById('num').value
    let name=document.getElementById('name').value
    document.getElementById('num').value=''
    document.getElementById('name').value=''
    let user={}
    user.num=num
    user.name=name
    // users.push(user)
    // console.log(users)
    let enrollment=users.filter((user)=>{
        return user.num==num
    })
    if(enrollment.length==0){
        users.push(user)
        console.log(users)
        // users.map((user)=>{
            let containerdiv= document.createElement('div')
            let nameelement=document.createElement('h2')
            let numelement=document.createElement('h2')
            nameelement.innerHTML=user.name
            containerdiv.classList.add('container')
            numelement.innerHTML=user.num
            parentid.appendChild(containerdiv)
            containerdiv.appendChild(numelement)
            numelement.appendChild(nameelement)
        // })

    }
    else{
        setTimeout(()=>{
            console.log("user exists")
            let exists=document.createElement('p')
            exists.classList.add('exists')
            exists.innerHTML="User already exists"
            // parentid.appendChild(existsdivi)
            existsdivi.appendChild(exists)
        },3000)
    }
}