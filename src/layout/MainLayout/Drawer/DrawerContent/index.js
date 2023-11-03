// project import
import Navigation from './Navigation';
import SimpleBar from '../../../../components/common/barScroll/index';

// ==============================|| DRAWER CONTENT ||============================== //

const DrawerContent = () => (
  <SimpleBar
    sx={{
      '& .simplebar-content': {
        display: 'flex',
        flexDirection: 'column'
      }
    }}
  >
    <Navigation />
  </SimpleBar>
);

export default DrawerContent;
