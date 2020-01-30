import { connect } from 'react-redux';
import { ImageUploaderPage } from '../../components/ImageProcessing';
import { doUploadImage } from '../../actions/imageUploader';
import { setImageProcessingStep } from '../../actions/imageProcessing';

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
        doUploadImage: ( filename, dataUri, src ) => dispath( doUploadImage( filename, dataUri, src ) ),
        setImageProcessingStep: ( processingStep ) => dispath( setImageProcessingStep( processingStep ) ),
    };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(ImageUploaderPage)