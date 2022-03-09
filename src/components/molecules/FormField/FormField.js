import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import { ErrorLabel } from '../../atoms/ErrorLabel/ErrorLabel';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ isCheckbox }) => (isCheckbox ? 'row' : 'column')};
  position: relative;

  ${Label} {
    margin: ${({ isCheckbox }) => (isCheckbox ? '0 0 0 10px' : '10px 0')};
  }
`;

const FormField = React.forwardRef(
  (
    {
      onChange,
      value,
      label,
      name,
      id,
      type = 'text',
      isError,
      isCheckbox,
      ...props
    },
    ref
  ) => {
    return (
      <Wrapper isCheckbox={isCheckbox}>
        {!isCheckbox && <Label htmlFor={id}>{label}</Label>}
        <Input
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          data-testid={name}
          isError={isError}
          {...props}
          ref={ref}
        />
        {isCheckbox && <Label htmlFor={id}>{label}</Label>}
        {isError && isError.type === 'required' && (
          <ErrorLabel>Pole wymagane</ErrorLabel>
        )}
        {isError && isError.type !== 'required' && (
          <ErrorLabel>{isError.message}</ErrorLabel>
        )}
      </Wrapper>
    );
  }
);

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
