import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const FoodCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="215px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default FoodCardSkeleton;
