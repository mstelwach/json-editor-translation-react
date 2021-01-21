import React from 'react';
import Navigation from "../Navigation/Navigation";
import ModalImport from "../Navigation/Modal/ModalImport";
import LabelList from "../LabelList/LabelList";
import ModalExport from "../Navigation/Modal/ModalExport";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: '',
            labelList: [],
            counterUntranslatedLabel: 0
        };
        this.updateTranslationLabel = this.updateTranslationLabel.bind(this);
        this.updateFileName = this.updateFileName.bind(this);
        this.updateLabelList = this.updateLabelList.bind(this);
        this.updateCounterUntranslatedLabel = this.updateCounterUntranslatedLabel.bind(this);
    };

    updateTranslationLabel(labelName, language, translationValue) {
        const labelList = this.state.labelList;
        // const newLabelList = labelList.map(label => label[translationLabel][language] !== translationValue ? {...label, })
        // const newLabelList = labelList.map(label => {
        //     return label[labelName][language] !== translationValue ? {...label[labelName], [language]: translationValue} : label
        // })
        const objIndex = labelList.findIndex(label => Object.keys(label)[0] === labelName);
        labelList[objIndex][labelName][language] = translationValue;
        this.setState({
            labelList: labelList
        })
    };

    updateFileName(fileName) {
        this.setState({
            fileName: fileName
        })
    };

    updateLabelList(labelList) {
        this.setState({
            labelList: labelList
        })
    };

    updateCounterUntranslatedLabel(counter) {
        this.setState({
            counterUntranslatedLabel: counter
        })
    };

    componentDidMount() {
        // Get local
        let labelListJSONString;
        let fileName;
        let counterUntranslatedLabel;
        if (Storage) {
            labelListJSONString = localStorage.getItem('labelList');
            fileName = localStorage.getItem('fileName');
            counterUntranslatedLabel = localStorage.getItem('counterUntranslatedLabel');
        }
        if (labelListJSONString) {
            const labelList = JSON.parse(labelListJSONString)
            this.updateLabelList(labelList)
        }
        if (fileName) {
            this.updateFileName(fileName)
        }
        if (counterUntranslatedLabel) {
            this.updateCounterUntranslatedLabel(counterUntranslatedLabel)
        }
    };

    render() {
        return (
            <div>
              <Navigation onCounterUntranslatedLabelChange={this.updateCounterUntranslatedLabel}
                          counterUntranslatedLabel={this.state.counterUntranslatedLabel}
                          labelList={this.state.labelList}
                          fileName={this.state.fileName}
              />
              <ModalImport onFileNameChange={this.updateFileName}
                           onLabelListChange={this.updateLabelList}
                           fileName={this.state.fileName}
              />
              <ModalExport fileName={this.state.fileName}
                           labelList={this.state.labelList}
              />
              <LabelList onCounterUntranslatedLabelChange={this.updateCounterUntranslatedLabel}
                         onTranslationLabelChange={this.updateTranslationLabel}
                         labelList={this.state.labelList}
                         counterUntranslatedLabel={this.state.counterUntranslatedLabel}
              />
            </div>
        )
    }
}

export default App;