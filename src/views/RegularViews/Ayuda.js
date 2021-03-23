import React, { useState, useEffect } from 'react'
import { Table, Container, Card } from 'react-bootstrap'
import { HelpAPI } from '../../api'

function Ayuda() {
  const [state, setState] = useState(undefined)
  useEffect(() => {
    fetchData();

    return function cleanup() {
      console.log("Done!")
    }
  }, [])

  async function fetchData() {
    const response = await HelpAPI().getHelpList()
    setState(response);
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
                          <a href={`tel:${item.phone_number}`}> {item.phone_number} </a>
                        </div>
                      </Card.Title>
                      <a href={item.link}> Mas Informacion... </a>
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