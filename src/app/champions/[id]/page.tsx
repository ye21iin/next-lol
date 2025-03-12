type Props = {
  params: {
    id: string;
  };
};

const ChampionDetail = ({ params }: Props) => {
  return <div>ChampionDetail : {params.id}</div>;
};

export default ChampionDetail;
