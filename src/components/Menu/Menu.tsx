import { NavLink } from 'react-router-dom'
import './Menu.css'

export default function Menu() {
    
    const classes = ({isActive}: {isActive:boolean}): string => isActive ? 'menu__item menu__item-active': 'menu__item'; 

    return (
        
        <div className='menu'>
            <NavLink to='/' className={classes}>ГЛАВНАЯ</NavLink>
            <NavLink to='/drift' className={classes}>ДРИФТ-ТАКСИ</NavLink>
            <NavLink to='/timeattack' className={classes}>TIME ATTACK</NavLink>
            <NavLink to='/forza' className={classes}>FORZA CARTING</NavLink>
        </div>

    )
  }