import { useSelector, useDispatch } from 'react-redux'
import { decrementar, incrementar } from './contador.slice'

const App = () => {

  const num = useSelector((estado) => estado.contador.valor)
  const disponer = useDispatch()
  
  return (
    <div>
        <button onClick={() => disponer(decrementar())} >Decrementar</button>
        <span>{num}</span>
        <button onClick={() => disponer(incrementar())} >Incrementar</button>
    </div>
  )
}

export default App;