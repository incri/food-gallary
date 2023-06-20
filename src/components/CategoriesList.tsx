import useCategories from "../hooks/useCategories";

const CategoriesList = () => {
  const { categories } = useCategories();
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default CategoriesList;
