import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Container, Col, Row, Card} from 'react-bootstrap'
import CollapsableList from '../../components/Common/CollapsableList'

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
                <CollapsableList list={state} variant="primary"/>
        </Container>
        )
    }
}

export default Educacion