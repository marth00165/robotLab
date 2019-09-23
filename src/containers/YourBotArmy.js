import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    let botArmy = this.props.botArmy
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {
              this.props.botArmy.map( bot => <BotCard handleClick = {this.props.handleClick} key={bot.id} bot={bot} />)
            }
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
