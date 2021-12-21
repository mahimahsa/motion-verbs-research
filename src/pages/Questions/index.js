import React, {useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";

function Questinos() {
    const [verbToShow, setVerbToShow]= useState()
    const location = useLocation();
    const userId = location.state?.params;
    const [id, setId]= useState(1)
    let x

    let verbs= [{id:1, type: 1, value: 'ایستادن'},
        {id:2, type: 1, value: 'خوردن'},
        {id:3, type: 2, value: 'درک کردن'},
        {id:4, type: 1, value: 'جنگیدن'},
        {id:5, type: 3, value: 'دست و پنجه نرم کردن'},
        {id:6, type: 2, value: 'غمگین شدن'},
    ]
    const [randomVerbs, setRandomVerbs]= useState([{}]);
    const createRandomArray= async ()=>{
        let randomVerbList= [{}]
        for (let i = 5; i>=0 ; i--) {
            let random= Math.floor(Math.random() * i)
            randomVerbList.push(verbs[random])
            verbs.splice( random, 1)
        }
        return randomVerbList
    }


    useEffect(()=>{
        createRandomArray().then((response)=>{
            console.log(response)
            setRandomVerbs(response)
        })
        console.log("createRandomArray ////////////////////")
        console.log( randomVerbs)
        showVerb()
        console.log("showVerb useEffect createRandomArray")
    },[])

    const showVerb= ()=>{
        if(randomVerbs.length>1)
        {

            x = setTimeout(() => {
                setVerbToShow(randomVerbs[1])
                setRandomVerbs(randomVerbs?.shift)
                console.log("show verb "+ JSON.stringify(randomVerbs))
            }, 5000)
        }
    }

    const saveValue=(e)=>{
        const request={
            participantId: 'aaaaa',
            verbId: verbToShow?.id,
            verbType: verbToShow?.type,
            verbValue: verbToShow.value,
            answer: e.target.value,
            answerDuration: 0.33
        }
       // console.log(request)
        clearTimeout(x)
    }
/*    useEffect(()=>{
        (randomVerbs?.length >0 && randomVerbs?.length< 6) &&
            console.log("shoeVerb useEffect")
        showVerb()
    },)*/



    return(
        <div style={{textAlign: 'center'}}>
            <h3>
                {randomVerbs.map((item , key)=>{
                    return (<div key={key}>{item.value}  {item.id}</div>)
                })}
            </h3>
            <br/>
            <br/>
            <br/>
            <br/>

        <h2>


           {/* <button onClick={(e)=> showVerb(e)}>شروع</button>*/}


                      <div id={verbToShow?.id}>{verbToShow?.value}</div>
            <div>
                <input type="radio" name="answer" value="a" onClick={saveValue}/><label>حرکتی</label>
                <input type="radio" name="answer" value="b" onClick={saveValue}/><label>انتضاعی</label>
            </div>



        </h2>
        </div>
    )
}
export default Questinos