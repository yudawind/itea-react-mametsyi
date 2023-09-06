
import s from "./index.module.scss"

export const Button = ({inner , onClick}) => {
    return (
    <>
        <button 
            className={s.customButton} 
            type="button" 
            name="button"
            onClick={onClick}>
            
                {inner}
        </button>
    </>
    )
}