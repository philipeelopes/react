import styles from './Select.module.css';

function Select({text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name}>
            <option>Selecione uma opção</option>
            {options.map((option) => (
                <potion value={option.id} key={option.id}>
                {option.name}
                </potion>

            ))}
            </select>
        </div>
    )

}

export default Select;