import React, {useState} from 'react'

//Current implementation practice//
function Educacion() {
    const [state] = useState({
        educacion: [
            {title: "Donde montar un party", date: "06/Marzo/2020"},
            {title: "Donde montar un party", date: "06/Marzo/2020"},
            {title: "Donde montar un party", date: "06/Marzo/2020"}
        ]
    })

    return (
        <div>
            <h1>Educacion</h1>
            <ul>
                {
                    state.educacion.map(educacion => {
                        return <li>{educacion.title} - {educacion.date}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Educacion