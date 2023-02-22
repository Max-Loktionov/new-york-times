interface ISection {
  title?: string;
  children: React.ReactNode;
}
// children?: React.ReactNode;
// children?.: JSX.Element;
function Section({ title, children }: ISection) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

export default Section;
