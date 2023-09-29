import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { cn } from '../shared/utils';

interface ToggleButtonProps {
  label?: string;
  value?: boolean;
  onClick?: (...event:any) => void;
} 
  

const ToggleButton:React.FC<ToggleButtonProps> = ({label, value, onClick}) => {
  const _classLabel = cn({
    'flex items-center justify-between w-8 h-5 rounded-full cursor-pointer relative': true,
    'bg-gray-400': !value,
    'bg-emerald-500': value
  })
  const _toggleDotClass = cn({
    'w-4 h-4 bg-white rounded-full shadow-md toggle__dot absolute transition-all duration-300': true,
    'translate-x-0': !value,
    'translate-x-4': value
  });
  
  return (
    <span className="flex flex-row items-center">
      <div className="relative" id="toggle" onClick={onClick}>
        <input type="checkbox" id="toggleB" className="sr-only" checked={value} />
        <label htmlFor="toggleB" className={_classLabel}>
          <div className={_toggleDotClass}></div>
        </label>
      </div>
      <label htmlFor="toggle" className="ml-2">{label}</label>
    </span>
  )
}

const Menu = () => {
  // menu list links
  const menuList = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Components',
      link: '/components'
    }
  ]

  return (<>
    <ul>
      {menuList.map((menu, index) => {
        return <li key={index}>
          <Link to={menu.link}>{menu.name}</Link>
        </li>
      })}
    </ul>
  </>)

}

const BasicLayout = () => {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = (e: React.FormEvent<any>) => {
    e.preventDefault()
    const html = document.querySelector('html')
    if (html && html.classList.contains('dark')) {
      console.log('removing dark mode')
      html.classList.remove('dark')
    } else {
      console.log('adding dark mode')
      html?.classList.add('dark')
    }
    setDarkMode(html?.classList.contains('dark') || false)
  }

  // useEffect(() => {
  //   // get color theme preference from system
  //   const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
  //   if (prefersDarkScheme.matches) {
  //     const html = document.querySelector('html')
  //     if (html) {
  //       html.classList.add('dark')
  //     }
  //   }
  // }, []);

  return (
    <div className='flex flex-col items-center w-full min-h-screen bg-slate-200 dark:bg-slate-700 justify-items-center'>
      <div className="flex flex-row">
        <ToggleButton value={darkMode} onClick={toggleDarkMode} label="Toggle Theme"/>
        <Menu />
      </div>
      <Outlet />
    </div>
  );
}

export default BasicLayout;