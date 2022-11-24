import logo from './epicura.png';
import style from './main-header.module.css';
import clsx from 'clsx';

const MainHeader = () => {
    const isDark = (new Date()).getHours() > 13;

    return (
        <header className={clsx(style.banner, isDark && style['banner-dark'])}>
            <img className={style['logo-epicura']} src={logo} alt="Epicura" />
            <span className={style.title} >Exercice - Todo List 📝</span>
        </header>
    );
};

export default MainHeader;