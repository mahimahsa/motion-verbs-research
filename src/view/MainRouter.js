import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Intro from 'src/pages/Intro'
import ParticipantInfo from 'src/pages/ParticipantInfo'
import Questions from 'src/pages/Questions'


export const MainRouter = () => {

    return(
        <Switch>
            <Route exact path='/' component={Intro}/>
            <Route path='/intro' component={Intro}/>
            <Route path='/participant-info' component={ParticipantInfo}/>
            <Route path='/questions' component={Questions}/>
        </Switch>
    )
}
