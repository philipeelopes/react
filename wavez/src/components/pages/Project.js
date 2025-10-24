import styles from './Project.module.css'



import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'

function Project() {
    const { id } = useParams()


    const [project, setProject] = useState({});

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id.trim()}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            })



                .then((resp) => resp.json())
                .then((data) => {
                    console.log('Dados recebidos:', data)
                    setProject(data)
                   
                })
                .catch((err) => console.log(err))
        }, 3000)
    }, [id])

    return (<>
        {project.name ? (
            <p>{project.name}</p>
        ) : (
            <Loading />
        )}


    </>
    )

}

export default Project