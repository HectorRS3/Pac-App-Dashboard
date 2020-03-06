import React, {useState} from 'react'

// THIS IS THE CURRENT IMPLEMENTATION //
function Actividades() {
    const [state] = useState({
        actividades: [
            {title: "Party en casa", date: "21/enero/2021"},
            {title: "Reunion", date: "31/enero/2021"},
            {title: "Elecciones 2020", date: "6/noviembre/2020"}
        ]
    })

    return (
        <div>
            <h1>Actividades</h1>
            <ul>
                {
                    state.actividades.map(actividad => {
                        return <li>{actividad.title} - {actividad.date}</li>
                    })
                }
            </ul>
        </div>
    )
}

// THIS IS THE OLD WAY //
// class Actividades extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             actividades: [
//                 {title: "Party en casa", date: "21/enero/2021"},
//                 {title: "Reunion", date: "31/enero/2021"},
//                 {title: "Elecciones 2020", date: "6/noviembre/2020"}
//             ]
//         }

//         this.fetchActividades = this.fetchActividades.bind(this);
//     }

//     componentWillMount() {
//         this.fetchActividades()
//     }

//     async fetchActividades() {
//         // Fetch code...
//     }

//     render() {
//         return(
//             <div>
//                 <h1>Actividades</h1>
//                 <ul>
//                 {
//                     this.state.actividades.map(actividad => {
//                     return <li>{actividad.title} - {actividad.date}</li>
//                     })
//                 }
//                 </ul>
//             </div>
//         );
//     }
// }

export default Actividades