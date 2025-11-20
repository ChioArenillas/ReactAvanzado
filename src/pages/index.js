import FocusComponent from '@/componentes/FocusComponent'
import HookComponent from '@/hooks/HookComponent'
import NuevoComponente from '@/componentes/NuevoComponente'
import UseCallbackComponent from '@/hooks/UseCallbackComponent'
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
