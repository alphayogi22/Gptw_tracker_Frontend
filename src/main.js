import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Attendance from './components/attendance/attendance';
import Task from './components/task/task';

const Main = () =>(
<main>
    <Switch>
         <Route exact path='/' component={Attendance}/>
         <Route exact path='/task' component={Task}/>
    </Switch>
</main>
)

export default Main;