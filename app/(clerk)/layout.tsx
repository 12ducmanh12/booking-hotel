const ClearLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-screen flex justify-center items-center"
    >
      {children}
    </div>
  );
};

export default ClearLayout;
