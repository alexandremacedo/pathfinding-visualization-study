import React, { useEffect, useState } from "react";
import { Node } from "../Node";

import { Container } from "./styles";

export const Main: React.FC = () => {
  const [nodes, setNodes] = useState<any>([]);

  useEffect(() => {
    buildGrid();
  }, []);

  function buildGrid(rowsLimit: number = 20, columnsLimit: number = 50) {
    setNodes(Array(rowsLimit).fill(Array(columnsLimit).fill({})));
  }

  return (
    <Container>
      {nodes?.map((nodeColumns: any, rowsIndex: number) => (
        <div key={`row${rowsIndex}`}>
          {nodeColumns.map((currentNode: any, columnIndex: number) => (
            <Node nodeRole={currentNode?.role} key={`column${columnIndex}`} />
          ))}
        </div>
      ))}
    </Container>
  );
};
