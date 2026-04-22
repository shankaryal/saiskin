
export default function PageWrapper({ children, className = '' }) {
  return (
    <div className={`pt-[68px] min-h-screen bg-white ${className}`}>
      {children}
    </div>
  );
}