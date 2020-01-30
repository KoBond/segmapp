import { connect } from 'react-redux';
import { ImageLastSegmentationPage} from '../../components/ImageProcessing';
import { doGetLastSegmentatonImage } from '../../actions/lastSegmentationProcess';
 
const mapStateToProps = (state) => ({
  getLastSegmentationRequestInProcess:state.imageLastSegmentations.getLastSegmentationRequestInProcess,
  getLastSegmentationRequestError:state.imageLastSegmentations.getLastSegmentationRequestError,
  getLastSegmentationRequestSuccess:state.imageLastSegmentations.getLastSegmentationRequestSuccess,
  getLastSegmentationRequestStatus:state.imageLastSegmentations.getLastSegmentationRequestStatus,
  
  resultLastSegmentationFilesURLs:state.imageLastSegmentations.resultLastSegmentationFilesURLs,  
  });

const mapDispathToProps = (dispath) => {
    return {
      doGetLastSegmentatonImage: () => dispath( doGetLastSegmentatonImage() ),
    };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(ImageLastSegmentationPage)