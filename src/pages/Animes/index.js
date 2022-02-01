import Navbar from '../../components/Header/index';
import './styles.css';
import Cards from '../Cards';

function Animes() {
 
    return (
      <div>
        <Navbar />
        <div>
          <h3>Animes mais populares</h3>
        </div>
        <div className="firedev-animes-content">
          <Cards /> 
        </div>
      </div>
    );
  }
  
  export default Animes;
  