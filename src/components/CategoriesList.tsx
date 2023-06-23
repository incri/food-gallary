import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useCategories, { Categories } from "../hooks/useCategories";

interface Props {
  onSelectCategory: (category: Categories) => void;
  selectedCategory: Categories | null;
}

const CategoriesList = ({ selectedCategory, onSelectCategory }: Props) => {
  const { data, isLoading, error } = useCategories();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((category) => (
        <ListItem key={category.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={category.background_image}
            />
            <Button
              fontWeight={category.id === selectedCategory?.id ? 'bold' : 'normal'} 
              onClick={() => onSelectCategory(category)}
              fontSize="lg"
              variant="link"
            >
              {category.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default CategoriesList;
