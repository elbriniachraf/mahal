import React from 'react'
import Classes from './Input.module.scss';

type Props = {
  type?: string;
  label: string;
  placeHolder: string;
  error?: any;
  id: string;
  value: string | number;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  touched?: any;
  style?: string;
  disabled?: boolean;
  as?: string;
  hidden?: boolean;
  enabled?: boolean;
}

const Input = ({ type = 'text', onBlur, id, label, placeHolder, error, value, onChange, touched, style, disabled, as, hidden, enabled = false }: Props) => {
  return (
    <div className={Classes['input-content']}>
      <label htmlFor={id} className={hidden ? Classes.hidden : ''}> { label } </label>
      {
        as === 'textarea' ? <textarea 
          placeholder={placeHolder} 
          value={value} 
          onChange={onChange}
          className={hidden ? Classes.hidden :''} 
          cols={30} 
          rows={5}
          id={id} 
        >
          
        </textarea> : <input 
          id={id} 
          type={type} 
          placeholder={placeHolder} 
          className={`${hidden ? Classes.hidden :''} ${enabled ? Classes.enabled : ''}`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onBlur={onBlur}
        />
      }
      {error && touched && (<p className={Classes.error}>{ error }</p>) }
    </div>
  )
}

export default Input

type RadioButtonProps = {
  label: string;
  radioData: string[];
  value: string | number;
  onChange: (event: any) => void;
  id?: string;
}

export const RadioButton = ({ label, radioData, value, id, onChange }: RadioButtonProps) => {

  return <div className={Classes['radio-content']}>
    <label>{ label }</label>
    <div className={Classes['items']}>
      {radioData.map((item, index) => <label key={index}>
        <input 
          type="radio" 
          name="radio" 
          checked={item === value} 
          value={item}
          onChange={onChange}
          // id={id}
        />
        <span>{item}</span>
      </label>)}
    </div>
  </div>
}

type SelectOptionProps = {
  label: string;
  radioData: string[];
  value: string | number;
  onChange: (event: any) => void;
  id?: string;

  selectData: {id: string, name: string}[]
}
export const SelectOption = ({ label, id, selectData, onChange, value }: SelectOptionProps) => {
  return <div className={Classes['select-content']}>
    <label>{ label }</label>
    <select className={Classes.select} id={id} onChange={onChange}>
      <option value=''>Select categorie</option>
      {selectData.length > 0 && selectData.map((item, index) =>(
        <option 
          key={index} 
          value={item.id} 
          selected={value === item.id}
        >
          {item.name}
        </option>
      ))}
    </select>
  </div> 
}