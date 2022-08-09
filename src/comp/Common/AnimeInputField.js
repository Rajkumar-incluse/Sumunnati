function AnimeInputField({
  wrapperCls = '', inpCls = '', spanCls = '',
  inputType = 'text', labelProps = {},
  txt = '', value = '', onChange = () => { },
  ...otherProps
}) {
  return (
    <label
      className={`anime-input-wrapper relative ${wrapperCls}`}
      {...labelProps}
    >
      <input
        required
        type={inputType}
        className={`anime-input ${inpCls}`}
        value={value}
        onChange={onChange}
        {...otherProps}
      />
      <span className={`anime-input-placeholder ${spanCls}`}>
        {txt}
      </span>
    </label>
  )
}

export default AnimeInputField