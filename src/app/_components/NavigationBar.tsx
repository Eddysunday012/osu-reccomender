import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <div className="flex justify-center gap-4">
      <Button variant="destructive">Login</Button>
      <Button>Connect osu! Account</Button>
    </div>
  );
}
