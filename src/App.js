import Player from './componenets/Player';
import { useEffect, useState } from 'react';
import "./App.css";

function App() {

  const [tracks]  = useState([
    {
      title: " Three Little Birds",
      artist: " Bob Marley",
      time: "3:00",
      img_src: "./images/bob marley three-little-birds.jpg",
      src: "./music/Bob_Marley_The_Wailers_Three_Little_Birds.mp3"
    },

    {
      title: " Gain The World",
      artist: " Jahmil",
      time: "2:54",
      img_src: "./images/jahmil-gain-the-world.jpg",
      src: "./music/Jahmiel_Gain_The_World.mp3"

    },

    {
      title: " Strongest Soldier",
      artist: " Jahmil",
      time: "2:06",
      img_src: " ./images/jahmil-strongest-soldier.jpg",
      src: "./music/Jahmiel_The_Strongest_Soldier.mp3"
  
    },
    {
      title: " They Don't Know",
      artist: " Masicka",
      time: "2:55",
      img_src: " ./images/masicka.webp",
      src: "./music/Masicka_They_Don_t_Know.mp3"
  
    },
    {
      title: " Rush",
      artist: " Arya Starr",
      time: "3:06",
      img_src: " ./images/arya-starr-rush.jpg",
      src: "./music/Ayra_Starr_Rush_Lyrics_.mp3"
  
    },
    {
      title: " Simpel Blessings",
      artist: " Tarus Riley feat Konshens",
      time: "2:57",
      img_src: " ./images/simple blessings.jpg",
      src: "./music/Tarrus_Riley_Simple_Blessings.mp3"
  
    },
    {
      title: " Soulless",
      artist: " Revel Day",
      time: "3:33",
      img_src: " ./images/soulless.jpg",
      src: "./music/Revel_Day_feat_R_A_D_Soulless.mp3"
  
    },
    {
      title: " Toast",
      artist: " Koffee",
      time: "2:54",
      img_src: " ./images/toast.jpg",
      src: "./music/Koffee_Toast.mp3"
  
    },
    {
      title: " Better Kind Of Bitter",
      artist: " Jobii",
      time: "3:15",
      img_src: " ./images/better kind.jpg",
      src: "./music/Jobii_Better_Kind_of_Bitter.mp3"
  
    },
    {
      title: " Why Couldn't We Keep That",
      artist: " Taynte",
      time: "3:06",
      img_src: " ./images/why couldnt we keep it together.png",
      src: "./music/Taynte_Why_Couldn_t_We_Keep_That.mp3"
  
    },
    {
      title: " Happy Without You",
      artist: " Wildson",
      time: "3:29",
      img_src: " ./images/happy without you.jpg",
      src: "./music/Wildson_Happy_Without_You.mp3"
  
    },
    {
      title: " Ballin",
      artist: " Roddy Rich",
      time: "3:13",
      img_src: " ./images/ballin.jpg",
      src: "./music/Mustard_Ballin_ft_Roddy_Ricch.mp3"
  
    },
    {
      title: " No Role Modelz",
      artist: " J-Cole",
      time: "4:53",
      img_src: " ./images/no-role-models.png",
      src: "./music/J_Cole_No_Role_Modelz_Explicit_.mp3"
  
    },
    {
      title: " Down Below",
      artist: " Roddy Rich",
      time: "3:44",
      img_src: " ./images/down-below.jpg",
      src: "./music/Roddy_Ricch_Down_Below.mp3"
  
    },
    {
      title: " Rockstar",
      artist: " Dababy feat Roddy Rich",
      time: "3:29",
      img_src: " ./images/baby-rockstar.jpg",
      src: "./music/DaBaby_ROCKSTAR_FT_RODDY_RICCH.mp3"
  
    },
    {
      title: " Sober Thoughts",
      artist: " Xavy Rusan",
      time: "2:42",
      img_src: " ./images/sober thoughts.jpg",
      src: "./music/Xavy_Rusan_Sober_Thoughts.mp3"
  
    },
    {
      title: " Blessings",
      artist: " Angel",
      time: "3:09",
      img_src: " ./images/angel-blessings.jpg",
      src: "./music/Angel_Blessings_Official_Video_.mp3"
  
    },
    {
      title: " Cassanova",
      artist: " Levert",
      time: "6:10",
      img_src: " ./images/cassanova.jpg",
      src: "./music/Levert_Casanova.mp3"
  
    },
    {
      title: " Hold You",
      artist: " Gyptian",
      time: "3:53",
      img_src: " ./images/hold-you.jpg",
      src: "./music/Gyptian_Hold_You.mp3"
  
    },
    {
      title: " Stand By Me",
      artist: " Ben E King",
      time: "2:55",
      img_src: " ./images/stand-by-me.jpg",
      src: "./music/Ben_E_King_Stand_by_Me.mp3"
  
    },
    {
      title: " We Pray",
      artist: " Dre Island feat Popcan",
      time: "4:06",
      img_src: " ./images/we-pray.jpg",
      src: "./music/Dre_Island_We_Pray_ft_Popcaan.mp3"
  
    },
    {
      title: " Freaky Friday",
      artist: " Lill Dicky feat Chris Brown",
      time: "3:36",
      img_src: " ./images/freaky-friday.jpg",
      src: "./music/Lil_Dicky_Freaky_Friday_feat_Chris_Brown_.mp3"
  
    },
    {
      title: " Cold Little Heart",
      artist: " Michael Kiwanuka",
      time: "3:30",
      img_src: " ./images/cold-heart.jpg",
      src: "./music/Michael_Kiwanuka_Cold_Little_Heart.mp3"
  
    },
    {
      title: " Mad",
      artist: " Ne-Yo",
      time: "4:14",
      img_src: " ./images/mad-ne-yo.jpg",
      src: "./music/Ne_Yo_Mad.mp3"
  
    },
    {
      title: " Smooth Criminal",
      artist: " Michael Jackson",
      time: "4:18",
      img_src: " ./images/smooth-criminal.jpg",
      src: "./music/Michael_Jackson_Smooth_Criminal_Audio_HQ_.mp3"
  
    },
    {
      title: " My Girl",
      artist: " The Temptations",
      time: "2:55",
      img_src: " ./images/my-girl.jpg",
      src: "./music/The_Temptations_My_Girl.mp3"
  
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
