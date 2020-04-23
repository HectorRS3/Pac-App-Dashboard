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

import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Table, Container } from 'react-bootstrap'

function Actividades() {
    const [state, setState] = useState(undefined)
    useEffect(() => {
      fetchData();
      
      return function cleanup() {
          console.log("Done!")
      }
    }, [])

    async function fetchData() {
        const response = await Axios({
            method: 'GET',
            url: "http://localhost:8080/post/",
            headers: {
                filter: "Actividades"
            }
        })

        setState(response.data);
    }

    if(!state) {
        return (
            <p>LOADING...</p>
        )
    } else {
        return (
            <Container>
                <h1>Actividades</h1>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>author</th>
                            <th>Date</th>
                            <th>summary</th>
                            <th>body</th>
                            <th>link</th>
                            <th>tags</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(item => {
                                return (
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.author}</td>
                                        <td>{item.date}</td>
                                        <td>{item.summary}</td>
                                        <td>{item.body}</td>
                                        <td>{item.link}</td>
                                        <td>{item.tags}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default Actividades