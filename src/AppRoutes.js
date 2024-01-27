import { Routes, Route } from 'react-router-dom';
// import MainMenu from './components/MainMenu/MainMenu';

import SharedLayout from 'components/SharedLayout/SaredLayout';
import HomePage from './pages/HomePage/HomePage';
import PostsSearchPage from './pages/PostsSearchPage/PostsSearchPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import SinglePostPage from 'pages/SinglePostPage/SinglePostPage';
import SinglePostComentsPage from 'pages/SinglePostComentsPage/SinglePostComentsPage';

const AppRoutes = () => {
  return (
    <>
      {/* <MainMenu /> */}
      <Routes>
        {/* <Route path="/" element={<HomePage />}> */}
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="posts-search" element={<PostsSearchPage />} />
          <Route path="posts/:id" element={<SinglePostPage />} />
          <Route path='posts/:id/comments' element={<SinglePostComentsPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;
