import React, { Component } from 'react';
import { Meta, Story } from '@storybook/react';
import {Button, Props } from '../src/Button';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'Clicked' }, 
    children: {
      defaultValue: 'Default Text',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Default = Template.Bind({});

export const Secondary = Template.Bind({});

export const Warning = Template.bind({backgroundColor: "yellow"}) ;



Secondary.args = {
  variant: 'secondary',
  onClick: action('secondary click'),
  children: 'I am secondary',
};
