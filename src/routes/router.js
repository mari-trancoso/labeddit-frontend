import { BrowserRouter, Route, Routes } from "react-router-dom"
import CommentsPage from "../pages/comments"
import LoginPage from "../pages/login"
import PostsPage from "../pages/posts"
import SignUpPage from "../pages/signup"

const Router = () => {
    return (
      <BrowserRouter>
          <Routes>
              <Route index element={<LoginPage/>}/>
              <Route path="/signup" element={<SignUpPage/>}/>
              <Route path="/feed" element={<PostsPage/>}/>
              <Route path="/comments/:id" element={<CommentsPage/>}/>
              {/* <Route path="*" element={<ErrorPage/>}/> */}
          </Routes>
      </BrowserRouter>
    )
  }
  
  export default Router