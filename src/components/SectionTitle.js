function SectionTitle({ children, onClick }) {
  return (
    <h2 className="section-title" onClick={onClick}>
      {children}
    </h2>
  );
}

export default SectionTitle;
