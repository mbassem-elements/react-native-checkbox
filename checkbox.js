'use strict';

import React, {Component, useState} from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';

const CB_ENABLED_IMAGE = require('./cb_enabled.png');
const CB_DISABLED_IMAGE = require('./cb_disabled.png');

const CheckBox = props => {
  const {
    disabled,
    onChange,
    checked,
    containerStyle,
    mainContainerStyle,
    checkboxStyle,
    checkedImage,
    uncheckedImage,
    labelStyle,
    label,
    labelContainerStyle,
  } = props;

  const _onChange = () => {
    if (onChange) {
      onChange(checked);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={_onChange}
      style={[styles.flexContainer, mainContainerStyle]}
      disabled={disabled}>
      <View style={[styles.flexContainer, containerStyle]}>
        <Image
          style={[styles.checkbox, checkboxStyle]}
          source={checked ? checkedImage : uncheckedImage}
        />
        {label ? (
          <View style={[styles.labelContainer, labelContainerStyle]}>
            {typeof label === 'string' ? (
              <Text style={[styles.label, labelStyle]}>{label}</Text>
            ) : (
              label
            )}
          </View>
        ) : (
          <></>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
var styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkbox: {
    width: 26,
    height: 26,
  },
  labelContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  label: {
    fontSize: 15,
    color: 'grey',
  },
});

CheckBox.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.any,
  labelStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  checkboxStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  containerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  labelContainerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mainContainerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  checked: PropTypes.bool,
  checkedImage: PropTypes.number,
  uncheckedImage: PropTypes.number,
  onChange: PropTypes.func,
};

CheckBox.defaultProps = {
  disabled: false,
  label: '',
  labelStyle: {},
  checkboxStyle: {},
  containerStyle: {},
  labelContainerStyle: {},
  mainContainerStyle: {},
  checked: false,
  checkedImage: CB_ENABLED_IMAGE,
  uncheckedImage: CB_DISABLED_IMAGE,
};

export {CheckBox};
