export default function DeclinationHeaderRow(props) {
  return (
    <thead>
      <tr>
        {props.headers.map((h) => (
          <th key={h}>{h}</th>
        ))}
      </tr>
    </thead>
  );
}
