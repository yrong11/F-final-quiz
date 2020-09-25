import React from "react"
// TODO 一般写 BrowserRouter as Router
// TODO 去掉冗余的引用 NavLink
import {Route, BrowserRouter, NavLink,Switch} from "react-router-dom";
import 'antd/dist/antd.css';
import "./App.scss"
import ShowInfo from '../src/component/showInfo/ShowInfo'
import CreateTrainee from '../src/component/create/CreateTrainee'
import CreateTrainer from '../src/component/create/CreateTrainer'


class App extends React.Component {
  render() {
    return <div className="App">
      <BrowserRouter>

          <Switch>
            <Route exact path="/" component={ShowInfo}></Route>
            <Route exact path="/create" component={CreateTrainee}></Route>
            <Route exact path="/trainer/create" component={CreateTrainer}></Route>
          </Switch>
        </BrowserRouter>
    </div>
  }
}

export default App;