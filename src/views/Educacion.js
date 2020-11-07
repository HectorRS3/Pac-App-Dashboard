import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Table, ListGroup, Container } from 'react-bootstrap'

function Educacion() {
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
            url: "http://localhost:8080/post/"
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
                <h1>Educacion</h1>
                <hr/>
                   
                    <tbody>
                        {
                            state.map(item => {
                                return (
                                    <div class="card-body">
                                        <h5 class="card-title"><a href={item.link} target="_blank"> {item.title}</a></h5>
                                        <h6 class="card-subtitle mb-2 text-muted">by {item.author}</h6>
                                        <p class="card-text">{item.description}</p>
                                        <a href="#" class="card-link">Share</a>
                                    </div>
                                )
                            })
                        }
                    </tbody>

            </Container>
        )
    }
}

export default Educacion