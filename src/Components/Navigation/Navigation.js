import React from 'react';
import { FaLanguage, FaUpload, FaDownload, FaSave } from 'react-icons/fa';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.updateLocalStorage = this.updateLocalStorage.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.labelList.length !== this.props.labelList.length) {
            const labelList = this.props.labelList;
            let counterUntranslatedLabel = 0
            labelList.forEach(label => {
                const labelName = Object.keys(label)[0];
                for (let language in label[labelName]) {
                    const defaultValueTranslation = label[labelName][language];
                    const isTranslation = !!defaultValueTranslation;
                    !isTranslation && counterUntranslatedLabel++
                }
            })
            this.props.onCounterUntranslatedLabelChange(counterUntranslatedLabel)
        }
    }

    updateLocalStorage(event) {
        event.preventDefault();
        const labelList = this.props.labelList;
        const fileName = this.props.fileName;
        const counterUntranslatedLabel = this.props.counterUntranslatedLabel;
        const labelListJSONString = JSON.stringify(labelList, null, 2);
        localStorage.setItem('labelList', labelListJSONString);
        localStorage.setItem('fileName', fileName);
        localStorage.setItem('counterUntranslatedLabel', counterUntranslatedLabel);
        console.log('Lokalne dane zostały zapisane!')
    };

    render() {
        const counterUntranslatedLabel = this.props.counterUntranslatedLabel
        return (
            <nav className="navbar navbar-expand-lg navbar-dark static-top bg-info">
                <div className="container">
                    <a className="navbar-brand" href=''>JSON Edytor Tłumaczeń <FaLanguage/> </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <button type="button" className="btn btn-info counter-labels">Nieprzetłumaczone
                                    etykiety: <strong>{counterUntranslatedLabel}</strong>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-info" data-toggle="modal"
                                        data-target="#importModalCenter">
                                    Załaduj <FaUpload/>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-info" data-toggle="modal"
                                        data-target="#exportModalCenter">
                                    Zachowaj <FaDownload/>
                                </button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-info" onClick={this.updateLocalStorage}>
                                    Zapisz <FaSave/>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;
