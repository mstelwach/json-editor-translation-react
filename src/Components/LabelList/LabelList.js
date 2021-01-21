import React from 'react';
import logo from './logo.png'
import Label from "../Label/Label";

class LabelList extends React.Component {

    renderLabels() {
        const labelList = this.props.labelList;
        if (labelList.length) {
            return (
                <div className="col-lg-12" id="list">
                    {labelList.map(label => <Label label={label}
                                                counterUntranslatedLabel={this.props.counterUntranslatedLabel}
                                                onCounterUntranslatedLabelChange={this.props.onCounterUntranslatedLabelChange}
                                                onTranslationLabelChange={this.props.onTranslationLabelChange}/>)}
                </div>
            )
        } else {
            return (
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Edytuj Tłumaczenie!</h1>
                    <p className="lead">Załaduj translację i w łatwy sposób uzupełnij brakujące etykiety tłumaczeniami.</p>
                    <br/>
                    <img src={logo} alt='Logo'/>
                </div>
            )
        }
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderLabels()}
                </div>
            </div>
        )
    }
}

export default LabelList;