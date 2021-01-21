import React from 'react';

class ModalImport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        }
        this.handleFileNameChange = this.handleFileNameChange.bind(this);
        this.handleLabelListChange = this.handleLabelListChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    };

    handleFileNameChange({target}) {
        const fileName = target.files[0].name.replace('.json', '');
        this.props.onFileNameChange(fileName);
    };

    handleLabelListChange(event) {
        if (Storage) {
            this.props.onLabelListChange([])
        }
        const fileObject = event.target.files[0];
        const reader = new FileReader();
        reader.onload = event => {
            const labelList = [];
            const jsonData = JSON.parse(event.target.result);
            for (let label in jsonData) {
                labelList.push({
                    [label]: jsonData[label]
                })
            }
            this.props.onLabelListChange(labelList)
        }
        reader.readAsText(fileObject);
    };

    handleClick(event) {
        // event.preventDefault();
        this.setState({
            isLoading: true
        })

        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000)
    };

    render() {
        const fileName = this.props.fileName;
        return (
            <div className="modal fade" id="importModalCenter" tabIndex="-1" role="dialog"
                 aria-labelledby="importModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="importModalLongTitle">Nazwa pliku:</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <button className="input-group-text">Załaduj</button>
                                </div>
                                <div className="custom-file">
                                    <input type="file"
                                           className="custom-file-input"
                                           id="file-import-input"
                                           accept=".json"
                                           multiple={false}
                                           onChange={this.handleLabelListChange}
                                           onInput={this.handleFileNameChange}
                                           onClick={this.handleClick}
                                    />
                                    <label className="custom-file-label" htmlFor="file-import-input">
                                        {fileName ? fileName : 'Wybierz plik json'}
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Zamknij</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal">
                                {this.state.isLoading ? 'Ładowanie...' : 'Otwórz'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalImport;
