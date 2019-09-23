import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'


class BotsPage extends React.Component {


  state = {

    displayAllBots: true,
    bot: "",
    allBots: this.props.allBots

  }

  displaySpecs = (bot) => {


    this.state.displayAllBots ? this.setState({
      bot: bot,
      displayAllBots: false
    }) : this.setState({
      displayAllBots: true
    })
  }









  render() {
    let allBots = this.props.allBots.filter((bot) => {
    return bot.name.indexOf(this.props.search) != -1;
    })
    return (
      <div>
        <input onChange = {this.props.handleChange} placeholder= "enter bot name"/>
        <YourBotArmy handleClick = {this.props.handleClick} botArmy = {this.props.botArmy}/>
        {

          !this.state.displayAllBots ?

        <BotSpecs displaySpecs = {this.displaySpecs} handleClick= {this.props.handleClick} bot = {this.state.bot} /> :

        <BotCollection handleClick = {this.displaySpecs} allBots = {allBots} />
      }

      </div>
    );
  }

}

export default BotsPage;
