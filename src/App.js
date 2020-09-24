import React from "react"
import {Route, BrowserRouter, NavLink,Switch} from "react-router-dom";
import 'antd/dist/antd.css';
import "./App.scss"
import ShowInfo from '../src/component/showInfo/ShowInfo'
import CreateTrainee from '../src/component/create/CreateTrainee'

class App extends React.Component {
  render() {
    return <div className="App">
      <BrowserRouter>

          <Switch>
            <Route exact path="/" component={ShowInfo}></Route>
            <Route exact path="/create" component={CreateTrainee}></Route>

          </Switch>
        </BrowserRouter>
    </div>
  }
}

export default App;