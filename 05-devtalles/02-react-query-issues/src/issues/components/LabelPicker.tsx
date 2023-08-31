import { useLabels } from "../../hooks/useLabel";

export const LabelPicker = () => {
  const labelsQuery = useLabels();
  console.log(labelsQuery);

  if (labelsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className="badge rounded-pill m-1 label-picker"
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};