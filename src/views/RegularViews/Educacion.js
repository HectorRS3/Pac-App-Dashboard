import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Container, Col, Row, Card} from 'react-bootstrap'

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
                        {
                            state.map(item => {
                                return (
                                    <Card style={{ width: '18rem' }}>
                                    <Card.Body>
                                      <Card.Title><a href={item.link} target="_blank"> {item.title}</a></Card.Title>
                                      <Card.Subtitle className="mb-2 text-muted">by {item.author}</Card.Subtitle>
                                      <Card.Text>{item.description}</Card.Text>
                                      <Card.Link href="#">Card Link</Card.Link>
                                      <Card.Link href="#">Another Link</Card.Link>
                                    </Card.Body>
                                  </Card>
                                )
                            })
                        } 
        </Container>
        )
    }
}

export default Educacion