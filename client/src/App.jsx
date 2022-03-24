import { Navbar,Footer,Loader,Services,Transactions,Welcome} from './components';

const App = () => {
  return (
    // min-h-screen =	min-height: 100vh;
     <div className="min-h-screen"> 
     <div className="gradient-bg-welcome">
       <Navbar />
       <Welcome/>
     </div>
     <Services/>
     <Transactions/>
     <Footer/>
    </div>
  )
}

export default App
