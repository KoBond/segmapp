
// Component for redirection
import { RedirectTo } from '../../containers/RedirectTo';
// Main visual modules
 
import  ImageProcessingNotFoundView   from '../../components/ImageProcessing/ImageProcessingNotFoundView'

// Contents of the main module window
import ConnectedImageUploading from '../../containers/ImageProcessing/ConnectedImageUploading';
import ConnectedImageSegmentation from '../../containers/ImageProcessing/ConnectedImageSegmentation';
import ConnectedImagePreview from '../../containers/ImageProcessing/ConnectedImagePreview';
import ConnectedImageLastSegmentation from '../../containers/ImageProcessing/ConnectedImageLastSegmentation';

// Contents of the module's filter window

// Internal information pages of the module

// The main router of the module
const ModuleRootPath = '/ImgProcessing';

// Settings for the Receivables module
const ImageProcessingModules = [
  {
    caption: 'Get image',
    exact: false,
    link: ModuleRootPath + '/Upload',
    path: ModuleRootPath + '/Upload',
    component: ConnectedImageUploading,
    filterСomponent: ()=>(null),
  },

  {
    caption: 'Preview',
    exact: false,
    link: ModuleRootPath + '/Preview',
    path: ModuleRootPath + '/Preview',
    component: ConnectedImagePreview,
    filterСomponent: ()=>(null),
  },

  {
    caption: 'Segmentation',
    exact: false,
    link: ModuleRootPath + '/Segmentation',
    path: ModuleRootPath + '/Segmentation',
    component: ConnectedImageSegmentation,
    filterСomponent: ()=>(null),
  },  
 
  {
    caption: 'Last segmentations',
    exact: false,
    link: ModuleRootPath + '/LastSegmentation',
    path: ModuleRootPath + '/LastSegmentation',
    component: ConnectedImageLastSegmentation,
    filterСomponent: ()=>(null),
  },  

  { // Index page of the ImageProcessing module
    exact: false,
    path: ModuleRootPath + '/',
    component: ()=>RedirectTo(ModuleRootPath + '/Upload'),  
    filterСomponent: ()=>(null),
  },

  { // Message "Object not found" - output to the main window of the module
    exact: false,
    component: ImageProcessingNotFoundView,
    filterСomponent: ()=>(null),
  },
];

export default ImageProcessingModules;