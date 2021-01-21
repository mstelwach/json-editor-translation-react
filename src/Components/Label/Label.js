import React from 'react';
import Language from "../Language/Language";

class Label extends React.Component {

    renderLanguages() {
        const label = this.props.label;
        const labelName = Object.keys(label)[0];
        const arrayLanguage = [];
        for (let language in label[labelName]) {
            if (label[labelName].hasOwnProperty(language)) {
                const defaultValueTranslation = label[labelName][language];
                const isTranslation = !!defaultValueTranslation;
                arrayLanguage.push(<Language labelName={labelName}
                                             language={language}
                                             defaultValueTranslation={defaultValueTranslation}
                                             isTranslation={isTranslation}
                                             counterUntranslatedLabel={this.props.counterUntranslatedLabel}
                                             onCounterUntranslatedLabelChange={this.props.onCounterUntranslatedLabelChange}
                                             onTranslationLabelChange={this.props.onTranslationLabelChange}/>)
            }
        }
        return arrayLanguage
    };


    render() {
        const label = this.props.label
        const labelName = Object.keys(label)[0];
        return (
            <div className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1 label-header" id={labelName}>{labelName}</h5>
                </div>
                <br/>
                {this.renderLanguages()}
            </div>
        )
    }
}

export default Label;