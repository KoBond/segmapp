import React from 'react';
 
export const MainViewHelpView = ()=> (
  <div className="container-fluid">
    <br/>
    <div className="row">
      <div className="col-xl-3 col-lg-0">
        {/* Additional main page window */}
      </div>
      <div className="col-xl-7 col-md">
        {/* Main window of the main page */}
        <div className="row">



          <div className="col-xl-10 col-md">
            <h5>Segmentation model description</h5>
            <div className="alert alert-info zalert-info-card" role="alert">
              <h4>Deeplabv3-ResNet101</h4>
              <hr/>
              <p>Deeplabv3-ResNet101 is contructed by a Deeplabv3 model with a ResNet-101 backbone.</p>
              <p>The pre-trained model has been trained on a subset of COCO train2017, on the 20 categories that are present in the Pascal VOC dataset.</p>

              <h5>Resources</h5>
              <hr/>
              <a title="Deeplabv3-ResNet101 | PyTorch" 
                 href="https://pytorch.org/hub/pytorch_vision_deeplabv3_resnet101/"
                 className="internal-page-link-calm">
                Deeplabv3-ResNet101 | PyTorch
              </a>
              <br/>
              <a title="Rethinking Atrous Convolution for Semantic Image Segmentation" 
                 href="https://arxiv.org/abs/1706.05587"
                 className="internal-page-link-calm">
                Rethinking Atrous Convolution for Semantic Image Segmentation
              </a>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
)