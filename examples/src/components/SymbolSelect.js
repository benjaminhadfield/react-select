import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';

const SYMBOLS = require('../data/symbols');

var SymbolField = createClass({
	displayName: 'SymbolField',
	propTypes: {
		label: PropTypes.string,
		searchable: PropTypes.bool,
	},
	getDefaultProps () {
		return {
			label: 'Symbols:',
			searchable: true,
		};
	},
	getInitialState () {
		return {
			disabled: false,
			searchable: this.props.searchable,
			selectValue: Symbol.for('react-select.one'),
			clearable: true,
		};
	},
	updateValue (newValue) {
		console.log('Symbol changed to ' + Symbol.keyFor(newValue) + ' (type: ' + typeof newValue + ')');
		this.setState({
			selectValue: newValue
		});
	},
	focusSymbolSelect () {
		this.refs.symbolSelect.focus();
	},
	toggleCheckbox (e) {
		let newState = {};
		newState[e.target.name] = e.target.checked;
		this.setState(newState);
	},
	render () {
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select ref="symbolSelect" autofocus options={SYMBOLS} simpleValue clearable={this.state.clearable} name="selected-state" disabled={this.state.disabled} value={this.state.selectValue} onChange={this.updateValue} searchable={this.state.searchable} />

				<div style={{ marginTop: 14 }}>
					<button type="button" onClick={this.focusSymbolSelect}>Focus Select</button>
					<label className="checkbox" style={{ marginLeft: 10 }}>
						<input type="checkbox" className="checkbox-control" name="searchable" checked={this.state.searchable} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Searchable</span>
					</label>
					<label className="checkbox" style={{ marginLeft: 10 }}>
						<input type="checkbox" className="checkbox-control" name="disabled" checked={this.state.disabled} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Disabled</span>
					</label>
					<label className="checkbox" style={{ marginLeft: 10 }}>
						<input type="checkbox" className="checkbox-control" name="clearable" checked={this.state.clearable} onChange={this.toggleCheckbox}/>
						<span className="checkbox-label">Clearable</span>
					</label>
				</div>
			</div>
		);
	}
});


module.exports = SymbolField;
