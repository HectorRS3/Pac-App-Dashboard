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
            url: "http://localhost:8080/actividades/"
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
                            <th>organizer</th>
                            <th>date</th>
                            <th>description</th>
                            <th>link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(item => {
                                return (
                                    <ul>
                                        <li><a href={item.link} target="_blank"> {item.title}</a> by {item.organizer}</li>
                                        <td>{item.description}</td>
                                    </ul>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default Actividades;