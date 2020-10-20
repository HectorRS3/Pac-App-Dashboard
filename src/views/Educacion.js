import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { ListGroup, Container } from 'react-bootstrap'

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
                <ListGroup variant="flush">
                    {
                        state.map(educacion => {
                            return (<ListGroup.Item action variant="light"><a href="">{educacion.title}</a> by {educacion.author}
                                        <ul>{educacion.summary}</ul>
                                        </ListGroup.Item>)
                        })
                    }
                </ListGroup>
            </Container>
        )
    }
}

export default Educacion