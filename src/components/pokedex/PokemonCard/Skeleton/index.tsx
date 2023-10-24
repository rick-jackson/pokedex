import { CardContent, Skeleton, Card } from "@mui/material";

const PokemonCardSkeleton: React.FC = () => {
  return (
    <Card>
      <Skeleton animation="wave" variant="rectangular" height={140} />
      <CardContent>
        <Skeleton height={32} />
        <Skeleton height={24} />
      </CardContent>
    </Card>
  );
};

export default PokemonCardSkeleton;
