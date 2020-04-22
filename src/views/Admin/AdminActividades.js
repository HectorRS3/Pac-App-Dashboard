import React, { useState } from 'react'

// THIS IS THE CURRENT IMPLEMENTATION //
function AdminActividades(){
    const [state] = useState({
        actividades: [
            { title: "Party en casa", date: "21/enero/2021", location: "800 Piedras Negras Apt. 5104 San Juan PR 00926" },
            { title: "Reunion", date: "31/enero/2021", location: "800 Piedras Negras Apt. 5104 San Juan PR 00926" },
            { title: "Elecciones 2020", date: "6/noviembre/2020", location: "800 Piedras Negras Apt. 5104 San Juan PR 00926" },
            { title: "Indie Hackers", date: "14/diciembre/2022", location: "800 Piedras Negras Apt. 5104 San Juan PR 00926" }
        ]
    })

    return (
        <div className="container">
            <h1>Actividades</h1>
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                        <th scope="col">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.actividades.map(actividad => {
                            return (<tr>
                                <td>{actividad.title}</td>
                                <td>{actividad.date}</td>
                                <td>{actividad.location}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
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

export default AdminActividades;