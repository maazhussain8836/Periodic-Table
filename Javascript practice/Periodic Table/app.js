// axios.get('https://periodictableapiv1.herokuapp.com/')
const append1=()=>{
for(let i=0;i<=1;i++){
    const table=document.getElementById('tbl')
    const trow=document.getElementById('trow1')   
    const tdata=document.createElement('td')
    axios.get('https://periodictableapiv1.herokuapp.com/')
    .then((res)=>{
        const details=` ${res.data[i].number} ${res.data[i].symbol} ${res.data[i].name}`
        tdata.innerText=details  
        tdata.addEventListener('click',()=>{
        const div=document.getElementById('div_panel')
        const para =document.createElement('p') 
        para.innerText=details
        div.append(para)
        }) 
    })
    tdata.classList.add('tdataClass')
    trow.append(tdata)
    table.append(trow)

}
}

const append2=()=>{
    for(let i=2;i<=9;i++){
        const table=document.getElementById('tbl')
        const trow=document.getElementById('trow2')   
        const tdata=document.createElement('td')
        axios.get('https://periodictableapiv1.herokuapp.com/')
        .then((res)=>{
            const details=` ${res.data[i].number} ${res.data[i].symbol} ${res.data[i].name}`
            tdata.innerText=details  
            tdata.addEventListener('click',()=>{
            const div=document.getElementById('div_panel')
            const para =document.createElement('p') 
            para.innerText=details
            div.append(para)
            }) 
        })
        tdata.classList.add('tdataClass')
        trow.append(tdata)
        table.append(trow)

    }
    }


const append3=()=>{
    for(let i=10;i<=17;i++){
        const table=document.getElementById('tbl')
        const trow=document.getElementById('trow3')   
        const tdata=document.createElement('td')
        axios.get('https://periodictableapiv1.herokuapp.com/')
        .then((res)=>{
            const details=` ${res.data[i].number} ${res.data[i].symbol} ${res.data[i].name}`
            tdata.innerText=details  
            tdata.addEventListener('click',()=>{
            const div=document.getElementById('div_panel')
            const para =document.createElement('p') 
            para.innerText=details
            div.append(para)
            }) 
        })
        tdata.classList.add('tdataClass')
        trow.append(tdata)
        table.append(trow)

    }
    }


const append4=()=>{
    for(let i=18;i<=35;i++){
        const table=document.getElementById('tbl')
        const trow=document.getElementById('trow4')   
        const tdata=document.createElement('td')
        axios.get('https://periodictableapiv1.herokuapp.com/')
        .then((res)=>{
            const details=` ${res.data[i].number} ${res.data[i].symbol} ${res.data[i].name}`
            tdata.innerText=details  
            tdata.addEventListener('click',()=>{
            const div=document.getElementById('div_panel')
            const para =document.createElement('p') 
            para.innerText=details
            div.append(para)
            }) 
        })
        tdata.classList.add('tdataClass')
        trow.append(tdata)
        table.append(trow)

    }
    }


const append5=()=>{
    for(let i=36;i<=53;i++){
        const table=document.getElementById('tbl')
        const trow=document.getElementById('trow5')   
        const tdata=document.createElement('td')
        axios.get('https://periodictableapiv1.herokuapp.com/')
        .then((res)=>{
            const details=` ${res.data[i].number} ${res.data[i].symbol} ${res.data[i].name}`
            tdata.innerText=details  
            tdata.addEventListener('click',()=>{
            const div=document.getElementById('div_panel')
            const para =document.createElement('p') 
            para.innerText=details
            div.append(para)
            }) 
        })
        tdata.classList.add('tdataClass')
        trow.append(tdata)
        table.append(trow)

    }
    }


const append6=()=>{
    for(let i=54;i<=85;i++){
        const table=document.getElementById('tbl')
        const trow=document.getElementById('trow6')   
        const tdata=document.createElement('td')
        axios.get('https://periodictableapiv1.herokuapp.com/')
        .then((res)=>{
            const details=` ${res.data[i].number} ${res.data[i].symbol} ${res.data[i].name}`
            tdata.innerText=details  
            tdata.addEventListener('click',()=>{
            const div=document.getElementById('div_panel')
            const para =document.createElement('p') 
            para.innerText=details
            div.append(para)
            }) 
        })
        tdata.classList.add('tdataClass')
        trow.append(tdata)
        table.append(trow)

    }
    }


const append7=()=>{
    for(let i=86;i<=117;i++){
        const table=document.getElementById('tbl')
        const trow=document.getElementById('trow7')   
        const tdata=document.createElement('td')
        axios.get('https://periodictableapiv1.herokuapp.com/')
        .then((res)=>{
            const details=` ${res.data[i].number} ${res.data[i].symbol} ${res.data[i].name}`
            tdata.innerText=details  
            tdata.addEventListener('click',()=>{
            const div=document.getElementById('div_panel')
            const para =document.createElement('p') 
            para.innerText=details
            div.append(para)
            }) 
        })
        tdata.classList.add('tdataClass')
        trow.append(tdata)
        table.append(trow)

    }
    }


const runFunc=()=>{
    append1()
    append2()
    append3()
    append4()
    append5()
    append6()
    append7()


}

runFunc()

