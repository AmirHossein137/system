const Layout = ({ children }) => {
  return (
    <div className="container mx-auto min-h-screen">
      <div className="w-full min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
