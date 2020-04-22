import React, {useState} from 'react'

function AdminEducacion(){
    const [state] = useState({
        educacion: [
            {title:"placerholder array", date:"12-12-2020"},
            {title:"placerholder array", date:"12-12-2020"},
            {title:"placerholder array", date:"12-12-2020"}
        ]
    })

    return (
        <div className="container">
            <h1>Educacion</h1>
            <table class="table table-hover table-striped">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.educacion.map(educacion => {
                            return (<tr>
                                <td>{educacion.title}</td>
                                <td>{educacion.date}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminEducacion;