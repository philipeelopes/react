import { useState } from 'react'

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import styles from '../project/ProjectForm.module.css'




function ServiceForm({handleSubmit, BtnText, projectData}) {

    function submit() {

    }

    function handleChange(e) {

    }



    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do Serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}


            />

            <Input
                type="text"
                text="Custo do Serviço"
                name="cost"
                placeholder="Insira valor total"
                handleOnChange={handleChange}


            />


            <Input
                type="text"
                text="Descrição do Serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />

            <SubmitButton text={BtnText} />
        </form>
    )

}

export default ServiceForm;