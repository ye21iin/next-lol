type Props = {
  params: {
    id: string;
  };
};

const ItemDetail = ({ params }: Props) => {
  return <div>ItemDetail : {params.id}</div>;
};

export default ItemDetail;
