import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {




  render(){
    let allBots = this.props.allBots
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {allBots.map(bot => <BotCard handleClick = {this.props.handleClick} key={bot.id} bot={bot}/> )}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
