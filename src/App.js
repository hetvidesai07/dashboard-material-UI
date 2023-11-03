// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from './components/common/topScroll/index';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <Routes />
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
