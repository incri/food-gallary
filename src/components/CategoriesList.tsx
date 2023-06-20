import useCategories from "../hooks/useCategories";

const CategoriesList = () => {
  const { data } = useCategories();
  return (
    <ul>
      {data.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </ul>
  );
};

export default CategoriesList;
