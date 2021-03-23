import React, {useState, useEffect} from 'react'
import { Container, Col, Row, Card} from 'react-bootstrap'
import CollapsableList from '../../components/Common/CollapsableList'
import { PostsAPI } from '../../api'

function Educacion() {
    const [state, setState] = useState(undefined)
    useEffect(() => {
      fetchData();
      
      return function cleanup() {
          console.log("Done!")
      }
    }, [])

    async function fetchData() {
        let posts = [];
        const response = await PostsAPI().fetchPosts();

        console.log(response)

        // response.map(post => {
        //     let tags = [];
        //     const strToArr = post.tags !== "" || post.tags !== undefined ? post.tags.split(',', post.tags) : post.tags
        //     console.log(strToArr)
        // })

        setState(response);
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