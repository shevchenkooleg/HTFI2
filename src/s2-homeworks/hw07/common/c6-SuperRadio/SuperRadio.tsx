import React, {
    ChangeEvent,
    InputHTMLAttributes,
    DetailedHTMLProps,
    HTMLAttributes,
} from 'react'
import s from './SuperRadio.module.css'
import {OptionsType} from "../../HW7";

type DefaultRadioPropsType = DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
>
// тип пропсов обычного спана
type DefaultSpanPropsType = DetailedHTMLProps<
    HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
>

type SuperRadioPropsType = Omit<DefaultRadioPropsType, 'type'> & {
    options?: OptionsType[]
    onChangeOption?: (option: number) => void

    spanProps?: DefaultSpanPropsType
}

const SuperRadio: React.FC<SuperRadioPropsType> = ({
    id,
    name,
    className,
    options,
    value,
    onChange,
    onChangeOption,
    spanProps,
    ...restProps
}) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>, value: number) => {
        onChangeOption && onChangeOption(value)
    }

    const finalRadioClassName = s.radio + (className ? ' ' + className : '')
    const spanClassName = s.span + (spanProps?.className ? ' ' + spanProps.className : '')

    const mappedOptions: any[] = options
        ? options.map((o) => (
              <label key={name + '-' + o.id} className={s.label}>
                  <input
                      id={id + '-input-' + o.id}
                      className={finalRadioClassName}
                      type={'radio'}
                      checked={o.id === value ? true : false}
                      onChange={(e)=>onChangeCallback(e, o.id)}
                      {...restProps}
                  />
                  <span
                      id={id + '-span-' + o.id}
                      {...spanProps}
                      className={spanClassName}
                  >
                      {o.value}
                  </span>
              </label>
          ))
        : []

    return <div className={s.options}>{mappedOptions}</div>
}

export default SuperRadio
