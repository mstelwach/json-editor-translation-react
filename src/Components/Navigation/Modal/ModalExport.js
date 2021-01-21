import React from 'react';

class ModalExport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileDownloadUrl: ''
        }
        this.exportLabelListToJSONFile = this.exportLabelListToJSONFile.bind(this);
        this.updateFileDownloadUrl = this.updateFileDownloadUrl.bind(this);
    };

    updateFileDownloadUrl(fileDownloadUrl) {
        this.setState({
            fileDownloadUrl: fileDownloadUrl
        }, () => {
            this.doFileDownload.click();
            URL.revokeObjectURL(fileDownloadUrl);
            this.setState({
                fileDownloadUrl: ''
            })
        })
    };

    exportLabelListToJSONFile(event) {
        event.preventDefault();
        const labelList = this.props.labelList;
        const labelListJSONString = JSON.stringify(labelList, null, 2);
        const fileBlob = new Blob([labelListJSONString], { type: "text/plain;charset=utf-8" });
        const fileDownloadUrl = URL.createObjectURL(fileBlob);
        this.updateFileDownloadUrl(fileDownloadUrl);
    }

    render() {
        const fileName = this.props.fileName;
        const fullFileName = fileName + '.json';
        return (
            <div className="modal fade" id="exportModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="exportModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exportModalLongTitle">Nazwa pliku:</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" id="file-export-input" placeholder="Name"
                                       aria-describedby="file-extension" defaultValue={fileName}/>
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="file-extension">.json</span>
                                    </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal"
                                    onClick={this.exportLabelListToJSONFile}>Ściągnij
                            </button>
                            <a hidden={true} download={fullFileName}
                               href={this.state.fileDownloadUrl} ref={e=>this.doFileDownload = e}>
                                Zapisz!
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalExport;