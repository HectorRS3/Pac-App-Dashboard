import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Container, Col, Row } from 'react-bootstrap'

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
                <div><img src="https://www.assmca.pr.gov/SliderImage/bannerLINEA_PAS.jpg" id="Banner" alt=""></img></div>
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
        <Container fluid>   
        <div class="footer">
        <Row>
          <Col md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </Col>
          <Col md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Link 1</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </Col>
        </Row>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://rcm2.rcm.upr.edu/start/"> Recinto de Ciencias Medicas </a>
          </div>
        </Container>
            </Container>
        )
    }
}

export default Educacion