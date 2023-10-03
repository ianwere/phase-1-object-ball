function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  console.log(gameObject());
  //return home team
  function homeTeamName() {
    return gameObject()['home']['teamName'];
  }
  //return away team
  function awayTeamName() {
    return gameObject()['away']['teamName'];
  }
  //Takes a team name as an argument and returns an array of the team's colors.
  function teamColors(teamName) {
    const gameObj = gameObject();
    if (teamName === gameObj['home']['teamName']) {
      return gameObj['home']['colors'];
    } else if (teamName === gameObj['away']['teamName']) {
      return gameObj['away']['colors'];
    } else {
      return "Team not found";
    }
  }
  //Takes a team name as an argument and returns an object containing the players and their stats for that team.
  function teamPlayers(teamName) {
    const gameObj = gameObject();
    if (teamName === gameObj['home']['teamName']) {
      return gameObj['home']['players'];
    } else if (teamName === gameObj['away']['teamName']) {
      return gameObj['away']['players'];
    } else {
      return "Team not found";
    }
  }
  //Takes a player's name as an argument and returns an object containing the player's stats.
  function playerStats(playerName) {
    const teams = Object.values(gameObject());
    for (const team of teams) {
      if (playerName in team.players) {
        return team.players[playerName];
      }
    }
    return "Player not found";
  }
  
  console.log(homeTeamName()); // Logs "Brooklyn Nets"
  console.log(awayTeamName()); // Logs "Charlotte Hornets"
  console.log(teamColors("Brooklyn Nets")); // Logs ["Black", "White"]
  console.log(teamPlayers("Charlotte Hornets")); // Logs an object with player names and stats for the away team
  console.log(playerStats("Ben Gordon")); // Logs an object with Ben Gordon's stats
  //This function takes a player's name as an argument and returns the number of points scored for that player.
  function numPointsScored(playerName) {
    const players = Object.values(gameObject().home.players).concat(Object.values(gameObject().away.players));
    for (const player of players) {
      if (playerName === Object.keys(player)[0]) {
        return player.points;
      }
    }
    return "Player not found";
  }
  //This function takes a player's name as an argument and returns the shoe size for that player.
  function shoeSize(playerName) {
    const players = Object.values(gameObject().home.players).concat(Object.values(gameObject().away.players));
    for (const player of players) {
      if (playerName === Object.keys(player)[0]) {
        return player.shoe;
      }
    }
    return "Player not found";
  }
  //This function takes a team name as an argument and returns an array of that team's colors.
  function teamColors(teamName) {
    if (teamName === gameObject().home.teamName) {
      return gameObject().home.colors;
    } else if (teamName === gameObject().away.teamName) {
      return gameObject().away.colors;
    } else {
      return "Team not found";
    }
  }
  //This function operates on the game object to return an array of the team names.
  function teamNames() {
    return [gameObject().home.teamName, gameObject().away.teamName];
  }
  //This function takes a team name as an argument and returns an array of the jersey numbers for that team.
  function playerNumbers(teamName) {
    const teamPlayers = teamName === gameObject().home.teamName ? gameObject().home.players : gameObject().away.players;
    return Object.values(teamPlayers).map(player => player.number);
  }
  //This function takes a player's name as an argument and returns an object of that player's stats.
  function playerStats(playerName) {
    const players = Object.values(gameObject().home.players).concat(Object.values(gameObject().away.players));
    for (const player of players) {
      if (playerName === Object.keys(player)[0]) {
        return player;
      }
    }
    return "Player not found";
  }
  //This function will return the number of rebounds associated with the player that has the largest shoe size.
  function bigShoeRebounds() {
    const players = Object.values(gameObject().home.players).concat(Object.values(gameObject().away.players));
    let playerWithLargestShoe = players[0];
    for (const player of players) {
      if (player.shoe > playerWithLargestShoe.shoe) {
        playerWithLargestShoe = player;
      }
    }
    return playerWithLargestShoe.rebounds;
  }
  //This function returns the player who has scored the most points.
  function mostPointsScored() {
    const players = Object.values(gameObject().home.players).concat(Object.values(gameObject().away.players));
    let highestScorer = players[0];
    for (const player of players) {
      if (player.points > highestScorer.points) {
        highestScorer = player;
      }
    }
    return Object.keys(highestScorer)[0];
  }
  //This function returns the name of the team with the most points.
  function winningTeam() {
    const homePoints = Object.values(gameObject().home.players).reduce((total, player) => total + player.points, 0);
    const awayPoints = Object.values(gameObject().away.players).reduce((total, player) => total + player.points, 0);
    return homePoints > awayPoints ? gameObject().home.teamName : gameObject().away.teamName;
  }
  //This function returns the player with the longest name.
  function playerWithLongestName() {
    const players = Object.values(gameObject().home.players).concat(Object.values(gameObject().away.players));
    let longestNamePlayer = players[0];
    for (const player of players) {
      if (Object.keys(player)[0].length > Object.keys(longestNamePlayer)[0].length) {
        longestNamePlayer = player;
      }
    }
    return Object.keys(longestNamePlayer)[0];
  }
  //    This function returns true if the player with the longest name had the most steals.
  
  function doesLongNameStealATon() {
    const players = Object.values(gameObject().home.players).concat(Object.values(gameObject().away.players));
    let longestNamePlayer = players[0];
    for (const player of players) {
      if (Object.keys(player)[0].length > Object.keys(longestNamePlayer)[0].length) {
        longestNamePlayer = player;
      }
    }
  
    let mostStealsPlayer = players[0];
    for (const player of players) {
      if (player.steals > mostStealsPlayer.steals) {
        mostStealsPlayer = player;
      }
    }
  
    return Object.keys(longestNamePlayer)[0] === Object.keys(mostStealsPlayer)[0];
  }