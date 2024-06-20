import { Outlet } from 'react-router-dom';
import Nav from '../Nav/Nav';

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
