export default function PageWrapper({ children, className = '' }) {
  return (
    <div className={`pt-[68px] min-h-screen ${className}`}>
      {children}
    </div>
  );
}