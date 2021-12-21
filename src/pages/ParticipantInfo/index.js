import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {  collection, addDoc} from "firebase/firestore";
import {db} from '../../firebase/firebase'

function Intro() {

    const history= useHistory();
    const [firstName, setFirstName]= useState()
    const [lastName, setLastName]= useState()
    const [age, setAge]= useState()
    const [education, setEducation]= useState()
    const [userId, setUserId]= useState()

    const addParticipant= async (user)=>{
        try{
            const addedUser= await addDoc(collection(db, 'participant_info'), user )
            console.log(addedUser.id)
            history.push('/questions' ,{params:addedUser.id} ,{ update: true })
        }catch (e) {
            console.error(("Error Adding Document: ", e))
        }
    }

    const handleSubmit= ()=>{
        console.log('handleSubmit')
        const user={
            first_name: firstName,
            last_name: lastName,
            age: age,
            education: education
        }
        
        addParticipant(user)

        
    }



    return(

        <div>
            <div className='mahsa-row '>
                <div className='col-dm-7 col-t-8 col-tm-12 col-m-15'>
                    <div className='mahsa-row no-padding-row'>
                        <div className='column'>
                            <label > نام: </label>
                        </div>
                        <div className='column'>
                            <input
                                type='text'
                                name='FirstName'
                                value={firstName}
                                onChange={(e)=>setFirstName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-dm-7 col-t-8 col-tm-12 col-m-15'>
                    <div className='mahsa-row no-padding-row'>
                        <div className='column'>
                            <label > نام خانوادگی: </label>
                        </div>
                        <div className='column'>
                            <input
                                type='text'
                                name='LastName'
                                value={lastName}
                                onChange={(e)=>setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mahsa-row '>
                <div className='col-dm-7 col-t-8 col-tm-12 col-m-15'>
                    <div className='mahsa-row no-padding-row'>
                        <div className='column'>
                            <label > سن: </label>
                        </div>
                        <div className='column'>
                            <input
                                type='number'
                                name='FirstName'
                                value={age}
                                onChange={(e)=>setAge(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='col-dm-7 col-t-8 col-tm-12 col-m-15'>
                    <div className='mahsa-row no-padding-row'>
                        <div className='column'>
                            <label > تحصیلات: </label>
                        </div>
                        <div className='column'>
                            <input
                                type='text'
                                name='Education'
                                value={education}
                                onChange={(e)=>setEducation(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            </div>


            <button onClick={()=>handleSubmit()}>submit</button>
            {/*<Link to={`/questions:${userId}`} onClick={()=>handleSubmit()}>

                تایید
            </Link>*/}
        </div>
    )
}
export default Intro