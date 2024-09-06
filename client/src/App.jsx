import AppRouter from './router/AppRouter'
import cl from './styles/app.module.scss'

function App() {

  return (
    <>
      <div className={cl.test}>
       <AppRouter />
      </div>
    </>
  )
}

export default App
