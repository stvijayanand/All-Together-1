import React from "react"
import PropTypes from "prop-types"

const Player = props => {
    const { username, games } = props;

    return (
    <li>{username} has played {games} games.</li>
    );
}

Player.propTypes = {
    username: PropTypes.string.isRequired,
    games: PropTypes.string.isRequired
}

export default Player