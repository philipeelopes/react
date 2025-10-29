import styles from './Project.module.css'


import Container from '../layout/Container'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'

function Project() {
    const { id } = useParams()


    const [project, setProject] = useState({});
    const [showProjectForm, setShowProjectForm] = useState(false)

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

                    setProject(data)

                })
                .catch((err) => console.log(err))
        }, 100)
    }, [id])

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)

    }

    return (<>
        {project.name ? (
            <div className={styles.project_details}>
                <Container customClass="fullWidth">
                    <div className={styles.details_container}>
                        <h1>Projeto: {project.name}</h1>

                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p><span>Categoria:</span> {project.category.name}</p>
                                <p>  <span> Total de Orçamento:</span> R${project.budget}  </p>
                                <p>  <span> Total Utilizado:</span> R${project.wavez}  </p>
                            </div>
                        ) : (

                            <div className={styles.project_info}>
                                <p>Detalhes do projeto</p>
                            </div>
                        )}
                        <button className={styles.btn} onClick={toggleProjectForm}>{!showProjectForm ? 'Editar projeto' : 'Fechar'}
                        </button>
                    </div>


                </Container>
            </div>
        ) : (
            <Loading />
        )}


    </>
    )

}

export default Project