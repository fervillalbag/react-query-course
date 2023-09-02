import { useLabels } from "../../hooks/useLabel";
import Loading from "../../share/components/Loading";

interface LabelPickerProps {
  selectedLabels: string[];
  onChange: (labelName: string) => void;
}

export const LabelPicker = ({
  onChange,
  selectedLabels,
}: LabelPickerProps) => {
  const labelsQuery = useLabels();

  if (labelsQuery.isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {labelsQuery.data?.map((label) => (
        <span
          key={label.id}
          className={`badge rounded-pill m-1 label-picker ${
            selectedLabels.includes(label.name) ? "label-active" : ""
          }`}
          style={{
            border: `1px solid #${label.color}`,
            color: `#${label.color}`,
          }}
          onClick={() => onChange(label.name)}
        >
          {label.name}
        </span>
      ))}
    </div>
  );
};
