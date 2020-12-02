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
                <hr/>
                <a href="tel:787-219-4333">Topis number</a>
                <Card>
                        {
                            state.map(item => {
                                return (
                                    <div>
                                        <div> title: {item.title} </div>
                                        <div> link: {item.link} </div>
                                    </div>
                                )
                            })
                        }
                </Card>
            </Container>
        )
    }
}

export default Ayuda