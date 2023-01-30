import Tag from "./Tag";

export default {
  title: "Tag",
  component: Tag,
};

export const ColourTags = () => {
  return (
    <div>
      <Tag color="purple">nitrogen fixer</Tag>
      <Tag color="orange">insect attractor</Tag>
      <Tag color="cornflowerblue">dynamic accumulator</Tag>
    </div>
  );
};
