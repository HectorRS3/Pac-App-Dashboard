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
                                    <div class="card-body">
                                        <h5 class="card-title"><a href={item.link} target="_blank"> {item.title}</a></h5>
                                        <h6 class="card-subtitle mb-2 text-muted">by {item.organizer}</h6>
                                        <p class="card-text">{item.description}</p>
                                        <a href="#" class="card-link">Share</a>
                                    </div>
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