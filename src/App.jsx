import { useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState({
    id : 'PRIME',
    ganGan : <>"Do you want an Advice for the moment, Let Wizard 
              Legend Provide one for you !!!" <br /><br /> JUST CLICK THE DICE BELOW.,</>
  });

  const adviceUrl = 'https://api.adviceslip.com/advice';

  const adviceGotten = async () => {
    try {
      const response = await fetch(adviceUrl);
      const data = await response.json();
      const adviceId = data.slip.id;
      const adviceGanGan = data.slip.advice;
      setAdvice({...advice, id : adviceId, ganGan : adviceGanGan,})
    } catch (error) {
      console.log('error in getting data, try checking your network or data.');
    }
  };


  return (
    <>
      <main>
        <div className="advice-generator">
          <div className="inner">
              <h2>Advice #<span className="advice-id">{advice.id}</span></h2>
              <p className="advice">{advice.ganGan}</p>
              <span className="line"><img src="/pattern-divider-desktop.svg" /></span>
              <button onClick={adviceGotten} className="get-advice"><img src="/icon-dice.svg" /></button>
          </div>
        </div>
      </main>
    </>
  )
}

export default App

// LEGEND.DEV coded this




















//Below is a more concise and professional way of writing the above

// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [advice, setAdvice] = useState({
//     id: 'PRIME',
//     text: (
//       <>
//         "Do you want an Advice for the moment? Let Wizard Legend provide one for you!"
//         <br />
//         <br />
//         JUST CLICK THE DICE BELOW.
//       </>
//     ),
//   });

//   const adviceUrl = 'https://api.adviceslip.com/advice';

//   const fetchAdvice = async () => {
//     try {
//       const response = await fetch(adviceUrl);
//       const { slip } = await response.json();
//       setAdvice({ id: slip.id, text: slip.advice });
//     } catch (error) {
//       console.error('Error fetching advice. Please check your network.');
//     }
//   };

//   return (
//     <main>
//       <div className="advice-generator">
//         <div className="inner">
//           <h2>Advice #<span className="advice-id">{advice.id}</span></h2>
//           <p className="advice">{advice.text}</p>
//           <span className="line">
//             <img src="/pattern-divider-desktop.svg" alt="divider" />
//           </span>
//           <button onClick={fetchAdvice} className="get-advice">
//             <img src="/icon-dice.svg" alt="Get advice" />
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;
