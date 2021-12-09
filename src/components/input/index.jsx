const Input = ({ register, name, label, error = "", ...rest }) => {
  return (
    <div>
      <div>
        <p>
          {label}: {!!error && <span>{error}</span>}{" "}
        </p>
      </div>
      <div>
        <input {...register(name)} {...rest} />
      </div>
    </div>
  );
};

export default Input;
