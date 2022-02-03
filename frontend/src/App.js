import { RecoilRoot } from 'recoil';
// routes
import Router from './routes';
// theme
import ThemeConfig from './assets/theme';
import GlobalStyles from './assets/theme/globalStyles';
// components
import ScrollToTop from './components/common/ScrollToTop';

export default function App() {
  return (
    <ThemeConfig>
      <ScrollToTop />
      <GlobalStyles />
      {/* Recoil을 사용하는 component들은 <RecoilRoot>로 감싸야 함 */}
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ThemeConfig>
  );
}
