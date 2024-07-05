import Home from "./Pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import CreateList from "./Pages/CreateList";
import Properties from "./Pages/Properties";
import WishList from "./Pages/WishList";
import PropertyList from "./Pages/PropertyList";
import TripList from "./Pages/TripList";
import ReservationList from "./Pages/ReservationList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/create-list" element={<CreateList />} />
        <Route path="/properties/:id" element={<Properties />} />

        <Route path="/propertylist" element={<PropertyList />} />
        <Route path="/triplist" element={<TripList />} />
        <Route path="/reservationlist" element={<ReservationList />} />
   

      </Routes>
    </BrowserRouter>
  );
}

export default App;
