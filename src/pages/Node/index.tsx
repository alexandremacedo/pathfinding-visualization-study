import React from "react";
import { INode } from "./dtos";

import { Container } from "./styles";

export const Node: React.FC<INode> = ({ nodeRole }: any) => {
  function getNodeColor(): string {
    const nodeColor: any = {
      start: "#0F8B8D",
      end: "#797A9E",
    }
    
    return nodeColor[nodeRole] ? nodeColor[nodeRole] : "#fff";
  }

  return (
    <Container color={getNodeColor()}></Container>
  );
};
