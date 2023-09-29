import { useEffect, useState } from 'react'
import Button from '../components/Button/Button'
import InputLabel from '../components/Input/InputLabel'

function Components() {
  return (
    <>
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
          <InputLabel label="Label" intent="top" />
        </div>
        <div className='flex gap-2'>
          <InputLabel label="Label" intent="float" />
        </div>
      </div>
    </>
  )
}

export default Components
