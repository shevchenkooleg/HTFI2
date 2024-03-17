import s from './Loader.module.css'
import Spinner from './Spinner.gif'

export const Loader = () => {
    return (
        <img src={Spinner} className={s.loader}/>

    )
}
