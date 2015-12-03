import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import isEqual from 'lodash.isequal';
import {
  bindDropDownAdd,
  bindDropDownRemove,
  bindDropDownCollapse,
  bindDropDownDrop,
  bindDropDownMouseOver,
  bindDropDownMouseOut,
  bindDropDownSelect
} from 'actions/dropDown';
import store from 'store';
let subscribe = store.subscribe;
import assign from 'object-assign';

class DropDown extends Component {

  static propTypes = {
    id: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  state = {selected: 0};

  constructor(props) {
    super(props);

    subscribe(() => {
      let previousState = this.state;

      if (previousState === null || previousState === undefined) return;

      let state = store.getState().dropDown
        .filter(item => item.id === this.props.id)[0];

      if (isEqual(state, previousState)) return;

      this.setState(state);
    });
  }

  componentDidMount() {
    /*рендеринг катеха*/
/*    let katexFormulas = findDOMNode(this)
      .querySelectorAll(".katex");

    for (let propName in katexFormulas) {
      if (!katexFormulas.hasOwnProperty(propName)) continue;
      let formula = katexFormulas[propName];
      katex.render(formula)
    }*/
  }

  componentWillMount() {
    let props = assign({}, this.props);
    if (props.selected === undefined || props.selected === null) props.selected = 0;

    bindDropDownAdd(this.props.id, props);
  }

  componentWillUnmount() {
    bindDropDownRemove(this.props.id);
  }

  render() {
    let {selected, mouseOver, dropped} = this.state;
    let {list, id} = this.props;

    let activeItem = list[selected];

    return (
      <div className={"dropdown" + (dropped ? " open" : "")}>
        <a className="dropdown-toggle"
           href="#"
           onClick={() => {
            dropped ?
            bindDropDownCollapse(id) :
            bindDropDownDrop(id)
          }}
        >
          {activeItem}
          <b className="caret"/>
        </a>
        <ul className="dropdown-menu" role="menu">
          {
            list
              .map((el, i) => {
                return [
                  <li key={el}
                      role="presentation"
                      onMouseOver={() => {
                        bindDropDownMouseOver(id, i);
                      }}
                      onClick={() => {
                        bindDropDownSelect(id, i);
                        bindDropDownCollapse(id);
                      }}
                  >
                    <a className={i === mouseOver ? "hovered" : ""}
                       role="menuitem"
                       href="#">
                      {el}
                    </a>
                  </li>,

                  i === list.length - 1 ?
                    null :
                    <li key={el + "Divider"} role="presentation"
                        className="divider"/>
                ];
              })
              .reduce((prev, curr) => {
                let arr = [];
                arr.push(...prev);
                arr.push(...curr);
                return arr;
              }, [])
          }
        </ul>
      </div>
    );
  }
}

export default DropDown;