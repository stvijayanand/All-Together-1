import React, {Component} from "react"
import Player from "./Player";
import PropTypes from "prop-types"

class PlayersList extends Component{

    static propTypes = {
        users: PropTypes.array.isRequired
    }

    state = {
        isShowGames: true
    }

    showHideGamesHandler = () => {
        this.setState((currentState) => ({
            isShowGames: !currentState.isShowGames
          }));
    }

    render() {
        const {users} = this.props;
        const {isShowGames} = this.state;

        const [hideText, showText] = ['Hide the Number of Games Played', 'Show the Number of Games Played'];
        const actionButtonText = (isShowGames) ? hideText: showText;
        const starredGames = '\*';
        

        return(
            <div>
                <ul>
                    {users.map(user => {
                        const games = (isShowGames) ? user.games.toString() : starredGames;
                        return (<Player 
                            key={user.username}
                            username={user.username}
                            games={games}></Player>);
                    }
                    )}
                </ul>
                <button className="ActionButton"
                    onClick={this.showHideGamesHandler}>{actionButtonText}</button>
            </div>
        );
    }
}

export default PlayersList