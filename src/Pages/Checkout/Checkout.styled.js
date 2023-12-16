import styled from 'styled-components';
import { Form, Input } from 'antd';

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const CheckoutForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
  align-items: flex-start;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
  color: #333;
`;

export const InputField = styled(Input)`
  width: calc(100% - 20px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ErrorMessageComponent = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const FormButtons = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
  }

  button[type='button'] {
    background-color: #ccc;
    color: #333;
  }

  button[type='submit'] {
    background-color: #007bff;
    color: white;
  }
`;
