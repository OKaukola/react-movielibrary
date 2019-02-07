import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { hasNextSelector, classNamesForComponentSelector, stylesForComponentSelector } from './selectors/dataSelectors';

const enhance = OriginalComponent => compose(
  getContext({
    events: PropTypes.object
  }),
  connect((state, props) => ({
    hasNext: hasNextSelector(state, props),
    className: classNamesForComponentSelector(state, 'NextButton'),
    style: stylesForComponentSelector(state, 'NextButton'),
  })),
  mapProps(({ events: { onNext }, ...props }) => ({
    onClick: onNext,
    text: 'Next',
    ...props }))
)((props) => <OriginalComponent {...props} text= "Next" />)

const NextButton = ({ hasNext, onClick, style, className, text }) => hasNext ? (
  <RaisedButton label={text} onTouchTap={onClick} className={className} style={style}/>
) :
null;

export default NextButton;
