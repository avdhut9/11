
import { useState } from 'react';
import Card from './Card';
const InputTags=()=>{
   const[Name,setName]=useState("")
   const[Height,setHeight]=useState(0)
   const[Weight,setWeight]=useState(0)
   const[PowerLevel,setpowerlevel]=useState(0)
   const[data,setdata]=useState([])
   const[show,setshow]=useState([])
  
 
   function name(e){
    setName(e.target.value)
   }
function height(e){
setHeight(e.target.value)
}
function weight(e){
setWeight(e.target.value)
}
function superr(e){
    setpowerlevel(e.target.value)
}
function handleadd(event){
    event.preventDefault()
    let obj={
        Name:Name,
        Height:Height,
        Weight:Weight,
        PowerLevel:PowerLevel,
 }
 setdata([...data,obj])
 setshow([...show,obj])
}

function most(){
    let max=0
    let ans;
    
   for(let i=0;i<=data.length-1;i++){
    if(data[i].PowerLevel>max){
        max=data[i].PowerLevel
        ans=data[i]
    }
   }

  setdata([ans])
   
}
function show1(){
    setdata(show)
 
}
console.log(data)
console.log(show)

    return(
        <>
        <form>
            <input onChange={name} placeholder='Enter Superhero Name' data-testid="input-name" type="text"/>
            <input onChange={height} data-testid="input-height" type="text"/>
            <input onChange={weight} data-testid="input-weight" type="text"/>
            <input onChange={superr} data-testid="input-power" type="text"/> 
            <button disabled={Name==""||Height==0||Weight==0||PowerLevel==0} onClick={handleadd} data-testid="add-button">Add SuperHero</button>
        </form>
        <button onClick={most} data-testid="most-powerfull">Most Powerful Superhero</button>
        <button onClick={show1} data-testid="all-superheroes">Show All</button>
        <Card data={data}/>
        </>
    )
}

export default InputTags;
