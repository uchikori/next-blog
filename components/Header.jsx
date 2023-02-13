import { Logo } from "./Logo"
import { Nav } from "./Nav"

export const Header = () => {
  return (
    <>
      <header>
        <Logo boxOn />
        <Nav />
      </header>
    </>
  )
}