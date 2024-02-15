export default function MainLayout({ children }) {
  return (
    <main className="flex justify-between items-start h-screen">
      <main className="grid grid-cols-1 h-full w-full flex-grow overflow-y-auto bg-white">
        <div className="h-full w-full container mx-auto">{children}</div>
      </main>
    </main>
  );
}
