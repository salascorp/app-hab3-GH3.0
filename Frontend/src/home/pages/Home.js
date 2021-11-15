import Casita from "./1.png";

const Home = ({ isLoggedIn, carrito, setCarrito }) => {
  return (
    <div align="center">
      <img src={Casita} width="600" height="400" alt="Casita"></img>
    </div>
  );
};

export default Home;
