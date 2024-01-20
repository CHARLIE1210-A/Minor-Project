import { BrowserRouter, Route,Routes, Link } from "react-router-dom";
import BookRec from "./pages/BookRec";
import MainPage from "./pages/MainPage";
import MovieRec from "./pages/MovieRec";
import Dropdown from "./components/dropdown";
import MusicRec from "./pages/MusicRec";
import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<MainPage/>} />
      <Route exact path='/main' element={<MainPage/>} />
      <Route path='/movie' element={<MovieRec/>} />
      <Route path='/book' element={<BookRec />} />
      <Route path='/music' element={<MusicRec />} />
      <Route path='/dropdown' element={<Dropdown/>} />
      <Route path='*' element={<NoPage/>}/>
    </Routes>
    </>
  )
}