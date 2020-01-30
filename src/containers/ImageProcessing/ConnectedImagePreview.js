import { connect } from 'react-redux';
import { ImagePreviewPage } from '../../components/ImageProcessing';
import { setImageProcessingStep } from '../../actions/imageProcessing';
import { segmentatonReset } from '../../actions/segmentationProcess';


const mapStateToProps = (state) => ({
  uploadSourceFileRequestError:state.imageUploader.uploadSourceFileRequestError,
  uploadSourceFileRequestInProcess:state.imageUploader.uploadSourceFileRequestInProcess,
  uploadSourceFileRequestStatus:state.imageUploader.uploadSourceFileRequestStatus,
  uploadSourceFileRequestSuccess:state.imageUploader.uploadSourceFileRequestSuccess,
  sourceFileUrl:state.imageUploader.serverSourceFileNameURL,
  sourceFileName:state.imageUploader.uploadSourceFileName,
  imageProcessingStep: state.imageProcessing.imageProcessingStep,
  });

const mapDispathToProps = (dispath) => {
    return {
      setImageProcessingStep: ( processingStep ) => dispath( setImageProcessingStep( processingStep ) ),
      segmentatonReset: () => dispath( segmentatonReset ())
    };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(ImagePreviewPage)