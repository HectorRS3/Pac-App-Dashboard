import React, {useState} from 'react'
import { Card, Collapse } from 'react-bootstrap'

export default function CollapsableList(props) {
    return (
        <>
            {
                props.list.map((item, idx) => {
                    return (<CollapsableListItem key={idx} variant={props.variant} title={item.title} author={item.author}>
                        <p className="article-content">{item.body}</p>
                        {/* {
                            item.tags.map((tag, idx) => {
                                return <span key={idx} className="article-tag">{tag.title}</span>
                            })
                        } */}
                    </CollapsableListItem>)
                })
            }
        </>
    )
}

function CollapsableListItem(props) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Card
                text={props.variant.toLowerCase()}
                bg={props.variant.toLowerCase() == 'light' ? 'dark' : 'light'}
                className="mb-2"
            >
                <Card.Header>
                    <h4>
                        <a 
                        href="javascript:void" 
                        style={{
                            color: props.variant.toLowerCase() == 'light' ? '#fff' : props.variant
                            }} 
                        onClick={() => setOpen(!open)}
                        aria-controls="collapsable-card"
                        aria-expanded={open}
                        >
                            {props.title}
                        </a>
                    </h4>
                    <p class="article-subtitle">
                        By: {props.author}
                    </p>
                </Card.Header>
                <Collapse in={open}>
                    <Card.Body id="collapsable-card">
                        {props.children}
                    </Card.Body>
                </Collapse>
            </Card>
        </>
    )
}