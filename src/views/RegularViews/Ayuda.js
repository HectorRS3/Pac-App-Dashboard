import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Table, Container, Card } from 'react-bootstrap'

function Ayuda() {
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
            url: "http://localhost:8080/ayudas/",
            headers: {
                filter: "Ayuda"
            }
        })

        setState(response.data);
    }

    if (!state) {
        return (
            <p>LOADING...</p>
        )
    } else {
        return (
            <Container>
                <h1>Ayuda</h1>
                <hr />
                <Card>
                    {
                        state.map(item => {
                            return (
                                <container>
                                    <Card>
                                        <Card.Header>
                                            <Card.Title> {item.title}
                                                <div>
                                                    <a href="tel:{item.number}"> Numero de Contacto {item.number} </a>
                                                </div>
                                            </Card.Title>
                                            <a href="{item.link}"> Mas Informacion... </a>
                                        </Card.Header>
                                    </Card>
                                </container>
                            )
                        })
                    }
                </Card>
            </Container>
        )
    }
}

export default Ayuda