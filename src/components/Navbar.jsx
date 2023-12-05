import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

const Navbar = () => {
  const { user, logout } = useLogin();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  }

  return (
    <nav className="bg-white p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-white px-4">
        <h1 className="text-xl">Inicio</h1>
      
        
        {!user ? <Link to="/login">Iniciar sesión</Link> : 
          <div className="flex gap-2 items-center">
            <span>{user.email}</span>
            <button className="text-red-500 underline p-2 rounded-md hover:text-red-600" onClick={handleLogout}>Cerrar sesión</button>
          </div>
        
        }
      </div>
    </nav>
  );
};

export default Navbar;