import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { hasPreviousSelector, classNamesForComponentSelector, stylesForComponentSelector } from './selectors/dataSelectors';

const enhance = OriginalComponent => compose(
  getContext({
    events: PropTypes.object
  }),
  connect((state, props) => ({
    hasNext: hasPreviousSelector(state, props),
    className: classNamesForComponentSelector(state, 'NextButton'),
    style: stylesForComponentSelector(state, 'NextButton'),
  })),
  mapProps(({ events: { onPrevious }, ...props }) => ({
    onClick: onPrevious,
    text: 'Previous',
    ...props }))
)((props) => <OriginalComponent {...props} text= "Previous" />)


const PreviousButton = ({ hasPrevious, onTouchTap, onClick, style, className, text }) => hasPrevious ? (
  <RaisedButton label={text} onTouchTap={onClick} style={style} className={className}/>
) :
null;

export default PreviousButton;
