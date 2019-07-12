import React from 'react'
import './App.sass'

import TitleNavBar from './components/Nav/TitleNavBar'
import BoarderHeaderNav from './components/Nav/BoarderHeaderNav'
import ActivityList from './components/CardList/ActivityList'

function App() {
  return (
    <div>
       <TitleNavBar/>
       <BoarderHeaderNav/>
       <ActivityList />
    </div>
  )
}

export default App;
