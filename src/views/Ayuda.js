import React, {useState} from 'react'

// Pratice //
function Ayuda() {
    const [state] = useState({
        ayuda: [
            {title: "Como Montar Un Party", date: "03/09/2020"},
            {title: "Como Montar Un Party", date: "03/09/2020"},
            {title: "Como Montar Un Party", date: "03/09/2020"},
        ]
    })

    return (
        <div>
            <h1>Ayuda</h1>
            <ul>
                {
                    state.ayuda.map(ayuda => {
                        return <li>{ayuda.title} - {ayuda.date}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Ayuda