import Home from "./Pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import CreateList from "./Pages/CreateList";
import Properties from "./Pages/Properties";
import WishList from "./Pages/WishList";
import PropertyList from "./Pages/PropertyList";
import TripList from "./Pages/TripList";
import { useDispatch, useSelector } from "react-redux";
import mode from "./redux/slice/mode";

function App() {
  const active = useSelector((state) => state.mode.active);
  useDispatch(mode);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<WishList active={active}/>} />
        <Route path="/create-list" element={<CreateList active={active}/>} />
        <Route path="/properties/:id" element={<Properties active={active}/>} />

        <Route path="/propertylist" element={<PropertyList active={active}/>} />
        <Route path="/triplist" element={<TripList active={active}/>} />
      
   

      </Routes>
    </BrowserRouter>
  );
}

export default App;
