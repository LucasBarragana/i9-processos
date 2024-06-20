'use client'

import Desktop from "./Desktop"
import Mobile from "./Mobile"

export default function Navbar(){
  return(
    <div className="h-auto">
      <Desktop />
      <Mobile />
    </div>
    
  )
}