import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [isDark, setIsDark] = React.useState('false')
    function trigger(){
        setIsDark(prevState=>!prevState)
        console.log("pressed")
    }
    
    return (
        <div className="container">
            <Navbar darkMode={isDark} func={trigger}/>
            <Main darkMode={isDark}/>
        </div>
    )
}