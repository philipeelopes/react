import { useState } from 'react'

import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

import styles from '../project/ProjectForm.module.css'




function ServiceForm() {

    function submit(e) {

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
                placeholder="Escre o serviço"
                handleOnChange={handleChange}
            />

            <SubmitButton text={textBtn} />
        </form>
    )

}

export default ServiceForm;