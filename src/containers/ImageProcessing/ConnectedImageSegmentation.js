import { connect } from 'react-redux';
import { ImageSegmentationPage} from '../../components/ImageProcessing';
import { doSegmentatonImage, segmentatonReset } from '../../actions/segmentationProcess';
import { setImageProcessingStep } from '../../actions/imageProcessing';

const mapStateToProps = (state) => ({
  makeSegmentationRequestInProcess:state.imageSegmentations.makeSegmentationRequestInProcess,
  makeSegmentationRequestError:state.imageSegmentations.makeSegmentationRequestError,
  makeSegmentationRequestSuccess:state.imageSegmentations.makeSegmentationRequestSuccess,
  makeSegmentationRequestStatus:state.imageSegmentations.makeSegmentationRequestStatus,

  sourceFileUrl:state.imageUploader.serverSourceFileNameURL,
  sourceFileName:state.imageUploader.uploadSourceFileName,

  resultSegmentationFileUrl:state.imageSegmentations.resultSegmentationFileUrl,
  resultSegmentationFileName:state.imageSegmentations.resultSegmentationFileName,

  imageProcessingStep: state.imageProcessing.imageProcessingStep,
  });

const mapDispathToProps = (dispath) => {
    return {
        doSegmentatonImage: ( filename ) => dispath( doSegmentatonImage( filename ) ),
        setImageProcessingStep: ( processingStep ) => dispath( setImageProcessingStep( processingStep ) ),
        segmentatonReset: () => dispath( segmentatonReset ())
    };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(ImageSegmentationPage)
