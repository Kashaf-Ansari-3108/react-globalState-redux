import Button from 'react-bootstrap/Button';

function ButtonCmp({value,variant,onClick}) {
  return (
    <>
      <Button onClick={onClick} variant={variant}>{value}</Button>
      </>
  );
}

export default ButtonCmp;