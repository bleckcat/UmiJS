export default function Button({ type = 'primary', text, size = 'large' }) {
  return (
    <Button block={true} size={size} type={type}>
      {text}
    </Button>
  );
}
