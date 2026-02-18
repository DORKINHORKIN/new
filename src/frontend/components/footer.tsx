
export default function Footer() {
  return (
    <footer className="flex flex-col p-4">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} LARGEREST. All rights reserved.
      </p>
    </footer>
  );
}
