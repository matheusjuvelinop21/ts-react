import React from "react";
import { Repository } from "../../store/ducks/repositories/types";


export default function RepositoryComponent({ repository }: OwnProps) {
  return <li>{repository.name}</li>
}

interface OwnProps {
  repository: Repository
}
