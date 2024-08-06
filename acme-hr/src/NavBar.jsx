import  { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <>
        <Link to="/" element={<h1>Home</h1>} />
        <Link to="/employees" element={<h1>Employees</h1>} />
    </>
  )
}

export default NavBar;