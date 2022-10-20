import Player from './componenets/Player';
import { useEffect, useState } from 'react';
import "./App.css";

function App() {

  const [tracks]  = useState([
    {
      title: " Three Little Birds",
      artist: " Bob Marley",
      time: "3:00",
      img_src: "../public/images/bob marley three-little-birds.jpg",
      src: "./music/Bob_Marley_The_Wailers_Three_Little_Birds.mp3"
    },

    {
      title: " Gain The World",
      artist: " Jahmil",
      time: "2:54",
      img_src: "./images/gain-the-world.jpg",
      src: "./music/song2.mp3"

    },

    {
      title: " Strongest Soldier",
      artist: " Jahmil",
      time: "2:06",
      img_src: " ./images/strongest-soldier.jpg",
      src: "./music/song3.mp3"
  
    },
    {
      title: " They Don't Know",
      artist: " Masicka",
      time: "2:55",
      img_src: " ./images/masicka.webp",
      src: "./music/masicka.mp3"
  
    },
    {
      title: " Rush",
      artist: " Arya Starr",
      time: "3:06",
      img_src: " ./images/rush.jpg",
      src: "./music/arya-starr.mp3"
  
    },
    {
      title: " Simpel Blessings",
      artist: " Tarus Riley feat Konshens",
      time: "2:57",
      img_src: " ./images/simple-blessings.jpg",
      src: "./music/simplest.mp3"
  
    },
    {
      title: " Soulless",
      artist: " Revel Day",
      time: "3:33",
      img_src: " ./images/soulless.jpg",
      src: "./music/soulless.mp3"
  
    },
    {
      title: " Toast",
      artist: " Koffee",
      time: "2:54",
      img_src: " ./images/toast.jpg",
      src: "./music/toast.mp3"
  
    },
    {
      title: " Better Kind Of Bitter",
      artist: " Jobii",
      time: "3:15",
      img_src: " ./images/better-kind.jpg",
      src: "./music/jobii.mp3"
  
    },
    {
      title: " Why Couldn't We Keep That",
      artist: " Taynte",
      time: "3:06",
      img_src: " ./images/taynte.png",
      src: "./music/taynte.mp3"
  
    },
    {
      title: " Happy Without You",
      artist: " Wildson",
      time: "3:29",
      img_src: " ./images/wildson.jpg",
      src: "./music/wildson.mp3"
  
    },
    {
      title: " Ballin",
      artist: " Roddy Rich",
      time: "3:13",
      img_src: " ./images/ballin.jpg",
      src: "./music/ballin.mp3"
  
    },
    {
      title: " No Role Modelz",
      artist: " J-Cole",
      time: "4:53",
      img_src: " ./images/no-role-models.png",
      src: "./music/norole-models.mp3"
  
    },
    {
      title: " Down Below",
      artist: " Roddy Rich",
      time: "3:44",
      img_src: " ./images/down-below.jpg",
      src: "./music/down-below.mp3"
  
    },
    {
      title: " Rockstar",
      artist: " Dababy feat Roddy Rich",
      time: "3:29",
      img_src: " ./images/baby-rockstar.jpg",
      src: "./music/dababy-rockstar.mp3"
  
    },
    {
      title: " Sober Thoughts",
      artist: " Xavy Rusan",
      time: "2:42",
      img_src: " ./images/sober-thoughts.jpg",
      src: "./music/sober-thoughts.mp3"
  
    },
    {
      title: " Blessings",
      artist: " Angel",
      time: "3:09",
      img_src: " ./images/angel-blessings.jpg",
      src: "./music/angel-blessings.mp3"
  
    },
    {
      title: " Cassanova",
      artist: " Levert",
      time: "6:10",
      img_src: " ./images/cassanova.jpg",
      src: "./music/levert-cassanova.mp3"
  
    },
    {
      title: " Hold You",
      artist: " Gyptian",
      time: "3:53",
      img_src: " ./images/hold-you.jpg",
      src: "./music/hold-you.mp3"
  
    },
    {
      title: " Stand By Me",
      artist: " Ben E King",
      time: "2:55",
      img_src: " ./images/stand-by-me.jpg",
      src: "./music/ben-e-king.mp3"
  
    },
    {
      title: " We Pray",
      artist: " Dre Island feat Popcan",
      time: "4:06",
      img_src: " ./images/we-pray.jpg",
      src: "./music/we-pray.mp3"
  
    },
    {
      title: " Freaky Friday",
      artist: " Lill Dicky feat Chris Brown",
      time: "3:36",
      img_src: " ./images/freaky-friday.jpg",
      src: "./music/freakyfriday.mp3"
  
    },
    {
      title: " Cold Little Heart",
      artist: " Michael Kiwanuka",
      time: "3:30",
      img_src: " ./images/cold-heart.jpg",
      src: "./music/cold-heart.mp3"
  
    },
    {
      title: " Mad",
      artist: " Ne-Yo",
      time: "4:14",
      img_src: " ./images/mad-ne-yo.jpg",
      src: "./music/mad.mp3"
  
    },
    {
      title: " Smooth Criminal",
      artist: " Michael Jackson",
      time: "4:18",
      img_src: " ./images/smooth-criminal.jpg",
      src: "./music/smooth-criminal.mp3"
  
    },
    {
      title: " My Girl",
      artist: " The Temptations",
      time: "2:55",
      img_src: " ./images/my-girl.jpg",
      src: "./music/my-girl.mp3"
  
    },
    
    
    
  ])

 


  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if(currentSongIndex + 1 > tracks.length - 1) {
        return 0;
      }else{
        return currentSongIndex + 1;
      } 
    });
  }, [currentSongIndex]);

  return (
    <div className='wrapper'>
      <nav className='header'>
      <p>Music Is Life</p>
      <p>SoloDev</p>
      </nav>
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        tracks={tracks}
      />
     </div>
    </div>
  );
}

export default App;
