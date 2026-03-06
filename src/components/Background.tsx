export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-200 h-200 bg-blue-500/20 blur-[150px] rounded-full" />
      <div className="absolute -bottom-50 -right-50 w-150 h-150 bg-purple-500/20 blur-[150px] rounded-full" />
    </div>
  );
}
