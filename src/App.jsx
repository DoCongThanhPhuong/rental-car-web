import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Layout from './layouts/Layout'
import AddACar from './pages/AddACar'
import Booking from './pages/Booking'
import BookingDetails from './pages/BookingDetails'
import CarBookingDetails from './pages/CarBookingDetails'
import CarDetails from './pages/CarDetails'
import NotFound from './pages/error/NotFound'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import MyBooking from './pages/MyBooking'
import MyCarDetails from './pages/MyCarDetails'
import MyCars from './pages/MyCars'
import MyProfile from './pages/MyProfile'
import MyReports from './pages/MyReports'
import MyWallet from './pages/MyWallet'
import Search from './pages/Search'
import ProtectedRoute from './router/ProtectedRoute'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="search"
              element={
                <ProtectedRoute>
                  <Search />
                </ProtectedRoute>
              }
            />
            <Route
              path="rent-car"
              element={
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-booking"
              element={
                <ProtectedRoute>
                  <MyBooking />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-booking/:bookingId"
              element={
                <ProtectedRoute>
                  <BookingDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="car-booking/:bookingId"
              element={
                <ProtectedRoute>
                  <CarBookingDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cars"
              element={
                <ProtectedRoute>
                  <MyCars />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-cars/:carId"
              element={
                <ProtectedRoute>
                  <MyCarDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="add-car"
              element={
                <ProtectedRoute>
                  <AddACar />
                </ProtectedRoute>
              }
            />
            <Route
              path="wallet"
              element={
                <ProtectedRoute>
                  <MyWallet />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-reports"
              element={
                <ProtectedRoute>
                  <MyReports />
                </ProtectedRoute>
              }
            />
            <Route
              path="my-profile"
              element={
                <ProtectedRoute>
                  <MyProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cars/:carId"
              element={
                <ProtectedRoute>
                  <CarDetails />
                </ProtectedRoute>
              }
            />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="not-found" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default App
