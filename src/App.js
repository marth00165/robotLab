import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots"


class App extends Component {


    state = {
      allBots: [],
      botArmy: [],
      search: ""

    }



  componentDidMount = () => {
    fetch(API)
    .then(res => res.json())
    .then(botData => this.renderBots(botData))
  }


  renderBots = (botData) => {
    let allBots = botData
      this.setState({
        allBots: allBots
      })
  }

  handleClick = (bot) => {
      let army = this.state.botArmy
      if (!army.includes(bot)){
        this.setState({
          botArmy:[...this.state.botArmy, bot]
        })
      }
      else {
        let botArr = army.filter(badBot => badBot.id !== bot.id )
        console.log(botArr)
        this.setState({
          botArmy: [...botArr]
        })
      }

       // console.log(this.state.botArmy)
    }

    handleChange = (e) => {

      console.log(e.target.value)
      this.setState({
        search: e.target.value
      })

    }



  render() {
    return (
      <div className="App">
        <BotsPage handleChange= {this.handleChange}  search = {this.state.search} handleClick={this.handleClick} allBots = {this.state.allBots} botArmy = {this.state.botArmy} />
      </div>
    );
  }
}

export default App;
