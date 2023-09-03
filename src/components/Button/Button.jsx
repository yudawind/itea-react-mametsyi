import s from "./index.module.scss"

export const Button = () => {
    return (
    <>
        <button className={s.customButton} type="button" name="button">Button</button>
    </>
    )
}