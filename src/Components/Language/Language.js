import React from 'react';

class Language extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classBorder: this.props.isTranslation ? 'border border-success' : 'border border-danger',
            isTranslation: this.props.isTranslation
        };
        this.updateCounterUntranslatedLabel = this.updateCounterUntranslatedLabel.bind(this);
        this.updateTranslationLabel = this.updateTranslationLabel.bind(this);
        this.updateIsTranslation = this.updateIsTranslation.bind(this);
        this.updateClassBorder = this.updateClassBorder.bind(this);
        this.handleClassBorderChange = this.handleClassBorderChange.bind(this);
        this.handleCounterUntranslatedLabelChange = this.handleCounterUntranslatedLabelChange.bind(this);
    };

    updateCounterUntranslatedLabel(counter) {
        this.props.onCounterUntranslatedLabelChange(counter)
    };

    updateTranslationLabel(labelName, language, translationValue) {
        this.props.onTranslationLabelChange(labelName, language, translationValue)
    };

    updateIsTranslation(boolean) {
        this.setState({
            isTranslation: boolean
        })
    };

    updateClassBorder(className) {
        this.setState({
            classBorder: className
        })
    };

    handleClassBorderChange({target}) {
        const valueTranslation = target.value;
        if (valueTranslation) {
            this.updateClassBorder('border border-success')
        } else {
            this.updateClassBorder('border border-danger')
        }
    };

    handleCounterUntranslatedLabelChange({target}) {
        let counterUntranslatedLabel = this.props.counterUntranslatedLabel;
        const labelName = this.props.labelName;
        const language = this.props.language;
        const translationValue = target.value;
        if (translationValue && !this.state.isTranslation) {
            counterUntranslatedLabel--;
            this.updateIsTranslation(true)
        } else if (!translationValue && this.state.isTranslation) {
            counterUntranslatedLabel++;
            this.updateIsTranslation(false)
        }
        this.updateCounterUntranslatedLabel(counterUntranslatedLabel);

        if (translationValue) {
            this.updateTranslationLabel(labelName, language, translationValue)
        }
    };

    render() {
        const language = this.props.language;
        const defaultValueTranslation = this.props.defaultValueTranslation;
        return (
            <div className="input-group mb-1 translation-label">
                <div className="input-group-prepend">
                    <span className="input-group-text">{language}</span>
                </div>
                <input type="text" className={`form-control translation-${this.state.isTranslation} ${this.state.classBorder}`} placeholder="Translation"
                       aria-label="Translation" defaultValue={defaultValueTranslation} onInput={this.handleClassBorderChange} onBlur={this.handleCounterUntranslatedLabelChange}/>
            </div>
        )
    }
}

export default Language;