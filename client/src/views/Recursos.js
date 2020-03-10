import React, {useState} from 'react'

//Current Implementation Practice//
function Recursos() {
    const [state] = useState({
        recursos: [
            {title:"Locales para hacer Fiestas", date:"15/Feb/2020"},
            {title:"Locales para hacer Fiestas", date:"15/Feb/2020"},
            {title:"Locales para hacer Fiestas", date:"15/Feb/2020"},
        ]
    })

    return (
        <div>
            <h1>Recursos</h1>
            <ul>
                {
                    state.recursos.map(recursos => {
                    return <li>{recursos.title} - {recursos.date}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Recursos