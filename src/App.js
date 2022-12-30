// import logo from './logo.svg';
import './App.css';
import { Testimony } from './components/testimony.jsx';

/*Issue: Put some text in bold from description item*/
// const bold = <b></b>;

// function bold(e) {
//   e.style.fontWeight = 'bold';
//   return e;
// }

// function boldText() {
  


// }

function App(props) {
  // var testomonies = { name:Testimony.name, text:Testimony.description };
  // function name_character() {
  //   return (
  //     <strong>Boruto Uzumaki</strong>
  //   );
  // }
  // var name_boruto = <b>Boruto Uzumaki</b>;
  return (
     <div className="App">
       <div className='principal_container'>
          <h1 className='title'>Anime Characters</h1>
          <h2 className='subtitle'>These are our best warriors descriptions: What do you think about them?</h2>
          <Testimony 
          name='Boruto Uzumaki'
          country='Leaf'
          image='boruto'
          job='Shinobi'
          company='7 Team'
          description={` is a shinobi from Konoha, from Uzumaki clan and a direct descendant of the Hyūga clan through his mother. While initially resentful of his father and his absence since becoming Hokage, Boruto eventually comes to respect his father and duties. Regardless, he vows to instead become a shinobi like his mentor.`}
          
        
          />

          <Testimony 
          name='Master Swordsman: Zenitsu'
          country='Japan'
          image='flash'
          job='Samurai'
          company='Deamon Slayer'
          description=" is an incredibly talented swordsman, especially in his proficiency in extremely fast Iaijutsu-like swordsmanship and the Thunderclap and Flash technique, to the point he can create offshoots of the technique and utilize it even while he is asleep."         
          />

          <Testimony 
          name='Kakashi Hatake'
          country='Leaf'
          image='Kakashi'
          job='Shinobi'
          company='7 Team'
          description=" is a shinobi of Konohagakure's Hatake clan. Famed as Kakashi of the Sharingan (写輪眼のカカシ, Sharingan no Kakashi), he is one of Konoha's most talented ninja, regularly looked to for advice and leadership despite his personal dislike of responsibility. To his students on Team 7, Kakashi emphasises the importance of teamwork; he himself received this lesson, along with the Sharingan, from his childhood friend, Obito Uchiha. After the Fourth Shinobi World War,"
          professional_name=" Kakashi becomes Konoha's Sixth Hokage (六代目火影, Rokudaime Hokage, literally meaning: Sixth Fire Shadow."          
          />

          <Testimony 
          name='Minato Namikaze '
          country='Leaf'
          image='minato'
          job='Shinobi'
          company='7 Team'
          description=" was the Fourth Hokage (四代目火影, Yondaime Hokage, literally meaning: Fourth Fire Shadow) of Konohagakure. He was renowned all over the world as Konoha's Yellow Flash (木ノ葉の黄色い閃光, Konoha no Kiiroi Senkō, English TV: Yellow Flash of the Leaf). He died during the Nine-Tailed Demon Fox's Attack, sacrificing his life to seal a part of the Nine-Tails into his newborn son, Naruto Uzumaki."         
          />

          <Testimony 
          name='Sasuke Uchiha'
          country='Leaf'
          image='sasuke'
          job='Shinobi'
          company='7 Team'
          description=" is one of the last surviving members of Konohagakure's Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them by killing Itachi. He is added to Team 7 upon becoming a ninja and, through competition with his rival and best friend, Naruto Uzumaki, Sasuke starts developing his skills. Dissatisfied with his progress, he defects from Konoha so that he can acquire the strength needed to exact his revenge."         
          />
       </div>
     </div>
    
  );
}

export default App;
