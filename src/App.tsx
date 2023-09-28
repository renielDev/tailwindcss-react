import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import InputLabel from './components/Input/InputLabel'

function App() {
  const [count, setCount] = useState(0)

  const toggleDarkMode = () => {
    const html = document.querySelector('html')
    if (html) {
      html.classList.toggle('dark')
    }
  }

  useEffect(() => {
    // get color theme preference from system
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    if (prefersDarkScheme.matches) {
      const html = document.querySelector('html')
      if (html) {
        html.classList.add('dark')
      }
    }
  }, [])

  return (
    <>
      <div className='flex flex-col items-center w-full min-h-screen bg-slate-700 justify-items-center'>
        <h1 className='hover:opacity-60 hover:cursor-pointer' onClick={toggleDarkMode}>Toggle Dark Mode</h1>
        <div className='flex flex-col items-center justify-center flex-1 gap-2'>
          <div className='flex gap-2'>
            <Button size="medium" >Button</Button>
            <Button size="medium" intent="primary">Button</Button>
            <Button size="medium" intent="secondary">Button</Button>
            <Button size="medium" intent="danger">Button</Button>
            <Button size="medium" intent="warning">Button</Button>
          </div>
          <div className='flex gap-2'>
            <Button size="large" >Large Button</Button>
            <Button size="large" intent="primary">Large Button</Button>
            <Button size="large" intent="secondary">Large Button</Button>
            <Button size="large" intent="danger">Large Button</Button>
            <Button size="large" intent="warning">Large Button</Button>
          </div>
          <div className='flex gap-2'>
            <Button size="large" border="super-rounded" >Large Button</Button>
            <Button size="large" intent="primary" border="super-rounded">Large Button</Button>
            <Button size="large" intent="secondary" border="super-rounded">Large Button</Button>
            <Button size="large" intent="danger" border="super-rounded">Large Button</Button>
            <Button size="large" intent="warning" border="super-rounded">Large Button</Button>
          </div>
          <div className='flex gap-2'>
            <InputLabel label="Label" />
          </div>
          <div className='flex gap-2'>
            <InputLabel label="Label" intent="row" />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
