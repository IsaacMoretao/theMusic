import { Nav } from "../Components/Footer"
import { Sidebar } from "../Components/Sidebar"

export function Principal(){
  return(
    <div className="flex bg-hero-pattern bg-cover">
      <Sidebar/>
      <Nav/>

      
    </div>
  )
}