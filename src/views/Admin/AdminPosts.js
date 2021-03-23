import React, {useState, useEffect} from 'react'
import { Navbar, Nav, Table, Container } from 'react-bootstrap'
import CreatePostsModal from '../../components/PostsComponents/CreatePostsModal';
import EditPostsModal from '../../components/PostsComponents/EditPostsModal';
import DeletePostModal from '../../components/PostsComponents/DeletePostModal';
import { PostsAPI } from '../../api';

function AdminPosts() {
    const [state, setState] = useState(undefined)
    useEffect(() => {
      fetchData();
      
      return function cleanup() {
          console.log("Done!")
      }
    }, [])

    async function fetchData() {
        const response = await PostsAPI().fetchPosts();
        console.log(response);
        setState(response);
    }

    if(!state) {
        return (
            <p>LOADING...</p>
        )
    } else {
        return (
            <Container>
               <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>Admin Posts</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <CreatePostsModal/> 
                    </Nav>
                </Navbar>

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
                            <th>actions</th>
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
                                        <td>
                                            <EditPostsModal postId={item.id}/>
                                            <DeletePostModal postId={item.id} postTitle={item.title}/>
                                        </td>
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

export default AdminPosts;