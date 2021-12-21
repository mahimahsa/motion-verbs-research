import React from 'react'
import {Link} from 'react-router-dom'

function Intro() {

    return(
        <div>
        <h1>
            <span>
                از اینکه که ما را در انجام این تحقیق همیاری میکنید متشکریم
            </span>
        </h1>
            <Link  to='/participant-info'>ادامه</Link>
        </div>

    )
}
export default Intro