import {shallow} from 'enzyme';
import CartItem from "./CartItem";
import React from "react";

describe('CartItem', () => {
  it('renders three <Foo /> components', () => {

    const add = jest.fn();
    const remove = jest.fn();
    const removeAll = jest.fn();

    const wrapper = shallow(
      <CartItem
        id={"4"}
        price={20.00}
        brand={"Test Brand"}
        quantity={7}
        title={"Test Item"}
        add={add}
        remove={remove}
        removeAll={removeAll}
      />);

    const multiplier = wrapper.find('.CartItem--description-title').find('span');
    expect(multiplier.text()).toEqual(' x 7');

    const price = wrapper.find('.CartItem--description-price');
    expect(price.text()).toEqual('$20');

    const controls = wrapper.find('.CartItem--control');
    expect(controls).toHaveLength(3);

    wrapper.find('.add').find('button').simulate('click');
    expect(add).toHaveBeenCalled();

    wrapper.find('.remove').find('button').simulate('click');
    expect(remove).toHaveBeenCalled();

    wrapper.find('.removeAll').find('button').simulate('click');
    expect(removeAll).toHaveBeenCalled();

    expect(wrapper.find('.add').find('button').prop('id')).toEqual("4");

    expect(1).toEqual(1);
  });

});
