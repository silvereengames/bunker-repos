import { Gamepad2 } from "lucide-react"

const styles = {
  universal: {
    backgroundColor: '#292929',
    color: 'white',
    fontFamily: "'Roboto Mono', monospace",
  },
  title: {
    fontSize: '35px',
  },
  center: {
    textAlign: 'center',
  },
  objectsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: '0 -2.5px',
  },
  objectDiv: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    height: '300px',
    width: '200px',
    margin: '0 2.5px',
    borderRadius: '18px',
    transition: '0.3s',
    cursor: 'pointer',
  },
  objectImg: {
    width: '130px',
    height: '130px',
    borderRadius: '5px',
    marginTop: '5px',
  },
  objectTitle: {
    color: 'white',
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    backgroundColor: '#1a1a1a',
  },
  objectDescription: {
    fontSize: '11px',
    textAlign: 'center',
    backgroundColor: '#1a1a1a',
  },
  hr: {
    border: '2px white solid',
    marginLeft: '50px',
    marginRight: '50px',
    borderRadius: '5px',
  },
  link: {
    textDecoration: 'none',
  },
};

const gameslist = [
  {
    name: 'Tetris',
    description: 'Play the classic game of Tetris!',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Emacs_Tetris_vector_based_detail.svg/1200px-Emacs_Tetris_vector_based_detail.svg.png',
    url: 'https://tetris.com/play-tetris'
  },
]

const renderGames = gameslist.map((games) => {
  return (
    <a href={games.url} target="_blank" style={styles.link}>
    <div style={styles.objectDiv}>
    <img src={games.icon} alt={games.name} style={styles.objectImg} />
    <p style={styles.objectTitle}>{games.name}</p>
    <p style={styles.objectDescription}>{games.description}</p>
  </div>
</a>

  )}
)
const Example = {
  name: 'Games',
  id: 'games.bunker',
  description: "The official games plugin for Bunker.",
  icon: Gamepad2,


  tile() {
    return (
      <div>
        Play tons of uncensored games!<br /><br />
        <i style={{ fontSize: '15px' }}>Games BETA 0.1 (Dev)</i>
      </div>
    )
  },

  page() {
    return renderGames;
  }
}

export default Example
