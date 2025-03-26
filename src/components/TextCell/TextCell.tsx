import React from "react";
import { TextCell } from "../../types/cellTypes";

const TextCellComponent: React.FC<TextCell> = ({
  type = "text",
  field,
  label,
}) => {
  if (type !== "text") return;

  return (
    <div>
      {field && field.length > 0 ? (
        <span>{field}</span>
      ) : (
        <span>{label || ""}</span>
      )}
    </div>
  );
};

export default TextCellComponent;
