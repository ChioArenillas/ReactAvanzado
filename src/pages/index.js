import FocusComponent from '@/componentes/FocusComponent'
import HookComponent from '@/componentes/HookComponent'
import NuevoComponente from '@/componentes/NuevoComponente'
import UseCallbackComponent from '@/componentes/UseCallbackComponent'
import React from 'react'

export default function Home() {


  return (
    <div>
{/*       <NuevoComponente />
 */}      <UseCallbackComponent/>
 <hr/>
          <FocusComponent/>
          <hr/>
          <HookComponent/>
    </div>
  )
}
