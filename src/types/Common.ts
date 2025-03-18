export interface TpImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export type Props = {
  params: {
    id: string;
  };
};

export type DetailProps = { version: string } & Pick<Props["params"], "id">;
