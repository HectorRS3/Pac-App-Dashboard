import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import { Table, Container } from 'react-bootstrap'

//Current implementation practice//
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
            url: "http://localhost:8080/post/",
            headers: {
                filter: "Educacion"
            }
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
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>title</th>
                            <th>author</th>
                            <th>summary</th>
                            <th>body</th>
                            <th>link</th>
                            <th>tags</th>
                            <th>category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            state.map(item => {
                                return (
                                    <tr>
                                        <td>{item.title}</td>
                                        <td>{item.author}</td>
                                        <td>{item.summary}</td>
                                        <td>{item.body}</td>
                                        <td>{item.link}</td>
                                        <td>{item.tags}</td>
                                        <td>{item.category}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default Educacion