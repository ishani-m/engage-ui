import * as React from 'react';

import * as style from './Picker.scss';
export interface Props {
  image: string;
  name: string;
  email: string;
  grey: boolean;
}

class Card extends React.Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    let cardBackground;
    if (this.props.grey) cardBackground = style.cardItem + ' ' + style.grey;
    else cardBackground = style.cardItem;
    return (
      <div>
        <div className={ cardBackground }>
          <img className={ style.avatarImage + ' ' + style.cardElem } src={ this.props.image } alt="not found" />
          <div className={style.cardElem + ' ' + style.nameStyle }>{ this.props.name }</div>
          <span className={ style.cardElem + ' ' + style.emailStyle }>{ this.props.email }</span>
        </div>
      </div>
    );
  }
}

export default Card;