import server from "./server.js"

const App () => {
    return (
        <>
         <div id="navbar">
          <Link to="/" element={<h1>Home</h1>} />
          <Link to="/employees" element={<h1>Employees</h1>} />
         </div>
        </>
    )
}

export default App