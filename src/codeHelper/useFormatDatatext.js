export function FormDatatext(text) {
  const newText = String(text)
    .split("\n")
    .map((str, indx) => (
      <div key={indx}>
        <span>{str}</span>
        <br />
      </div>
    ));
  return newText;
}
