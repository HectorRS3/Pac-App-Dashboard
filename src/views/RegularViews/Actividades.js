import React, { useState, useEffect } from 'react'
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap'
import EventDetailsModal from '../../components/EventComponents/EventDetailsModal'
import { EventsAPI } from '../../api/'

function Actividades() {
  const [upcomingEvents, setUpcomingEvents] = useState([])
  const [pastEvents, setPastEvents] = useState([])
  const [eventDetails, setEventDetails] = useState({})
  const [ isOpen, setIsOpen ] = useState(false)
  const [monthNames] = useState([
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AGO",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ])

  const getEventDetails = async (id) => {
    try {
      const result = await EventsAPI().getEventById(id)
      setEventDetails(result)
      setIsOpen(true)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    const pastEvts = []
    const upcomingEvts = []

    EventsAPI().fetchEvents()
    .then(events => {
      events.forEach(event => {
        if(new Date(event.date) < new Date()) {
          pastEvts.push(event)
        } else {
          upcomingEvts.push(event)
        }
      })
      setUpcomingEvents(upcomingEvts)
      setPastEvents(pastEvts)
    })
    .catch(error => console.error(error))

    return function cleanup() {
      console.log("Done!")
    }
  }, [])

  if (!upcomingEvents && !pastEvents) {
    return (
      <p>LOADING...</p>
    )
  } else {
    return (
      <Container>
        <EventDetailsModal isOpen={isOpen} setIsOpen={setIsOpen} event={eventDetails}/>
        <Row>
          <Col xs={12} md={6}>
            <Card>
              <Card.Header>
                <Card.Title>Upcoming Events</Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup>
                  {
                    upcomingEvents.map((upcoming, index) => {
                      return ( <ListGroup.Item key={index} action onClick={() => getEventDetails(upcoming.id)}>
                      <div className="date-block">
                        <h4>{new Date(upcoming.date).getDate() + 1}</h4>
                        <span>{ monthNames[new Date(upcoming.date).getMonth()] }</span>
                      </div>
                      <div className="description-block">
                        <h4>{upcoming.title}</h4>
                        <span>{upcoming.description}</span>
                      </div>
                      <span className="material-icons">
                        navigate_next
                                      </span>
                    </ListGroup.Item>)
                    })
                  }
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card>
              <Card.Header>
                <Card.Title>
                  Past Events
                                </Card.Title>
              </Card.Header>
              <Card.Body>
                <ListGroup>
                  {
                    pastEvents.map((past, index) => {
                      return (<ListGroup.Item key={index} action onClick={() => getEventDetails(past.id)}>
                      <div className="date-block">
                        <h4>{new Date(past.date).getDate() + 1}</h4>
                        <span>{ monthNames[new Date(past.date).getMonth()] }</span>
                      </div>
                      <div className="description-block">
                        <h4>{past.title}</h4>
                        <span>{past.description}</span>
                      </div>
                      <span className="material-icons">
                        navigate_next
                                      </span>
                    </ListGroup.Item>)
                    })
                  }
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Actividades;