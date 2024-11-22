import React from "react";

interface Props {
  params: {
    game: string;
  };
}

export default function page({ params }: Props) {
  return (
    <div className="p-20 flex flex-col items-center justify-center gap-5">
      <h1>{params.game} Page</h1>
    </div>
  );
}
