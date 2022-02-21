import { RecoilRoot } from 'recoil';
// routes
import Router from './routes';
// theme
import ThemeConfig from './assets/theme';
import GlobalStyles from './assets/theme/globalStyles';
// components
import ScrollToTop from './components/common/ScrollToTop';
import { Helmet } from 'react-helmet';

export default function App() {
  return (
    <>
      <Helmet>
        <meta name="title" property="og:title" content="폴라 몰라 골라" />
        <meta name="description" property="og:description" content="무언가 물어보고싶을때? 폴라에게 물어봐!" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="폴라! 몰라! 골라!" />
        <meta property="og:description" content="무언가 물어보고싶을때? 폴라에게 물어봐!" />
      </Helmet>
      <ThemeConfig>
        <ScrollToTop />
        <GlobalStyles />
        {/* Recoil을 사용하는 component들은 <RecoilRoot>로 감싸야 함 */}
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </ThemeConfig>
    </>
  );
}
