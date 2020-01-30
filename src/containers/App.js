import { connect } from 'react-redux';
import { DesktopMainView as MainView} from '../components';
import { systemVersion, systemName } from '../config/systemConfig'

const mapStateToProps = (state) => ({
  systemName: systemName,
  systemVersion: systemVersion,
});

// Authorization is not required for this demo
const mapDispathToProps = (dispath) => {
  return {
   // doLogout: () => dispath(autorizationLogout()),
   // doCloseUpdateAppMessage: () => dispath(сloseUpdateAppMessage()),
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(MainView)
