import {useState, useEffect} from 'react'

export default function CountHooks(){
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState('Welcome')
    useEffect( () => {
        setTitle('our new title')
    }, [])

    // every time count changes, set the title to {count}
    useEffect( () => {
        document.title = `${count}`
    },[count])
    
    return(
        <section>
        <h2>{title}</h2>
        <h3>you clicked {count} times</h3>
        <button 
            onClick={() => setCount(count+1)}>
                click me</button>
    </section>
    )
}