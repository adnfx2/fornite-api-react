import React from "react";
import Placeholder from "./Placeholder";

const CardPlaceholder = () => (
  <Placeholder className="mb-3">
    <Placeholder.Header>
      <Placeholder.Text variant="md" />
    </Placeholder.Header>
    <Placeholder.Image />
    <Placeholder.Body>
      <Placeholder.Paragraph lines={3} />
    </Placeholder.Body>
  </Placeholder>
);

const EllipsisPlaceholder = () => (
  <div className="w-100">
    <Placeholder.Ellipsis />
  </div>
);

const ListPlaceholder = () => (
  <React.Fragment>
    {Array.from(Array(3)).map((_, i) => (
      <CardPlaceholder />
    ))}
    <EllipsisPlaceholder />
  </React.Fragment>
);

export default ListPlaceholder;
