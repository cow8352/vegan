// 使用套件
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

// 頁面用元件
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import ProductEarring from './pages/ProductEarring'
import ProductRing from './pages/ProductRing'
import ProductNecklace from './pages/ProductNecklace'
import ProductBracelet from './pages/ProductBracelet'
import ProductBag from './pages/ProductBag'
import ProductHat from './pages/ProductHat'
import Member from './pages/Member'
// import Student from './pages/Student'
// import StudentSelfPagination from './pages/StudentSelfPagination'
// import NotFoundPage from './pages/NotFoundPage'

// 組合用元件
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import MainContent from './components/MainContent';

/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <Router>
      <>
        <MyNavbar />
        {/* <MyNavbar auth={auth} /> */}
        <MainContent>
          {/* 麵包屑元件，定義在config/index.js */}
          {/* <MultiLevelMatchBreadCrumb /> */}
          {/* 匹配路由表(路徑單一匹配) */}
          {/* 切換顯示的元件畫面放在這下面 */}
          {/* ScrollToTop是為了讓連到另一頁內容時，頁面回到最上方 */}
          <ScrollToTop>
            <Routes>
              <Route path="/product/earring" element={<ProductEarring />} />
              <Route path="/product/ring" element={<ProductRing />} />
              <Route path="/product/necklace" element={<ProductNecklace />} />
              <Route path="/product/bracelet" element={<ProductBracelet />} />
              <Route path="/product/bag" element={<ProductBag />} />
              <Route path="/product/hat" element={<ProductHat />} />

              {/* 這裡要定義網址參數的屬性名稱 */}
              {/* <Route
                path="/product/baby/:id?"
                element={<ProductBaby />}
              /> */}
              <Route
                path="/login"
                element={<Login auth={auth} setAuth={setAuth} />}
              />
              {/* 利用props傳入頁面元件狀態 */}
              <Route path="/about" element={<About auth={auth} />} />
              <Route path="/" element={<Home auth={auth} />} />
              {/* <Route
                path="/productcategory"
                element={<ProductCategory />}
              >
                <Route index element={<PC />} />
                <Route path="pc" element={<PC />} />
                <Route path="mobile" element={<Mobile />} />
                <Route
                  path={`:type/:id`}
                  element={<Other />}
                />
              </Route> */}
              <Route path="/member" element={<Member auth={auth} />} />
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
            {/* end 匹配路由表 */}
          </ScrollToTop>
        </MainContent>

        {/* 頁尾+版權訊息 */}
        <MyFooter />
      </>
    </Router>
  );
}

export default App;
